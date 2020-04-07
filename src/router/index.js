import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import AuthLayout from '../components/Auth/AuthLayout.vue'
import TesLayout from '../components/Tes/TesLayout.vue'
import RequestLowongan from '../components/RequestLowongan/RequestLowongan.vue'
import RequestLowonganDisplay from '../components/RequestLowongan/RequestLowonganDisplay.vue'
import RequestLowonganId from '../components/RequestLowongan/RequestLowonganId.vue'
import ListRequestLowongan from '../components/RequestLowongan/ListRequestLowongan.vue'
import formCreateLoker from '../components/LowonganKerja/formCreateLoker.vue'
import FormUpdateLoker from '../components/LowonganKerja/FormUpdateLoker.vue'
import listLoker from '../components/LowonganKerja/ListLokerComponent.vue'
import formCuti from '../components/Cuti/formCuti.vue'
import viewCuti from '../components/Cuti/viewCuti.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import { LayoutPlugin } from 'bootstrap-vue'
import detailLoker from '../components/LowonganKerja/DetailLoker.vue'
import LamaranKerja from '../components/Lamaran/LamaranKerja.vue'
import fileLamaran from '../components/Lamaran/fileLamaran.vue'

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
    component: AuthLayout,
    children :[
      {
        name:'login',
        path:'login',
        component: () => import('../components/Auth/Login/Login.vue')
      },
      {
        name:'signup',
        path:'signup',
        component : () => import('../components/Auth/SignUp/SignUp.vue')
      },
      {
        name: 'change-password',
        path: 'change-password',
        component: () => import('../components/Auth/RecoverPassword/RecoverPassword.vue')
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
        component: () => import('../components/Error/404-Pages/404.vue')
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
        component: () => import('../components/Error/502-Pages/502.vue')
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
    component: TesLayout,
    children:[
      {
        path: 'tulis',
        name: 'tulis',
        component: () => import('../components/Tes/TesTulis/TesTulis.vue'),
      },
      {
        path: 'medis',
        name: 'medis',
        component: () => import('../components/Tes/TesMedis/TesMedis.vue'),
      },
      {
        path: 'wawancara',
        name: 'wawancara',
        component: () => import('../components/Tes/TesWawancara/TesWawancara.vue')
      },
    ]
  },
  {
    //path: '/RequestLowongan',
    path: '/RequestLowongan/add',
    name: 'RequestLowongan',
    component: RequestLowongan
  },
  {
    path: '/RequestLowongan',
    name: 'RequestLowonganDisplay',
    component: RequestLowonganDisplay
  },
  {
    path: '/RequestLowongan/:id',
    name: 'RequestLowonganId',
    component: RequestLowonganId
  },
  {
    path: '/ListRequestLowongan',
    name: 'ListRequestLowongan',
    component: ListRequestLowongan
  },
  {
    path: '/buatLoker/:id',
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
    path: '/LamaranKerja/:idLowongan',
    name:'LamaranKerja',
    component: LamaranKerja
  },
  {
    path: '/fileLamaran',
    name:'fileLamaran',
    component: fileLamaran
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

export default new VueRouter({
  mode:'history',
  routes})
