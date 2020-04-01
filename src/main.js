import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ColorThemePlugin } from './service/vuestic-ui'
import store from './store/index'
//import router from './router/index'
import { VuesticPlugin } from './service/vuestic-ui/components'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false


//staging
Vue.use(VuesticPlugin)
//Vue.use(YmapPlugin)
//Vue.use(VueClipboard)

Vue.use(ColorThemePlugin, {
  // override colors here.
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
