<template>
  
  <div class="FormCreateLoker">
    <br>
    <ul class="nav">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/listRequestLowongan">Daftar Request Lowongan Pekerjaan</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" :href="'/buatLoker/'+idReq">Buat Lowongan Pekerjaan</a></li>

    </ul>
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

          <div class="row">
            <div class="col-sm-6 col-xs-12">
              <div class="form-group">
                <div class="mb-2 label">Departement</div>
                <input class="form-control" v-model="departement" id="departement" placeholder="Masukan nama departement" />
              </div>
            </div>

            <div class="col-sm-6 col-xs-12">
              <div class="form-group">
                <div class="mb-2 label">Section</div>
                <input class="form-control" v-model="section" id="section" placeholder="Masukan nama section" />
              </div>
            </div>
          </div>

          <div class="form-group">
            <hr class="border border-danger">
            <p id="dateWanted">Tanggal Dibutuhkan Lowongan : {{dateWanted}}</p>
          </div>

          <div class="row">
            <div class="col-sm-6 col-xs-12">
              <div class="form-group">
                <div class="mb-2 label">Tanggal Mulai</div>
                <b-form-datepicker id="datepickerStart-invalid" :state="dateStartState" class="mb-2" v-model="tanggalMulai"></b-form-datepicker>
                
                <b-form-invalid-feedback id="input-live-feedback-start">
                  Tanggal yang anda masukan tidak valid
                </b-form-invalid-feedback>
              </div>
            </div>

            <div class="col-sm-6 col-xs-12">
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

          <div class="btn-group">
            <button type="submit" class="btn btn-danger mr-2">Simpan</button>
            <button class="btn btn-light" @click="batal">Batal</button>
          </div>
    

        </form>

      </div>

    </div>

    <b-modal size="lg" ref="modalOk" hide-footer title="Notifikasi">
            <div class="container">
                <div class="row">
                    <div class="col-sm" id="berhasil">
                        Lowongan Kerja berhasil dibuat
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
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
                        Lowongan Kerja gagal dibuat
                    </div>
                    <div class="col-sm">
                        <!-- <v-img
                                :src="require('../assets/success.png')"></v-img> -->
                        <!-- <img src = "'src/assets/success.png'"> -->
                        <v-img class="gagal"
            :src="require('@/assets/fail.png')"
            ></v-img>
                    </div>
                </div>
            </div>
            
        </b-modal>

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
      idReq : "",
      jobTitle : "",
      departement :"",
      section : "",
      tanggalMulai : "",
      tanggalBerakhir : "",
      deskripsi : "",
      dateWanted : "",
      tanggalDibutuhkan: "",
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
            var currentDate = moment();
            if(moment(this.tanggalMulai).isAfter(moment(this.tanggalDibutuhkan))){
              return false;
            }
            return !moment(this.tanggalMulai).isBefore(currentDate);
          }
          
        },
        dateEndState(){
          if(this.tanggalBerakhir == ""){
            return null;
          }
          else{
            var currentDate = moment();
            if(moment(this.tanggalBerakhir).isAfter(moment(this.tanggalDibutuhkan))){
              return false;
            }else{
              if(moment(this.tanggalBerakhir).isBefore(moment(this.tanggalMulai))){
                return false;
              }
              else if(moment(this.tanggalBerakhir).isBefore(currentDate)){
                return false;
              }
              else{
                return true;
              }
            }
            
          }
          
        },
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
        
  },
  methods: {
        refreshLokerDetails() {
            RequestLowonganService.getReqLokerById(this.id).then(res => {
                this.idReq = res.data.id;
                this.jobTitle = res.data.jobTitle;
                this.departement = res.data.departement;
                this.section = res.data.section;
                this.dateWanted = moment(res.data.dateWanted).format("DD MMMM YYYY");
                this.tanggalDibutuhkan = moment(res.data.dateWanted);
                
            });
            
        },
        validateAndSubmit(e) {
            e.preventDefault();
            this.errors = [];
            var currentDate = moment();

            if(moment(this.tanggalMulai).isBefore(currentDate)){
              console.log("Tanggal mulai yang anda masukan tidak valid")
              this.errors.push("Tanggal mulai yang anda masukan tidak valid");
            }

            if(moment(this.tanggalMulai).isAfter(moment(this.tanggalDibutuhkan))){
              console.log("Tanggal mulai yang anda masukan tidak valid")
              this.errors.push("Tanggal mulai yang anda masukan tidak valid");
            }

            if(moment(this.tanggalBerakhir).isBefore(moment(this.tanggalMulai))){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }

            if(moment(this.tanggalBerakhir).isBefore(currentDate)){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }

            if(moment(this.tanggalBerakhir).isAfter(moment(this.tanggalDibutuhkan))){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }
            if(!this.deskripsi){
                this.errors.push("Data yang anda masukan tidak valid");
            }
            else if(this.deskripsi.length < 25){
                this.errors.push("Masukan deskripsinya minimal 25 karakter");
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
              .then(ress => {
                    this.retStatus = ress.data

                    if(ress.status == 200){
                        this.openModal()
                    }
                    else{
                        this.errorModal()
                    }
              });
              
            }

        },

        openModal() {
            this.$refs['modalOk'].show();
            window.setTimeout(function() {
                window.location.href = "/daftar-lowongan";
            }, 2000);
        },

        errorModal(){
            this.$refs['error-modal'].show();
        },

        batal(){
          this.$router.push("/listRequestLowongan");
        }
        
  },
  created(){
        if (this.loggedIn) {
            if (this.currentUser.role[0] === "ROLE_ADMIN"){
                this.refreshLokerDetails();
                console.log('A')
            } else{
                this.$router.push('/403')
            }
        } else{
            this.$router.push('/auth/login');
        }
        
  }
  
}
</script>