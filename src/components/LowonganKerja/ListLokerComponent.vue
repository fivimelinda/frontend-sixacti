<template>
  <div class="container">
    <h3>All Courses</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="loker in loker" v-bind:key="loker.id">
            <td>{{loker.idLowongan}}</td>
            <td>{{loker.deskripsi}}</td>
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
        }
    },
    created(){
        this.refreshLoker();
    }
};
</script>

<style>
</style>