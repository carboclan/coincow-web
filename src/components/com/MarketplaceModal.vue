<!-- Marketplace Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="cow-card" v-for="cow in cowList" :key="cow.cowId">
        <div class="cow-card-img"><img :src="require('@/assets/cow_' + cow.cowType + '.png')" /></div>
        <div class="cow-detail-box">
          <div>Type: {{cow.cowType}}</div>
          <div>Price: {{cow.price}} Ether</div>
          <div>Contract Size: {{cow.contractSize | hashrate(cow.contractAddress)}}</div>
          <div>Seller: {{cow.sellerName}}</div>
        </div>
        <button class="cow-card-button" v-if="cow.seller !== user.address" v-on:click="onBuyCow(cow.cowId, cow.price)">Buy</button>
        <button class="cow-card-button" v-if="cow.seller === user.address" v-on:click="onCancelAuction(cow.cowId)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { contracts, web3 } from '@/lib/eth'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MarketplaceModal',
  data () {
    return {
    }
  },
  computed: mapState({
    cowList: state => {
      return state.cowList.filter(cow => cow.onAuction)
    },
    isCOO: state => state.user.isCOO,
    user: state => state.user
  }),
  methods: {
    ...mapActions([
      'getCows'
    ]),
    async onBuyCow (cowId, price) {
      const tx = await contracts.auctionHouse.bid(cowId, { value: web3.toWei(price, 'ether') })
      await web3.eth.getTransactionReceipt(tx)
      this.getCows()
    },
    async onCancelAuction (cowId) {
      const tx = await contracts.auctionHouse.cancelAuction(cowId)
      await web3.eth.getTransactionReceipt(tx)
      this.getCows()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .farm-modal
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  .cow-card
    background-color: white;
    width: 350px;
    height: 430px;
    padding: 5px;
    margin: 5px;

  .cow-card-img
    background-color: #cdf3fa;
    width: 350px;
    height: 250px;

  .cow-detail-box
    height: 95px;
    padding: 10px;
    font-size: 20px;

  .cow-card-button
    color: white;
    background: $red;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    padding: 0 30px;
    border: none;

  .farm-modal-body
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;

</style>
