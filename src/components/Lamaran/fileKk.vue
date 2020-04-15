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
              <div class="mb-2 label">Foto Kartu Keluarga*</div>
              <input class="form-control" type="file" ref="file" v-on:change="handleFileUpload()" id="file" required>
            </div>
            <!-- <div class="form-group">
              <div class="mb-2 label">Foto Kartu Keluarga*</div>
              <input class="form-control" type="file" id="fotoKk">
            </div>
             <div class="form-group">
               <div class="mb-2 label">Foto Nomor Pokok Wajib Pajak</div>
               <input class="form-control" type="file" id="fotoNpwp">
             </div>
              <div class="form-group">
                <div class="mb-2 label">Foto Kartu BPJS Kesehatan</div>
                <input class="form-control" type="file" id="fotoBpjsKesehatan">
              </div>
            <div class="form-group">
              <div class="mb-2 label">Foto Kartu BPJS Ketenagakerjaan</div>
              <input class="form-control" type="file" id="fotoBpjsKetenagakerjaan">
            </div>
            <div class="form-group">
              <div class="mb-2 label">Resume*</div>
              <input class="form-control" type="file" id="resume" >
            </div> -->

            <button v-on:click="submitFile(); cekSukses()" type="submit" class=" mt-5 mb-5 btn btn-danger">Simpan</button>
            <br>
            <button class=" btn btn-light border-danger w-10" v-on:click="beforeClicked()">Kembali</button>
            <button class=" mt-5 mb-5 btn btn-danger" v-on:click="afterClicked()">Selanjutnya</button>
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
            </div>
            
            
        </b-modal>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name:'fileLamaran',
  data(){
    return{
      file:'',
      ressData: '',
      count: 0
    }
  },
  computed: {
    idLamaran(){
      return this.$route.params.idLamaran;
    }
  },
  methods:{
    beforeClicked(){
      this.$router.push("/fileLamaran/"+this.idLamaran);
    },
    afterClicked(){
      this.$router.push("/fileNpwp/"+this.idLamaran);
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post('http://localhost:8081/api/uploadKk/' + this.idLamaran,
        formData).then(ress => {
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