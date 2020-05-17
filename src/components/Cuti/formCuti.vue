<template>
    <v-container mt-sm-12>
    <div>
      <b-row id="myTitle">
        <h3> Form Pengajuan Cuti</h3>
      </b-row>
    <ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(handleSubmit)">

    <b-row > 
        <b-col md="6" sm="12" >
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
    <b-col md="4" offset-sm="4">
      <b-button block type="submit" variant="danger" id="btnCuti">Ajukan Cuti</b-button> 
    </b-col>   
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errorStatus}}
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
          idKaryawan: '',
          tanggalMulai: '',
          tanggalSampai: '',
          keterangan: '',
          idKategori: null
        },
        user: '',
        listKategori: [],
        min: minDate,
        max: maxDate,
        showDismissibleAlert: false,
        sisaCuti: 0,
        errorStatus: 'Tanggal Akhir Cuti tidak valid'
      }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        },
        karyawanId() {
            return this.$route.params.karyawanId;
        }
    },
    methods: {
      handleSubmit() {
        var start = moment(this.form.tanggalMulai).format("YYYY-MM-DD")
        var end = moment(this.form.tanggalSampai).format("YYYY-MM-DD")
        var value = moment(end).diff(moment(start), 'days') + 1;
        if (moment(start).isAfter(end)){
          this.showDismissibleAlert = true
          this.errorStatus = 'Tanggal Akhir Cuti tidak valid'
        } else if (value > this.sisaCuti){
          this.showDismissibleAlert = true
          this.errorStatus = 'Jumlah hari cuti melebihi sisa cuti. Sisa cuti Anda ' + this.sisaCuti + ' hari'
        
        } else { 
          this.idKaryawan = this.karyawanId
          CutiService.createCuti(this.form).then(response => {
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
          this.listKategori.push({ namaKategori: 'Pilih Kategori Cuti', id:null})
        })
      },
      getSisaCuti(){
        CutiService.getSisaCuti(this.karyawanId).then(res =>{
          this.sisaCuti = res.data
          console.log(res.data)
          console.log(this.sisaCuti)
        })
      }
    },
    created() {
      if (this.loggedIn) {
        this.getListKategori()
        this.getSisaCuti()
      }
    }
  }
</script>

<style scoped>
body{
  font-family: 'archivo' ;
}
#myTitle{
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