<template>
  <div class="FormCreateLoker">
    <br />
    <h1>Buat Lowongan Pekerjaan</h1>
    <br />
    <div class="card">
      <div class="card-header">Formulir Pembuatan Lowongan Pekerjaan</div>
      <div class="card-body">
        <form @submit.prevent="validateAndSubmit">
          <div v-if="errors.length">
                <div 
                class="alert alert-warning" 
                v-bind:key="index" 
                v-for="(error,index) in errors">{{error}}</div>
          </div>


          
          <div class="form-group">
            <div class="mb-2 label">Judul Lowongan Pekerjaan</div>
            <input class="form-control" v-model="jobTitle" id="judul" placeholder="Masukan Judul Lowongan Pekerjaan" />
          </div>

          <div class="form-group">
            <div class="mb-2 label">Departement</div>
            <input class="form-control" v-model="departement" id="departement" placeholder="Masukan nama departement" />
          </div>

          <div class="form-group">
            <div class="mb-2 label">Section</div>
            <input class="form-control" v-model="section" id="section" placeholder="Masukan nama section" />
          </div>

          <div class="form-group">
            <hr class="border border-danger">
            <p id="dateWanted">Tanggal Dibutuhkan Lowongan : {{dateWanted}}</p>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <div class="mb-2 label">Tanggal Mulai</div>
                <b-form-datepicker id="datepickerStart-invalid" :state="dateStartState" class="mb-2" v-model="tanggalMulai"></b-form-datepicker>
                
                <b-form-invalid-feedback id="input-live-feedback-start">
                  Tanggal yang anda masukan tidak valid
                </b-form-invalid-feedback>
              </div>
            </div>

            <div class="col-6">
              <div class="form-group">
                <div class="mb-2 label">Tanggal Berakhir</div>
                <b-form-datepicker id="datepickerEnd-invalid" :state="dateEndState" class="mb-2" v-model="tanggalBerakhir"></b-form-datepicker>
                
                <b-form-invalid-feedback id="input-live-feedback-end">
                  Tanggal yang anda masukan tidak valid
                </b-form-invalid-feedback>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="mb-2 label">Deskripsi</div>
            <b-textarea class="form-control" id="deskripsi" v-model="deskripsi"/>
          </div>

          <button type="submit" class=" mt-5 mb-5 btn btn-danger">simpan</button>

        </form>

      </div>

    </div>

    <br>
    <br>

  </div>
</template>

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

.label, #dateWanted{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}

#dateWanted{
  color: #C53751;
  font-weight: bold;
}


</style>

<script>
import Vue from 'vue'
import moment from 'moment'
import RequestLowonganService from '../../service/RequestLowonganService'
import LowonganKerjaService from '../../service/LowonganKerjaService'

Vue.config.productionTip = false
Vue.filter('formatDate', function(value){
  if(value){
    return moment(String(value)).format('DD MMMM YYYY')
  }
});
export default {
  name : "reqLoker",
  data(){
    return{
      jobTitle : "",
      departement :"",
      section : "",
      tanggalMulai : "",
      tanggalBerakhir : "",
      deskripsi : "",
      errors: [],
    }
  },
  computed: {
        id() {
            return this.$route.params.id;
        },
        dateStartState(){
          if(this.tanggalMulai == ""){
            return null;
          }
          else{
            var currentDate = moment(new Date()).format("DD MMMM YYYY");
            var tglMulai = moment(this.tanggalMulai).format("DD MMMM YYYY");
            return !moment(tglMulai).isBefore(currentDate);
          }
          
        },
        dateEndState(){
          if(this.tanggalBerakhir == ""){
            return null;
          }
          else{
            var currentDate = moment(new Date()).format("DD MMMM YYYY");
            var tglMulai = moment(this.tanggalMulai).format("DD MMMM YYYY");
            var tglBerakhir = moment(this.tanggalBerakhir).format("DD MMMM YYYY");
            if(moment(tglBerakhir).isAfter(this.dateWanted)){
              return false;
            }else{
              if(moment(tglBerakhir).isBefore(tglMulai)){
                return false;
              }
              else if(moment(tglBerakhir).isBefore(currentDate)){
                return false;
              }
              else{
                return true;
              }
            }
            
          }
          
        }
        
  },
  methods: {
        refreshLokerDetails() {
            RequestLowonganService.getReqLokerById(this.id).then(res => {
                this.jobTitle = res.data.jobTitle;
                this.departement = res.data.departement;
                this.section = res.data.section;
                this.dateWanted = moment(res.data.dateWanted).format("DD MMMM YYYY");
                
            });
            
        },
        validateAndSubmit(e) {
            e.preventDefault();
            this.errors = [];
            var currentDate = moment(new Date()).format("DD MMMM YYYY");
            var tglMulai = moment(this.tanggalMulai).format("DD MMMM YYYY");
            var tglBerakhir = moment(this.tanggalBerakhir).format("DD MMMM YYYY");

            if(moment(tglMulai).isBefore(currentDate)){
              console.log("Tanggal mulai yang anda masukan tidak valid")
              this.errors.push("Tanggal mulai yang anda masukan tidak valid");
            }

            if(moment(tglBerakhir).isBefore(tglMulai)){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }

            if(moment(tglBerakhir).isBefore(currentDate)){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }

            if(moment(tglBerakhir).isAfter(this.dateWanted)){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }
            if(!this.deskripsi){
                this.errors.push("Enter valid values");
            }
            else if(this.deskripsi.length < 5){
                this.errors.push("Enter at least 5 chars");
            }
            if(this.errors.length === 0) {
              LowonganKerjaService.addLoker(this.id,{
                judulLoker : this.jobTitle,
                departement : this.departement,
                section : this.section,
                tanggalMulai : this.tanggalMulai,
                tanggalBerakhir : this.tanggalBerakhir,
                deskripsi : this.deskripsi
              })
              .then(() => {
                    this.$router.push('/listLoker');
                });
              
              var a = this.deskripsi;
              console.log(a)
            }

        }
        
  },
  created(){
        this.refreshLokerDetails();
  }
  
}
</script>