import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.css'
import VueAxios from 'vue-axios'
<<<<<<< HEAD
import * as echarts from "echarts"
import scroll from 'vue-seamless-scroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(scroll)
=======
import * as echarts from 'echarts';


>>>>>>> 48b69aeb6d24e63703b4843a5bc5804c4c573640
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

