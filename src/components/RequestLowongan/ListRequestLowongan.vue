<template>
  <div class="container">
    <br>
    <ul class="nav p-0 m-0">
        <li><a class="brearcrumb-a" href="/">Home</a></li>
        <li><p class="breadcrumb-a">></p></li>
        <li><a class="brearcrumb-a" href="/ListRequestLowongan">Daftar Request Lowongan</a></li>            
    </ul>
    <h3 class="mt-5">Daftar Request Lowongan Pekerjaan</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="reqLoker in reqLoker" v-bind:key="reqLoker.id">
          <div class="card mb-4" id="cardLoker">
            <div class="card-header" id="cardHeader">
              <span id="titleCard">{{reqLoker.jobTitle}}</span>
            </div>
            <div class="card-body">
              <!-- <span class="mb-1" id="lokerDesc">{{loker.deskripsi}}</span> -->
              <p class="mt-1 mb-5" id="deptSect">{{reqLoker.departement}} - {{reqLoker.section}}</p>
              <p id="periodeDesc">Dibutuhkan Lowongan : {{reqLoker.dateWanted | formatDateReq}}</p>

            </div>
            <div class="card-footer" id="card-footer">
              <div v-if="reqLoker.status != 'Diterima' && currentUser.role == 'ROLE_ADMIN'" class="row" > 
                <div class="col-6 mb-3">
                  <button class="btn btn-danger w-100" v-on:click="buatLokerClicked(reqLoker.id)"><plus-circle-icon class="mr-3"></plus-circle-icon>Buat</button>
                </div>
                <div class="col-6 mb-3">
                  <button class="btn btn-light border-danger w-100" id="hapusBtn"  v-on:click="deleteLokerClicked(loker.idLowongan)">Tolak Request</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <!--  -->
        
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { PlusCircleIcon } from 'vue-feather-icons'
import RequestLowonganService from '../../service/RequestLowonganService';

Vue.config.productionTip = false
Vue.filter('formatDateReq', function(value){
  if(value){
    return moment(String(value)).format("DD MMMM YYYY")
  }
});
export default {
    components: {
      PlusCircleIcon
    },
    name : "LokerList",
    data() {
        return{
            reqLoker : [],
            message : ""
        };
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods:{
        refreshLoker(){
            RequestLowonganService.getAllRequest()
            .then(response => {
                this.reqLoker = response.data;
            });
        },
        buatLokerClicked(idReqLowongan){
          this.$router.push("/buatLoker/"+idReqLowongan);
        }
  
    },
    created(){
      if (this.loggedIn) {
            if (this.currentUser.role[0] === "ROLE_DEPARTMENTMANAGER" ||
            this.currentUser.role[0] === "ROLE_SECTIONMANAGER" ||
            this.currentUser.role[0] === "ROLE_ASSISTANTMANAGER" ||
            this.currentUser.role[0] === "ROLE_ADMIN"){
                this.refreshLoker();
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