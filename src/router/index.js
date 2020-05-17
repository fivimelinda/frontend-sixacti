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
import GenerateSuratKontrakDetail from '../components/GenerateSuratKontrak/GenerateSuratKontrakDetail.vue'
import GenerateSuratKontrakAll from '../components/GenerateSuratKontrak/GenerateSuratKontrakAll.vue'

import updateCuti from '../components/Cuti/updateCuti.vue'
import reviewCuti from '../components/Cuti/reviewCuti.vue'
import detailCuti from '../components/Cuti/detailCuti.vue'
import lihatRiwayatCuti from '../components/Cuti/lihatRiwayatCuti.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import detailLoker from '../components/LowonganKerja/DetailLoker.vue'
import LamaranKerja from '../components/Lamaran/LamaranKerja.vue'
import fileLamaran from '../components/Lamaran/fileLamaran.vue'
import lihatProgres from '../components/RequestLowongan/LihatProgres.vue'
import DaftarPesertaTes from '../components/Tes/DaftarPesertaTes.vue'

import Login from '../components/Auth/Login/Login.vue'
import Atribut from '../components/Attibut/Atribut.vue'
import fileKk from '../components/Lamaran/fileKk'
import fileNpwp from '../components/Lamaran/fileNpwp'
import fileBpjsKes from '../components/Lamaran/fileBpjsKes'
import fileBpjsKet from '../components/Lamaran/fileBpjsKet'
import fileResume from '../components/Lamaran/fileResume'
import fileKis from '../components/Lamaran/fileKis'
import MainLayout from '../components/MainLayout'

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
        component: Login
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
        name:'signup-admin',
        path:'signup-admin',
        component : () => import('../components/Auth/SignUp/SignUpAdmin.vue')
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
    path:'',
    name:'main',
    component: MainLayout,
    children:[
      {
        path:'/atribut/:id',
        name:'atribut',
        component:Atribut,
      },
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:'/listPelamar/:idLowongan',
        name: 'Pelamar',
        component: DaftarPesertaTes,
      },
      {
        path: '/tes/:id',
        name: 'tes',
        component: TesLayout,
        // children:[
        //   {
        //     path: 'tulis',
        //     name: 'tulis',
        //     component: () => import('../components/Tes/TesTulis/TesTulis.vue'),
        //   },
        //   {
        //     path: 'medis',
        //     name: 'medis',
        //     component: () => import('../components/Tes/TesMedis/TesMedis.vue'),
        //   },
        //   {
        //     path: 'wawancara',
        //     name: 'wawancara',
        //     component: () => import('../components/Tes/TesWawancara/TesWawancara.vue')
        //   },
        // ]
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
        name: 'viewCuti',
        component: viewCuti
      },
      {
        path: '/updateCuti',
        name: 'updateCuti',
        component: updateCuti
      },
      {
        path:'/reviewCuti',
        name: 'reviewCuti',
        component: reviewCuti
      },
      {
        path:'/detailCuti/:cutiId',
        name: 'detailCuti',
        component: detailCuti
      },
      {
        path: '/lihatRiwayatCuti/:karyawanId',
        name: 'lihatRiwayatCuti',
        component: lihatRiwayatCuti
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
        path: '/fileLamaran/:idLamaran',
        name:'fileLamaran',
        component: fileLamaran
      },
      {
        path: '/fileKk/:idLamaran',
        name:'fileKk',
        component: fileKk
      },
      {
        path: '/fileNpwp/:idLamaran',
        name:'fileNpwp',
        component: fileNpwp
      },
      {
        path: '/fileBpjsKet/:idLamaran',
        name:'fileBpjsKet',
        component: fileBpjsKet
      },
      {
        path: '/fileBpjsKes/:idLamaran',
        name:'fileBpjsKes',
        component: fileBpjsKes
      },
      {
        path: '/fileResume/:idLamaran',
        name:'fileResume',
        component: fileResume
      },
      {
        path: '/fileKis/:idLamaran',
        name:'fileKis',
        component: fileKis
      },
      {
        path: '/GenerateSuratKontrak',
        name: 'GenerateSuratKontrak',
        component: GenerateSuratKontrakAll
      },
      {
        path: '/GenerateSuratKontrak/:id/:index',
        name: 'GenerateSuratKontrak',
        component: GenerateSuratKontrakDetail
      },
    
      //Path Download File
      {
        path: '/download/ktp/:fileName',
        
      },
      {
        path:'/lihatProgres/:idLoker',
        name: 'lihatProgres',
        component: lihatProgres
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
  },
  
]

const router =  new VueRouter({
  mode:'history',
  routes});

  // router.beforeEach((to, from, next) => {
  //   const loggedIn = localStorage.getItem('user');
  
  //   // trying to access a restricted page + not logged in
  //   // redirect to login page
  //   if (!loggedIn) {
  //     next('/auth/login');
  //   } else {
  //     next();
  //   }
  // });

  export default router;
