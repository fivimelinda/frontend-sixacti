import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import store from './store/store'

Vue.use(VueAxios, axios)
   
Vue.config.productionTip = false

// Validasi
Vue.use(Vuelidate)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})
