// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import Vuex from 'vuex'
import { web3 } from 'web3-api-wrap'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(web3)
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    cowList: [],
    farmList: [],
    userList: [],
    user: null
  },
  mutations: {
    setCowList (state, cowList) {
      // 变更状态
      state.cowList = cowList
    },
    setFarmList (state, farmList) {
      state.farmList = farmList
    },
    setUser (state, user) {
      state.user = user
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
