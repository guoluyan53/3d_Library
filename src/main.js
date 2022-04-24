import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.css'
import VueAxios from 'vue-axios'
import * as echarts from "echarts"
import scroll from 'vue-seamless-scroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(scroll)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

