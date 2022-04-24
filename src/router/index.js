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
    // 楼层显示模型
    path: '/floor',
    name: 'Floor',
    component: () => import('../components/Floor/floorobj.vue')
  },
  {
    // 图书显示模型
    path: '/book',
    name: 'Book',
    component: () => import('../components/Book/bookobj.vue')
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
