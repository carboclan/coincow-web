export default {
  setCowList (state, cowList) {
    // 设置牛
    state.cowList = cowList
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
  },
  updateFarmMember (state, payload) {
    state.farmInfo.members[payload.user] = payload.userName
    console.log(payload)
  }
}
