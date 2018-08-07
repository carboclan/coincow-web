export default {
  pushCow (state, cow) {
    // 设置牛
    state.cowList.push(cow)
  },
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
  updateFarmMember (state, payload) {
    state.farmInfo.members[payload.user] = payload.userName
  },
  startGetCowList (state) {
    state.loadingCowList = true
    state.cowList = []
  },
  endGetCowList (state) {
    state.loadingCowList = false
  }
}
