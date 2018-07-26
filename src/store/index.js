import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  cowList: [], // cowlist
  loadingCowList: false,
  farmList: [], // farmlist
  farmInfo: {
    members: {}
  },
  user: null // userinfo
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
