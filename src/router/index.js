import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    // 测试可见
    path: '/floor',
    name: 'Floor',
    component: () => import('../components/Floor/floorobj.vue')
  },
  {
    path: '/readTotal',
    name: 'Read',
    component: () => import('../components/Analyse/Readtotal.vue')
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: () => import('../components/Index/Borrow.vue')
  },
  {
    path: '/roll',
    name: 'Roll',
    component: () => import('../components/Index/Rolldata.vue')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('../components/Index/Enter.vue')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('../components/Index/Recommend.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../components/Index/Category.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
