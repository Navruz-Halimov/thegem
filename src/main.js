import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import "aos/dist/aos.css"
import AOS from 'aos'
import axios from 'axios'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  axios,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
