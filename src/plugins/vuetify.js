import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.js'
// import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
      },
    })