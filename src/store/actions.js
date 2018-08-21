import { contracts, coinMap, web3 } from '@/lib/eth'
import { getCowList, getFarmList, getFarmMember } from '@/lib/api'

export default {
	async getCows ({commit, state}, onAuction = false, farmId = null) {
    if (state.loadingCowList) {
      return
    }
    console.log('start getCow')
    commit('startGetCowList')
		const resp = await getCowList(onAuction, farmId)
    const cowListPromise = resp.result.map(async cow => {
      const cowCoin = coinMap[cow.contract]
      cow.cowType = coinMap[cow.contract].type
      cow.contractUnit = coinMap[cow.contract].contractUnit
      cow.contractAddress = cow.contract
      cow.contract = cowCoin.contract
      const [contractSize, lastStolen, lastMilkTime, startTime, endTime, totalMilked, totalStolen] = await cowCoin.contract.getCowInfo(cow.id)
      cow.contractSize = contractSize.toNumber()
      cow.lastStolen = lastStolen.toNumber()
      cow.lastMilkTime = lastMilkTime.toNumber()
      cow.startTime = startTime.toNumber()
      cow.endTime = endTime.toNumber()
      cow.totalMilked = totalMilked.toNumber()
      cow.totalStolen = totalStolen.toNumber()
      cow.milk = await cowCoin.contract.milkAvailable(cow.id)
      cow.stealThreshold = cowCoin.stealThreshold = cowCoin.stealThreshold || await cowCoin.contract.stealThreshold()
      cow.milkThreshold = cowCoin.milkThreshold = cowCoin.milkThreshold || await cowCoin.contract.milkThreshold()
      cow.milkLevel = cow.milk / cow.stealThreshold > 1 ? 1 : cow.milk / cow.stealThreshold
      return cow
    })
    const cowList = await Promise.all(cowListPromise)
    console.log('end getCow')
		commit('setCowList', cowList)
	},
	async getFarms ({commit, state}) {
    const resp = await getFarmList()
		commit('setFarmList', resp.result)
	},
  async getFarmInfo ({commit, state}) {
    const userAddress = (await web3.eth.getAccounts())[0]
    console.log(userAddress)
    let myFarmId = await contracts.farm.userToFarmId(userAddress)
    myFarmId = myFarmId.toNumber()
    console.log(myFarmId)
    const farmInfo = await contracts.farm.getInfo(myFarmId)
    const farmName = web3.toUtf8(farmInfo[1])
    const farmOwner = farmInfo[0]
    commit('setFarmInfo', { id: myFarmId, name: farmName, owner: farmOwner })
    const resp = await getFarmMember(myFarmId)
    const farmMembers = resp.result
    commit('updateFarmMembers', farmMembers)
  },
	async getUserInfo ({commit, state}) {
		const userAddress = (await web3.eth.getAccounts())[0]
		// if (!userAddress) {
		// 	this.$router.push('/')
		// 	return
		// }
		const userName = await contracts.userInfo.nameOf(userAddress)
		if (!userName) {
			return
		}
		const balance = await contracts.coinCowCore.balanceOf(userAddress)
		const balances = []
		await Promise.all(Object.keys(coinMap).map(async coinAddress => {
			console.log(coinAddress)
			const coinBalance = await coinMap[coinAddress].contract.balanceOf(userAddress)
			if (coinBalance) {
				balances.push({
					type: coinMap[coinAddress].type,
					address: coinAddress,
					balance: coinBalance.toNumber()
				})
			}
		}))
    const coo = await contracts.coinCowCore.cooAddress()
		const user = {
			address: userAddress,
      isCOO: userAddress === coo,
			username: web3.toUtf8(userName),
			balances,
			balance: balance.toNumber()
		}
		commit('setUser', user)
	}
}
