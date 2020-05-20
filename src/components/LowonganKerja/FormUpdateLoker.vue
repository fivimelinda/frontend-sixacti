<template>
  <div class="FormCreateLoker">
      <br>
    <ul class="nav">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/listRequestLowongan">Daftar Request Lowongan Pekerjaan</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" :href="'/ubahLoker/'+idLowongan">Ubah Lowongan Pekerjaan</a></li>

    </ul>
    <br />
    <h1>Ubah Lowongan Pekerjaan</h1>
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


            <fieldset class="form-group">
                <div class="mb-2 label">Judul Lowongan Pekerjaan</div>
                <input class="form-control" v-model="judulLoker" placeholder="Masukan Judul Lowongan Pekerjaan" disabled/>
            </fieldset>

            <div class="row">
                <div class="col-sm-6 col-xs-12">
                    <fieldset class="form-group">
                        <div class="mb-2 label">Departement</div>
                        <input class="form-control" v-model="departement" placeholder="Masukan nama departement" disabled/>
                    </fieldset>
                </div>

                <div class="col-sm-6 col-xs-12">
                    <fieldset class="form-group">
                        <div class="mb-2 label">Section</div>
                        <input class="form-control" v-model="section" placeholder="Masukan nama section" disabled/>
                    </fieldset>
                </div>
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
                <b-textarea class="form-control" v-model="deskripsi"/>
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
                        Lowongan Kerja berhasil diubah
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
                        Lowongan Kerja gagal diubah
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

.label{
    text-align: left;
    font-family: 'archivo';
    color: black;
    margin-bottom: 2px;
}


</style>

<script>
import moment from 'moment'
import LowonganKerjaService from '../../service/LowonganKerjaService';
export default {
    name: "detailLoker",
    data(){
        return{
            judulLoker:"",
            departement: "",
            section: "",
            tanggalMulai: "",
            tanggalBerakhir: "",
            deskripsi: "",
            errors: []
        };
        
    },
    computed: {
        idLowongan() {
            return this.$route.params.idLowongan;
        },
        dateStartState(){
            var start = this.tanggalMulai;
            console.log(start);
            console.log(this.tanggalBerakhir);
            if(this.tanggalMulai == ""){
                return null;
            }
            else{
                var currentDate = moment(new Date()).format("DD MMMM YYYY");
                var tglMulai = moment(this.tanggalMulai).format("DD MMMM YYYY");
                console.log('Tanggal Mulai sebelum tanggal hari ini');
                console.log(moment(tglMulai).isBefore(currentDate));
                return !moment(tglMulai).isBefore(currentDate);
               
            }
          
        },
        dateEndState(){
            if(this.tanggalBerakhir == ""){
                return null;
            }
            else{
                var currentDate = moment();
                if(moment(this.tanggalBerakhir).isBefore(moment(this.tanggalMulai))){
                    console.log('Tanggal berakhir sebelum tanggal mulai');
                    return false;
                }
                else if(moment(this.tanggalBerakhir).isBefore(currentDate)){
                    console.log('Tanggal berakhir sebelum tanggal skrng');
                    return false;
                }
                else if(moment(this.tanggalBerakhir).isSame(this.tanggalMulai)){
                    console.log("hi");
                    return true;
                }
                else{
                    return true;
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
            LowonganKerjaService.getLokerById(this.idLowongan).then(res => {
                this.judulLoker = res.data.judulLoker;
                this.departement = res.data.departement;
                this.section = res.data.section;
                this.tanggalMulai = moment(res.data.tanggalMulai).format("YYYY-MM-DD");
                this.tanggalBerakhir = moment(res.data.tanggalBerakhir).format("YYYY-MM-DD");
                this.deskripsi = res.data.deskripsi;
            });
        },
        validateAndSubmit(e) {
            e.preventDefault();
            this.errors = [];

            var currentDate = moment();

            // if(moment(this.tanggalMulai).isBefore(currentDate)){
            //   console.log("Tanggal mulai yang anda masukan tidak valid")
            //   this.errors.push("Tanggal mulai yang anda masukan tidak valid");
            // }

            if(moment(this.tanggalBerakhir).isBefore(moment(this.tanggalMulai))){
              console.log("Tanggal berakhir yang anda masukan tidak valid")
              this.errors.push("Tanggal berakhir yang anda masukan tidak valid");
            }
            if(moment(this.tanggalBerakhir).isBefore(currentDate)){
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
              LowonganKerjaService.updateLoker(this.idLowongan, {
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
                window.location.href = "/listLoker";
            }, 2000);
        },

        errorModal(){
            this.$refs['error-modal'].show();
        },
        batal(){
          this.$router.push(`/detailLoker/${this.idLowongan}`);
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
    
};
</script>