<template>
  <div id="app" class="app">
  <v-app>
    <Navbar/>
    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

@import url('https://fonts.googleapis.com/css?family=Archivo&display=swap');

.application {
  font-family: "Oswald";
}


</style>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{ Navbar },
  data () {
    return {
      //
    }
  }
}
</script>