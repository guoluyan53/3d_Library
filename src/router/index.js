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
<<<<<<< HEAD
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
  }
=======
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
>>>>>>> 48b69aeb6d24e63703b4843a5bc5804c4c573640
]

const router = new VueRouter({
  routes
})

export default router
