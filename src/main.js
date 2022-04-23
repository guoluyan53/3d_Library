import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.css'
import VueAxios from 'vue-axios'
<<<<<<< HEAD
import * as echarts from 'echarts';


=======
import * as echarts from "echarts"
>>>>>>> 6538141cd5cde7e536c11530fa5e7afc307e19b4
Vue.use(VueAxios, axios)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

