<template>
  <div class="container">
    <h3>All Courses</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container-fluid">
      <div class="row mt-5 mb-3 ml-1">
        <button class="btn btn-success w-25" v-on:click="addLokerClicked()">Add</button>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="loker in loker" v-bind:key="loker.idLowongan">
          <div class="card mb-4" id="cardLoker">
            <div class="card-header" id="cardHeader">
              <span id="titleCard">{{loker.judulLoker}}</span>
            </div>
            <div class="card-body">
              <span class="mb-1" id="lokerDesc">{{loker.deskripsi}}</span>
              <p class="mt-1 mb-5" id="deptSect">{{loker.departement}} - {{loker.section}}</p>
              <p id="periodeDesc">Periode {{loker.tanggalMulai | formatDate}} - {{loker.tanggalBerakhir | formatDate}}</p>

            </div>
            <div class="card-footer" id="card-footer">
              <div class="row">
                <div class="col-6 mb-3">
                  <button class="btn btn-danger w-100" v-on:click="detailLokerClicked(loker.idLowongan)">Detail</button>
                </div>
                <div class="col-6 mb-3">
                  <button class="btn btn-light border-danger w-100" id="hapusBtn"  v-on:click="deleteLokerClicked(loker.idLowongan)">Hapus</button>
                </div>
              </div>
              <!-- <div style="height:5px;background-color:#C53751; "></div> -->
              
            </div>
          </div>
        </div>
        
        
      </div>
      




      <!-- <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="loker in loker" v-bind:key="loker.idLowongan">
            <td>{{loker.idLowongan}}</td>
            <td>{{loker.deskripsi}}</td>
            <td>
              <button class="btn btn-light" v-on:click="detailLokerClicked(loker.idLowongan)">
                Detail
              </button>
            </td>
            <td>
              <button class="btn btn-warning" v-on:click="deleteLokerClicked(loker.idLowongan)">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->
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
            message : ""
        };
    },

    methods:{
        refreshLoker(){
            LowonganKerjaService.retrieveAllLoker()
            .then(response => {
                this.loker = response.data;
            });
        },
        deleteLokerClicked(idLowongan){
          LowonganKerjaService.deleteLoker(idLowongan).then(() =>{
            this.message = "Delete of Loker " + idLowongan + " successful";
            this.refreshLoker();
          });
        },
        addLokerClicked(){
          this.$router.push("/buatLoker");
        },
        detailLokerClicked(idLowongan){
          this.$router.push("/detailLoker/"+idLowongan);
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