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
    // 楼层分析
    path: '/floor',
    name: 'Floor',
    component: () => import('../views/Floor.vue')
  },
  {
    // 图书分析
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  },
  //学情分析
  {
      path: '/analyse',
      name: 'Analyse',
      component: () => import('../views/Analyse.vue')
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
  },
  {
    path: '/readtotal',
    name: 'Readtotal',
    component: () => import('../components/Analyse/Readtotal.vue')
  },
  {
    path: '/radar',
    name: 'Radarcategory',
    component: () => import('../components/Analyse/Radarcategory.vue')
  },
  {
    path: '/change',
    name: 'Change',
    component: () => import('../components/Analyse/Change.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
