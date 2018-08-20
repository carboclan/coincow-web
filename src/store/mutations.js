export default {
  setFarmList (state, farmList) {
    // 设置农场
    state.farmList = farmList
  },
  setUser (state, user) {
    // 设置用户
    state.user = user
  },
  setFarmInfo (state, payload) {
    state.farmInfo.id = payload.id
    state.farmInfo.name = payload.name
    state.farmInfo.owner = payload.owner
  },
  updateFarmMembers (state, payload) {
    state.farmInfo.members = payload
  },
  startGetCowList (state) {
    state.loadingCowList = true
    state.cowList = []
  },
  setCowList (state, payload) {
    state.loadingCowList = false
    state.cowList = payload
  }
}
