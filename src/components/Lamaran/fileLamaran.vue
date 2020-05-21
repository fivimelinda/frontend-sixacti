<template>
  <div class="FormCreateLoker">
    <br />
    <h1>Buat Lamaran Pekerjaan</h1>
    <br />
    <div class="card">
      <div class="card-header">Formulir Pembuatan Lamaran Pekerjaan</div>
      <div class="card-body">
        <form enctype="multipart/form-data">

            <div class="form-group">
              
              <div class="mb-2 label">Foto Kartu Tanda Penduduk*</div>
              <!-- <b-form-file
              size=""
              v-model="file"
              placeholder="Choose a file or drop it here...">
              </b-form-file> -->
              <input class="form-control" type="file" ref="file" v-on:change="handleFileUpload()" id="file" required>
              <small class="form-text text-muted">Dalam format .jpg/.png</small>
              <small class="form-text text-muted">*Foto KTP hanya dapat dimasukkan sekali</small>
            </div>

            <button v-on:click="submitFile(); cekSukses()" @click="submitted = true" :disabled="submitted" type="" class=" mt-5 mb-5 btn btn-danger">Simpan</button>
            <br>
            <button class=" mt-5 mb-5 btn btn-dark" v-on:click="afterClicked()">Selanjutnya</button>
        </form>

      </div>

    </div>

    <br>
    <br>
    <b-modal size="lg" ref="my-modal" hide-footer title="Notifikasi">
                <div class="container">
                    <div class="row">
                        <div class="col-sm" id="berhasil">
                            Foto berhasil disimpan
                        </div>
                        <div class="col-sm">
                            <v-img class="centang"
                :src="require('@/assets/success.png')"
                ></v-img>
                        </div>
                    </div>
                </div>
                
            </b-modal>
       <b-modal size="lg" ref="error-modal" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Foto gagal disimpan
                    </div>
                    <div class="col-sm">
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <br>
            </div>
            
            
        </b-modal>
  </div>
</template>


<script>
// import axios from 'axios';
import authHeader from '../../service/AuthHeader'
export default {
  name:'fileLamaran',
  data(){
    return{
      file:null,
      ressData: '',
      count: 0,
      submitted: false
    }
  },
  computed: {
    idLamaran(){
      return this.$route.params.idLamaran;
    }
  },
  methods:{
    afterClicked(){
      this.$router.push("/fileKk/"+this.idLamaran);
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },

    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      console.log(formData.getAll('file'));

      this.axios.post('https://sixacti-api.herokuapp.com/api/uploadKtp/' + this.idLamaran,
        formData,{ headers:authHeader() }).then(ress => {
              this.ressData = ress;
            })
            .catch((err) => {
                console.log("masuk err")
                this.count ++;
                console.log(err);
                this.errorModal()
            }) 
        console.log("masuk submit file")
            
      },

      cekSukses(){
        
        if(this.count == 0){
          console.log("masuk cek sukses")
          this.count = 0;
          this.openModal()
        }
      },

      openModal() {
            this.$refs['my-modal'].show();
        },
        errorModal(){
            this.$refs['error-modal'].show();
            this.$refs['my-modal'].hide();
        }
      
    
  }
}
</script>

<style scoped>
.FormCreateLoker {
  background-color: #F6EDF0;
}

h1{
  font-family: 'oswald';
  text-align: left;
  margin-left: 10%;
}

.card {
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
}

.card-header {
  background-color: #C53751;
  font-family: 'oswald';
  text-align: left;
  font-style: medium;
  font-size: 20px;
  color: white;
}

form{
    margin-left: 10%;
    margin-right: 10%;

}

.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}


</style>