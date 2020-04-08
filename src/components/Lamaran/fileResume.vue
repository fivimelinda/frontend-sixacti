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
              <div class="mb-2 label">File Resume*</div>
              <input class="form-control" type="file" ref="file" v-on:change="handleFileUpload()" id="file">
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

            <button v-on:click="submitFile()" type="submit" class=" mt-5 mb-5 btn btn-danger">Simpan</button>
            <button class=" mt-5 mb-5 btn btn-primary" v-on:click="afterClicked()">Tutup</button>
        </form>

      </div>

    </div>

    <br>
    <br>

  </div>
</template>


<script>
import axios from 'axios';
export default {
  name:'fileLamaran',
  data(){
    return{
      file:''
    }
  },
  methods:{
    afterClicked(){
      this.$router.push("/listLoker");
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post('http://localhost:8081/api/uploadFile',
        formData).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
      
    
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