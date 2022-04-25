import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.css'
import VueAxios from 'vue-axios'
import * as echarts from "echarts"
import scroll from 'vue-seamless-scroll'


Vue.use(scroll)
Vue.use(VueAxios, axios)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

