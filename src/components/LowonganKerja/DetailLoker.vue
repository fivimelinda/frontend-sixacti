<template>
    <!-- <div>
        <h1>Detail</h1>
        <div class="container">
            <button class="btn btn-success" v-on:click="updateLokerClicked(idLowongan)">
                Ubah
            </button>
            <div>{{idLowongan}}</div>
            <div>{{deskripsi}}</div>           
        </div>
    </div> -->
    <div class="FormCreateLoker">
    <br />
    <h1>Buat Lowongan Pekerjaan</h1>
    <br />
    <div class="card">
      <div class="card-header">Formulir Pembuatan Lowongan Pekerjaan</div>
      <div class="card-body">
        <form @submit="validateAndSubmit()">
            <div v-if="errors.length">
                <div class="alert alert-warning" v-bind:key="index" v-for="(error,index) in errors"></div>
            </div>

            <div class="form-group">
                <div class="mb-2 label">Judul Lowongan Pekerjaan</div>
                <input class="form-control" v-model="deskripsi" placeholder="Masukan Judul Lowongan Pekerjaan" />
            </div>

            <div class="form-group">
                <div class="mb-2 label">Departement</div>
                <input class="form-control" id="departement" placeholder="Masukan nama departement" />
            </div>

            <div class="form-group">
                <div class="mb-2 label">Section</div>
                <input class="form-control" id="section" placeholder="Masukan nama section" />
            </div>

            <div class="row">
                <div class="col-6">
                <div class="form-group">
                    <div class="mb-2 label">Tanggal Mulai</div>
                    <input type="date" class="form-control" id="tanggal" />
                </div>
                </div>

                <div class="col-6">
                <div class="form-group">
                    <div class="mb-2 label">Tanggal Mulai</div>
                    <input type="date" class="form-control" id="tanggal" />
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="mb-2 label">Deskripsi</div>
                <b-textarea class="form-control" id="deskripsi"/>
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
                this.deskripsi = res.data.deskripsi;
            });
        },
        updateLokerClicked(idLowongan){
          var link = "ubahLoker/" + idLowongan;
          this.$router.push(link);
        },
        validateAndSubmit() {
            console.log({
                idLowongan: this.idLowongan,
                description: this.deskripsi
            });
            // LowonganKerjaService.updateLoker(this.idLowongan, {
            //     idLowongan: this.idLowongan,
            //     description: this.deskripsi
            // })
            // e.preventDefault();
            // this.errors = [];
            // if(!this.deskripsi){
            //     this.errors.push("Enter valid values");
            // }
            // else if(this.deskripsi.length < 5){
            //     this.errors.push("Enter at least 5 chars");
            // }

        }
    },
    created(){
        this.refreshLokerDetails();
    }
    
};
</script>