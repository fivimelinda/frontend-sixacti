import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RequestLowongan from '../components/RequestLowongan/RequestLowongan.vue'
import formCreateLoker from '../components/LowonganKerja/formCreateLoker.vue'
import FormUpdateLoker from '../components/LowonganKerja/FormUpdateLoker.vue'
import listLoker from '../components/LowonganKerja/ListLokerComponent.vue'
import formCuti from '../components/Cuti/formCuti.vue'
import viewCuti from '../components/Cuti/viewCuti.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { LayoutPlugin } from 'bootstrap-vue'
import detailLoker from '../components/LowonganKerja/DetailLoker.vue'

Vue.use(Vuetify);
Vue.use(VueRouter)

const emptyComponent = {
  template : '<router-view><router-view>'
}

const routes = [
  // home path
  {
    path:'*',
    redirect:{name:'Home'}
  },
  
  // path untuk authentikasi 
  {
    path: '/auth',
    component: emptyComponent,
    children :[
      {
        name:'login',
        path:'login',
        component:emptyComponent
      },
      {
        name:'signup',
        path:'signup',
        component : emptyComponent
      },
      {
        name: 'change-password',
        path: 'change-password',
        component: emptyComponent
      },
      {
        path: '',
        redirect: {
          name:'login'
        }
      }
    ]
  },

  // path for error
  {
    path : '/404',
    component: emptyComponent,
    children :[
      {
        name:'not-found',
        path:'not-found',
        component:emptyComponent
      }
    ]
  },
  {
    path:'/502',
    component:emptyComponent,
    children:[
      {
        name:'internal-server',
        path:'internal-server',
        component:emptyComponent
      }
    ]
  },

  // main path
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tes',
    name: 'tes',
    component: emptyComponent,
    children:[
      {
        path: 'tulis',
        name: 'tulis',
        component: emptyComponent,
      },
      {
        path: 'medis',
        name: 'medis',
        component: emptyComponent,
      },
      {
        path: 'wawancara',
        name: 'wawancara',
        component: emptyComponent
      },
    ]
  },
  {
    path: '/RequestLowongan',
    name: 'RequestLowongan',
    component: RequestLowongan
  },
  {
    path: '/buatLoker',
    name: 'formCreateLoker',
    component: formCreateLoker
  },
  {
    path: '/ubahLoker/:idLowongan',
    name: 'FormUpdateLoker',
    component: FormUpdateLoker
  },
  {
    path: '/listLoker',
    name: 'listLoker',
    component: listLoker
  },
  {
    path: '/formCuti',
    name: 'formCuti',
    component: formCuti
  },
  {
    path: '/cuti',
    name: 'cuti',
    component: viewCuti
  },
  {
    path: '/detailLoker/:idLowongan',
    name: 'detailLoker',
    component: detailLoker
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

//<<<<<<< HEAD
export default new VueRouter({routes})
// =======
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

// export default router
//>>>>>>> master
