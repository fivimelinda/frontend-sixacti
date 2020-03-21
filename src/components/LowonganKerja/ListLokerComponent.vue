<template>
  <div class="container">
    <h3>All Courses</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container">
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
            loker : []
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
        }
        
    },
    created(){
        this.refreshLoker();
    }
};
</script>

<style>
</style>