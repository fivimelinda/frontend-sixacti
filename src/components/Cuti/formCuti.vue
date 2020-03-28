<template>
    <div>
    <b-container class="mt-sm-10">
    <b-row id="title">
        <h1> Pengajuan Cuti</h1>
        </b-row>
    <b-form @submit.prevent="openModal">
    <b-row> 
        <b-col sm="5" class="form-group">
            <b-row><label class="control-label">Tanggal Mulai</label></b-row>
            <b-form-input type="date" class="form-control" v-model="form.tanggalMulai" id="tanggalMulai" required></b-form-input>
        </b-col>
        
        <b-col sm="5" offset-sm="1" class="form-group">
            <b-row><label class="control-label">Tanggal Selesai</label></b-row>
            <b-form-input type="date" class="form-control" v-model="form.tanggalSelesai" id="tanggalSelesai" required></b-form-input>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="5" class="form-group"> 
            <b-row><label class="control-label">Kategori Cuti</label></b-row>   
            <b-form-select v-model="form.kategori" id="kategori" :options="listKategori" required></b-form-select>
        </b-col>
    </b-row>
        <b-col sm="4" offset-sm="4">
            <b-button block type="submit" variant="danger" id="btnCuti">Ajukan Cuti</b-button> 
        </b-col>   
    </b-form>
     <div>
      <ModalSuccess v-model="modalOpen" ref="modal"></ModalSuccess>
    </div>
    <!--<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>   -->
    </b-container>
    </div> 
</template>

<script>
import axios from 'axios'
import ModalSuccess from "../Modal/ModalSuccess"
  export default {
    components:{
      ModalSuccess
    },
    data() {
      return {
        form: {
          tanggalMulai: '',
          tanggalSelesai: '',
          kategori: null
        },
        listKategori: [{ text: 'Pilih Kategori', value: null }, 'Cuti tahunan', 'Cuti khusus', 'Cuti hamil sebelum melahirkan', 'Cuti menstruasi', 'Cuti suka cita','Cuti duka cita', 'Cuti setelah melahirkan'],
        user: '',
        modalOpen: false
      }
    },
    methods: {
      onSubmit() {
        axios.post('http://localhost:8000/api/cuti/ajukan', this.form);
        this.$router.push({
          name:'viewCuti'
        })
        
      },
      openModal() {
            this.modalOpen = !this.modalOpen;
            this.$refs.modal.open();
      }
    }
  }
</script>

<style scoped>
body{
  font-family: 'archivo' ;
}
#title{
    font-family: 'oswald';
    color: black;
    text-align: left;
    margin-bottom: 30px;
    margin-left: 5px;
}
.control-label{
    text-align: left;
    margin-left: 20px;
    font-weight: 200;
    color: black;
    font-family: 'oswald';
    font-size: 14pt;
}
#btnCuti{
  background-color: #C53751;
  font-family: 'archivo';
  font-size: 14pt;
  font-weight: 400;
  border-color: #C53751;
  margin-top: 50px;
}
input{
  border-radius: 0%;
}
select{
  border-radius: 0%;
}
</style>