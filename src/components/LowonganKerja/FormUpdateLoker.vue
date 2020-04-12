<template>
  <div class="FormCreateLoker">
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

            <fieldset class="form-group">
                <div class="mb-2 label">Departement</div>
                <input class="form-control" v-model="departement" placeholder="Masukan nama departement" disabled/>
            </fieldset>

            <fieldset class="form-group">
                <div class="mb-2 label">Section</div>
                <input class="form-control" v-model="section" placeholder="Masukan nama section" disabled/>
            </fieldset>

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
                <b-textarea class="form-control" v-model="deskripsi"/>
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
                if(moment(tglBerakhir).isBefore(tglMulai)){
                    return false;
                }
                else if(moment(tglBerakhir).isBefore(currentDate)){
                    return false;
                }
                else if(moment(tglBerakhir).isSame(tglMulai)){
                    console.log("hi");
                    return true;
                }
                else{
                    return true;
                }
            }
            
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
              .then(() => {
                    this.$router.push('/listLoker');
                });
            }

        }
    },
    created(){
        this.refreshLokerDetails();
    }
    
};
</script>