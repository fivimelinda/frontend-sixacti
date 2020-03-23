<template>
  <div class="container">
    <h3>All Courses</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container">
      <div class="row mt-5 mb-3 ml-1">
        <button class="btn btn-success w-25" v-on:click="addLokerClicked()">Add</button>
      </div>
      <table class="table">
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
      </table>
    </div>
  </div>
</template>

<script>
import LowonganKerjaService from '../../service/LowonganKerjaService';
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
        detailLokerClicked(idLowongan){
          var link = "detailLoker/" + idLowongan;
          this.$router.push(link);
        },
        addLokerClicked(){
          this.$router.push("/buatLoker");
        }


        
    },
    created(){
        this.refreshLoker();
    }
};
</script>

<style>
</style>