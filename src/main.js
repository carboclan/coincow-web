// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import { web3 } from 'web3-api-wrap'
import { milk, hashrate, ether } from './lib/filters'

/* eslint-disable */
Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(web3)

Vue.filter('milk', milk)
Vue.filter('hashrate', hashrate)
Vue.filter('ether', ether)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
