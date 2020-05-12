<template>
    <v-container class="mt-sm-12">
    <div>
        <b-row id="title">
        <h1> Form Ubah Pengajuan Cuti</h1>
      </b-row>
      <ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(handleSubmit)">
    <b-row> 
        <b-col md="6" sm="12">
          <ValidationProvider name="Tanggal" rules="required">
            <span slot-scope="{ valid, errors }">
            <b-row><label class="control-label">Cuti Mulai</label></b-row>
            <b-form-datepicker class="form-control" 
             :state="errors[0] ? false : (valid ? true : null)"
            placeholder="Pilih Tanggal Mulai cuti" 
            v-model="form.tanggalMulai"
            :min="min" :max="max"
            >
            </b-form-datepicker>
            <b-form-invalid-feedback>
                Tanggal harus dipilih
            </b-form-invalid-feedback>
            </span>
            </ValidationProvider>
        </b-col>
        
        <b-col md="6" sm="12">
          <ValidationProvider name="Tanggal selesai" rules="required">
            <span slot-scope="{ valid, errors }">
            <b-row><label class="control-label">Cuti Sampai</label></b-row>
            <b-form-datepicker class="form-control" 
            :state="errors[0] ? false : (valid ? true : null)"
            placeholder="Pilih Tanggal Akhir cuti" 
            v-model="form.tanggalSampai"
            :min="min" :max="max"
            ></b-form-datepicker>
            <b-form-invalid-feedback>
                  Tanggal harus dipilih
            </b-form-invalid-feedback>
            </span>
            </ValidationProvider>
        </b-col>
    </b-row>
    <ValidationProvider name="Kategori" rules="required">
    <b-row class="form-group" slot-scope="{ valid, errors }">
        <b-col md="6" sm="12" > 
            <b-row><label class="control-label">Kategori Cuti</label></b-row>   
            <b-form-select v-model="form.idKategori"
            :options="listKategori"
            text-field="namaKategori"
            value-field="id"
            :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-select>
            <b-form-invalid-feedback>
              Kategori harus dipilih
            </b-form-invalid-feedback>
        </b-col>
    </b-row>
    </ValidationProvider>
    <ValidationProvider name="Keterangan" rules="required">
    <b-row class="form-group" slot-scope="{ valid, errors }">
      <b-col md="12">
      <b-row><label class="control-label">Keterangan Cuti</label></b-row>
      <b-form-textarea
        id="textarea"
        v-model="form.keterangan"
        placeholder="Tulis Keterangan Cuti..."
        rows="2"
        max-rows="6"
        :state="errors[0] ? false : (valid ? true : null)">
      </b-form-textarea>
      <b-form-invalid-feedback>
          Keterangan cuti harus diisi
      </b-form-invalid-feedback>
      </b-col>
    </b-row>
    </ValidationProvider>
    <b-col sm="4" offset-sm="4">
      <b-button block type="submit" variant="danger" id="btnCuti">Simpan Perubahan</b-button> 
    </b-col>   
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Tanggal akhir cuti tidak valid!
    </b-alert>
    </b-form>
    </ValidationObserver>
    </div> 
    </v-container>
    
</template>

<script>
import moment from 'moment'
import CutiService from '../../service/CutiService'
import { ValidationObserver, ValidationProvider } from 'vee-validate';
  export default {
    components:{
      ValidationObserver,
      ValidationProvider
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
        max: maxDate,
        showDismissibleAlert: false
      }
    },
    methods: {
      handleSubmit() {
        console.log('bbbbbbb')
        const start = moment(this.form.tanggalMulai).format("YYYY-MM-DD")
        console.log(start)
        const end = moment(this.form.tanggalSampai).format("YYYY-MM-DD")
        console.log('fffffff')
        console.log(end)
        if (moment(start).isAfter(end)){
          this.showDismissibleAlert = true
        } else { 
          console.log('dnsfkskfnkev')
          CutiService.updateCuti(this.idCuti, this.form).then(response => {
          console.log('aaaaaaaaaaaaaaaaaaaa')
          console.log(response.status)
          if (response.status == 200){
            this.$router.push({
              name:'viewCuti'
            })
          }
          })
        }
        
      },
      getListKategori(){
        CutiService.getListKategori().then(response => {
          this.listKategori = response.data
        })
      },
      getCutiData(){
          CutiService.getCutiActive(1).then(response => {
              this.form.tanggalMulai = response.data.tanggalMulai;
              this.form.tanggalSampai = response.data.tanggalSampai;
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