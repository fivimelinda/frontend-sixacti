<template>
<b-container>
    <div class="content" :style="{'background-image': 'url(' + require('../assets/home.jpg') + ')'}">
    <v-layout
      text-center
      wrap
    >
      <!-- <v-flex xs12>
        <v-img
          :src="require('../assets/xacti.png')"
          class="my-3"
          contain
          height="50"
        ></v-img>
      </v-flex> -->

      <v-flex>
        <h1 class="display-2 text-white font-weight-bold" id="main-title">
          Selamat datang di SIXACTI
        </h1>
      </v-flex>
      <v-flex>
        <p class="subheading text-white font-weight-bold">
          Sistem Informasi Human Resource PT. Xacti Indonesia
        </p>
      </v-flex>
    </v-layout>
    </div>
  </b-container>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>
<style scoped>
.content{
  height: 600px;
}
#main-title{
  margin-top: 15px;
  margin-left: 0px !important;
}
</style>
