<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { contracts, coinMap, web3 } from '@/lib/eth'
export default {
  name: 'App',
  async created () {
    this.getCows()
    this.getFarms()
  },
  methods: {
    async getCows () {
      const total = (await contracts.coinCowCore.totalSupply()).toNumber()
      const cowList = []
      for (let i = 1; i < total + 1; i++) {
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
        const onAuction = await contracts.auctionHouse.isOnAuction(i)
        if (onAuction) {
          cow.onAuction = true
          const auctionArray = await contracts.auctionHouse.getAuction(i)
          cow.price = auctionArray[1].toNumber()
          cow.seller = auctionArray[0]
        } else {
          cow.onAuction = false
        }
        cowList.push(cow)
      }
      this.$store.commit('setCowList', cowList)
    },
    async getFarms () {
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
      this.$store.commit('setFarmList', farmList)
    }
  }
}
</script>

<style lang="stylus">

h1 {
  font-weight: bold;
  font-size: 70px;
  color: white;
}

.farm-button
  background-color: $red;
  height: 100px;
  width: 600px;
  color: white;
  border: none;
  font-size: 60px;
  &:hover
    background-color: $darkred;

</style>
