<template>
    <div>
    <b-container class="mt-sm-10">
    <b-form @submit.prevent="onSubmit">
    <b-row> 
        <b-col sm="5" class="form-group">
            <b-row><label class="control-label">Cuti Mulai</label></b-row>
            <b-form-datepicker class="form-control" 
            placeholder="Pilih Tanggal Mulai cuti" 
            v-model="form.tanggalMulai" required
            :min="min" :max="max"
            >
            </b-form-datepicker>
        </b-col>
        
        <b-col sm="5" offset-sm="1" class="form-group">
            <b-row><label class="control-label">Cuti Sampai</label></b-row>
            <b-form-datepicker class="form-control" 
            placeholder="Pilih Tanggal Akhir cuti" 
            v-model="form.tanggalSampai" required
            :min="min" :max="max"
            ></b-form-datepicker>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="5" class="form-group"> 
            <b-row><label class="control-label">Kategori Cuti</label></b-row>   
            <b-form-select v-model="form.idKategori"
            :options="listKategori"
            text-field="namaKategori"
            value-field="id"></b-form-select>
        </b-col>
    </b-row>
    <b-row class="form-group">
      <b-col sm="5" lg="11">
      <b-row><label class="control-label">Keterangan Cuti</label></b-row>
      <b-form-textarea
        id="textarea"
        v-model="form.keterangan"
        placeholder="Tulis Keterangan Cuti..."
        rows="2"
        max-rows="6"
        required>
      </b-form-textarea>
      </b-col>
    </b-row>
    <b-col sm="4" offset-sm="4">
      <b-button block type="submit" variant="danger" id="btnCuti">Simpan Perubahan</b-button> 
    </b-col>   
    </b-form>
    </b-container>
    </div> 
</template>

<script>
import axios from 'axios'
  export default {
    components:{
    },
    data() {
      const now = new Date()
      const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()+3)
      const maxDate = new Date(minDate)
      maxDate.setDate(maxDate.getDate() + 30)

      return {
        form: {
          idKaryawan: 1,
          tanggalMulai: '',
          tanggalSampai: '',
          keterangan: '',
          idKategori: null
        },
        user: '',
        idCuti:'',
        listKategori: [],
        min: minDate,
        max: maxDate
      }
    },
    methods: {
      onSubmit() {
        axios.put('http://localhost:5000/api/cuti/update?idCuti=' + this.idCuti , this.form);
        this.$router.push({
          name:'viewCuti'
        })
      },
      getListKategori(){
        axios.get('http://localhost:5000/api/kategoriCuti/get').then(response => {
          this.listKategori = response.data
        })
      },
      getCutiData(){
          axios.get('http://localhost:5000/api/cuti/diajukan/get?karyawanId=1').then(response => {
              this.form.tanggalMulai = response.data.tanggalMulai;
              this.form.tanggalSampai = response.data.tanggalSampai;
              console.log(this.form.tanggalSampai)
              this.form.idKategori = response.data.idKategori;
              this.form.keterangan = response.data.keterangan;
              this.idCuti = response.data.idCuti;
          })
      }              
    },
    created() {
        this.getListKategori()
        this.getCutiData()
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
textarea{
  border-radius: 0%;
  border-color: darkgrey;
}
.form-control{
  border-radius: 0%;
  border-color: darkgrey;
}
select{
  border-radius: 0%;
  border-color: darkgrey;
}
</style>