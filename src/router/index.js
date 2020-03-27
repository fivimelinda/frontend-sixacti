import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RequestLowongan from '../components/RequestLowongan/RequestLowongan.vue'
import formCreateLoker from '../components/LowonganKerja/formCreateLoker.vue'
import listLoker from '../components/LowonganKerja/ListLokerComponent.vue'
import { LayoutPlugin } from 'bootstrap-vue'

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
    path: '/listLoker',
    name: 'listLoker',
    component: listLoker
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

export default new VueRouter({routes})
