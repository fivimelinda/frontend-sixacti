<template>
  <div class="FormCreateLoker">
    <br />
    <h1>Buat Lamaran Pekerjaan</h1>
    <br />
    <div class="card">
      <div class="card-header">Formulir Pembuatan Lamaran Pekerjaan</div>
      <div class="card-body">
        <form>

            <div class="form-group">
              <div class="mb-2 label">Foto Kartu Tanda Penduduk*</div>
              <input class="form-control" type="file" @change="onFileSelected" id="fotoKtp" required>
            </div>
            <div class="form-group">
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
            </div>


          <button class=" mt-5 mb-5 btn btn-primary" v-on:click="beforeLamaranClicked()">Before</button>
            <button @click="onUpload" type="submit" class=" mt-5 mb-5 btn btn-danger">Simpan</button>
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
      selectedFile: null
    }
  },
  methods:{
    beforeLamaranClicked(){
      this.$router.push("/LamaranKerja");
    },
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload(){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:8081/api/uploadFile', fd).then( res => {
        console.log(res)
      })
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