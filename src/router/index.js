import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RequestLowongan from '../components/RequestLowongan/RequestLowongan.vue'
import formCreateLoker from '../components/LowonganKerja/formCreateLoker.vue'
import FormUpdateLoker from '../components/LowonganKerja/FormUpdateLoker.vue'
import listLoker from '../components/LowonganKerja/ListLokerComponent.vue'
import detailLoker from '../components/LowonganKerja/DetailLoker.vue'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
