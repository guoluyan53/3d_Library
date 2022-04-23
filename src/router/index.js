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
<<<<<<< HEAD
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 测试可见
    path: '/floor',
    name: 'Floor',
    component: () => import('../components/Floor/floorobj.vue')
  }
=======
    path: '/readtotal',
    component: Readtotal
  },
>>>>>>> 6538141cd5cde7e536c11530fa5e7afc307e19b4
]

const router = new VueRouter({
  routes
})

export default router
