<template>
  <div class="container pt-0">
    <br>
    <ul class="nav p-0 m-0">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/daftar-lowongan">Daftar Lowongan Pekerjaan</a></li>            
    </ul>
    <h3 class="mt-5">Daftar Lowongan Pekerjaan</h3>
    <hr/>
    <div v-if="message && valMSG" class="alert alert-success">
      {{message}}
    </div>
    <div v-if="message && !valMSG" class="alert alert-danger">
      {{message}}
    </div>
    <div class="container">
      
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="loker in loker" v-bind:key="loker.idLowongan">
          <div v-if="!loker.isDeleted" class="card mb-4" id="cardLoker">
            <div class="card-header" id="cardHeader">
              <span id="titleCard">{{loker.judulLoker}}</span>
            </div>
            <div class="card-body">
              <span v-if="loker.deskripsi.length < 25 " class="mb-1" id="lokerDesc">{{loker.deskripsi}}</span>
              <span v-else  class="mb-1" id="lokerDesc">{{loker.deskripsi.substring(0,25) + " ..."}}</span>
              <p class="mt-1 mb-5" id="deptSect">{{loker.departement}} - {{loker.section}}</p>
              <p id="periodeDesc">Periode {{loker.tanggalMulai | formatDate}} - {{loker.tanggalBerakhir | formatDate}}</p>

            </div>
            <div class="card-footer" id="card-footer">
              <div class="row">
                <div class="col-6 mb-3">
                  <button class="btn btn-danger w-100" v-on:click="detailLokerClicked(loker.idLowongan)">Detail</button>
                </div>
                <div class="col-6 mb-3">
                  <button v-if="currentUser.role == 'ROLE_ADMIN'" v-b-modal.modal-1 class="btn btn-light border-danger w-100" id="hapusBtn"  v-on:click="saveId(loker.idLowongan, loker.judulLoker, (loker.listLamaran).length)">Hapus</button>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>

        <b-modal ref="modal" id="modal-1" title="Konfirmasi Penghapusan Lowongan" v-bind:hide-footer="true">
            <div class="detail">
                <p class="title">Apakah anda yakin untuk menghapusnya ? </p>
                <hr>
                <div class="btn-group">
                  <button type="submit" class="btn btn-danger mr-2" @click="deleteLokerClicked(idLoker, judulLoker)">Hapus</button>
                  <button class="btn btn-light" @click="hideModal">Batal</button>
                </div>
            </div>
        </b-modal>
        
        
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import LowonganKerjaService from '../../service/LowonganKerjaService';
Vue.config.productionTip = false
Vue.filter('formatDate', function(value){
  if(value){
    return moment(String(value)).format('MMMM YYYY')
  }
});
export default {
    name : "LokerList",
    data() {
        return{
            loker : [],
            message : "",
            idLoker : 0,
            msg :"",
            valMSG :false,
            judulLoker : "",
            listLmaran : 0
        };
    },
    computed: {
      currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
        refreshLoker(){
            LowonganKerjaService.retrieveAllLoker()
            .then(response => {
                this.loker = response.data;
            });
            console.log(this.loker);
        },
        deleteLokerClicked(idLowongan, judulLoker){
          var tmp = judulLoker;
          LowonganKerjaService.deleteLoker(idLowongan).then(() =>{
            this.$refs['modal'].hide();
            if(this.listLmaran != 0){
              this.message = "Lowongan Kerja " + tmp + " Gagal Dihapus";
            }
            else{
              this.message = "Lowongan Kerja " + tmp + " Berhasil Dihapus";
              this.valMSG = true;
            }
            
            this.refreshLoker();
          });
        },
        addLokerClicked(){
          this.$router.push("/buatLoker");
        },
        detailLokerClicked(idLowongan){
          this.$router.push("/detailLoker/"+idLowongan);
        },
        saveId(idLowongan, judulLoker, jumlahLamaran){
          this.idLoker = idLowongan;
          this.judulLoker = judulLoker;
          this.listLmaran = jumlahLamaran;
        },
        hideModal(){
          this.$refs['modal'].hide();
        }
    },
    created(){
        this.refreshLoker();
    }
};
</script>

<style>
#cardLoker{
  /* height: 300px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left;
  min-height: 312px;
}
#cardHeader{
  border-style: none;
  background-color: white;
}
#card-footer{
  border-top-style: none ;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-bottom-color: #C53751;
  background-color: white;
}
#titleCard{
  color: #C53751;
  font-weight: bold;
  font-size: 32px;
}
#lokerDesc{
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 15px;
  color: #736B6B;
}
#periodeDesc{
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #7D0022;
}
#deptSect{
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height */
  color: #9B9B9B;
}
#hapusBtn{
  color: #C53751;
}
</style>