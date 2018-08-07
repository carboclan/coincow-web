import { contracts, coinMap, web3 } from '@/lib/eth'

export default {
	async getCows ({commit, state}) {
    if (state.loadingCowList) {
      return
    }
    console.log('start getCow')
    commit('startGetCowList')
		const total = (await contracts.coinCowCore.totalSupply()).toNumber()
    const cowIndex = []
    for (let i = 1; i < total + 1; i++) {
      cowIndex.push(i)
    }
    const cowPromises = cowIndex.map(async i => {
      console.log('get cow ' + i)
			const cowId = await contracts.coinCowCore.getCow(i)
			const cowCoin = coinMap[cowId[0]]
			const cowArray = await cowCoin.contract.getCowInfo(i)
			const owner = await contracts.coinCowCore.ownerOf(i)
			const milk = await cowCoin.contract.milkAvailable(i)
			const stealThreshold = await cowCoin.contract.stealThreshold()
			const cow = {
				cowId: i,
				owner,
				milk,
				stealThreshold,
				contract: cowCoin.contract,
				milkLevel: milk / stealThreshold > 1 ? 1 : milk / stealThreshold,
				cowType: coinMap[cowId[0]].type,
				contractSize: cowArray[0].toNumber(),
				lastStolen: cowArray[1].toNumber(),
				lastMilkTime: cowArray[2].toNumber(),
				startTime: cowArray[3].toNumber(),
				endTime: cowArray[4].toNumber(),
				totalMilked: cowArray[5].toNumber(),
				totalStolen: cowArray[6].toNumber()
			}
      console.log('get auction ' + i)
			const onAuction = await contracts.auctionHouse.isOnAuction(i)
			if (onAuction) {
				cow.onAuction = true
				const auctionArray = await contracts.auctionHouse.getAuction(i)
				cow.price = web3.fromWei(auctionArray[1].toNumber())
				cow.seller = auctionArray[0]
			} else {
				cow.onAuction = false
			}
      console.log('cow ' + i + ' loaded')
      commit('pushCow', cow)
			return cow
		})
    await Promise.all(cowPromises)
    console.log('end getCow')
		commit('endGetCowList')
	},
	async getFarms ({commit, state}) {
		const total = (await contracts.farm.total()).toNumber()
		const farmList = []
		for (let i = 1; i < total + 1; i++) {
			const farmArray = await contracts.farm.getInfo(i)
			const ownerName = await contracts.userInfo.nameOf(farmArray[0])
			const farm = {
				farmId: i,
				owner: farmArray[0],
				name: web3.toUtf8(farmArray[1]),
				ownerName: web3.toUtf8(ownerName),
				members: farmArray[2].toNumber()
			}
			farmList.push(farm)
		}
		commit('setFarmList', farmList)
	},
  async getFarmInfo ({commit, state}) {
    const userAddress = (await web3.eth.getAccounts())[0]
    const myFarmId = await contracts.farm.userToFarmId(userAddress)
    const farmInfo = await contracts.farm.getInfo(myFarmId)
    const farmName = web3.toUtf8(farmInfo[1])
    const farmOwner = farmInfo[0]
    commit('setFarmInfo', { id: myFarmId, name: farmName, owner: farmOwner })
    const ownerName = await contracts.userInfo.nameOf(farmOwner)
    commit('updateFarmMember', { user: farmOwner, userName: web3.toUtf8(ownerName) })
    const myEvent = contracts.farm.Joined({farmId: myFarmId}, {fromBlock: 0, toBlock: 'latest'})
    myEvent.watch(async (error, result) => {
      if (!error) {
        const user = result.args.user
        if (userAddress === user) {
          return
        }
        const userName = await contracts.userInfo.nameOf(user)
        commit('updateFarmMember', { user, userName: web3.toUtf8(userName) })
      }
    })
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
