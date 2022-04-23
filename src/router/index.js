import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Readtotal from '../components/Analyse/Readtotal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/readtotal',
    component: Readtotal
  },
]

const router = new VueRouter({
  routes
})

export default router
