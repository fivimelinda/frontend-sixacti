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
                <fieldset class="form-group">
                    <div class="mb-2 label">Tanggal Mulai</div>
                    <input type="date" class="form-control" v-model="tanggalMulai" />
                </fieldset>
                </div>

                <div class="col-6">
                <fieldset class="form-group">
                    <div class="mb-2 label">Tanggal Berakhir</div>
                    <input type="date" class="form-control" v-model="tanggalBerakhir" />
                </fieldset>
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
        }
    },
    methods: {
        refreshLokerDetails() {
            LowonganKerjaService.getLokerById(this.idLowongan).then(res => {
                this.judulLoker = res.data.judulLoker;
                this.departement = res.data.departement;
                this.section = res.data.section;
                this.tanggalMulai = res.data.tanggalMulai;
                this.tanggalBerakhir = res.data.tanggalBerakhir;
                this.deskripsi = res.data.deskripsi;
            });
        },
        validateAndSubmit(e) {
            e.preventDefault();
            this.errors = [];
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