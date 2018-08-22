<!-- Cow Detail Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <button class="farm-modal-close" v-on:click="onClose"><img src="~@/assets/icon_close.png"/></button>
      <div class="farm-modal-img"><img :src="require('@/assets/cow_' + cowData.cowType + '.png')" /></div>
      <ul class="farm-cow-detail" >
        <li>Cow Type: {{cowData.cowType}}</li>
        <li>Contract Size: {{cowData.contractSize | hashrate(cowData.contractAddress)}}</li>
        <li>Last Milk Time: {{formatDate(cowData.lastMilkTime)}}</li>
        <li>Start Time: {{formatDate(cowData.startTime)}}</li>
        <li>End Time: {{formatDate(cowData.endTime)}}</li>
        <li>Total Milked: {{cowData.totalMilked | milk(cowData.contractAddress)}}</li>
        <li>Total Stolen: {{cowData.totalStolen | milk(cowData.contractAddress)}}</li>
        <li> Current Milk: {{cowData.milk | milk(cowData.contractAddress)}}</li>
      </ul>
      <div class="farm-modal-footer">
        <button class="farm-button" v-on:click="onSqueeze(cowData.id)">Squeeze!</button>
        <button class="farm-button" v-on:click="onSell">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import { web3 } from '@/lib/eth'
import { sleep } from '@/lib/util'
export default {
  name: 'CowDetailModal',
  components: {
  },
  props: {
    cowData: Object
  },
  data () {
    return {
    }
  },
  methods: {
    async onSqueeze (cowId) {
      if (this.cowData.milk / this.cowData.milkThreshold < 1) {
        alert('Milk is not full enough for squeeze')
        return
      }
      const tx = await this.cowData.contract.milk(cowId)
      await web3.eth.getTransactionReceipt(tx)
      await sleep(4000)
      this.$emit('squeeze')
    },
    async onSell () {
      this.$emit('sell')
    },
    onClose () {
      this.$emit('close')
    },
    formatDate (sec) {
      const date = new Date(sec * 1000)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .farm-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .farm-modal-body {
    position: relative;
    margin: 150px auto;
    height: 500px;
    width: 900px;
    padding: 20px;
    background-color: white;
    border: solid 3px #BBB;
  }
  .farm-modal-img {
    background-color: #cdf3fa;
    width: 350px;
    height: 250px;
    float: left;
  }
  ul.farm-cow-detail {
    list-style: none;
    font-size: 20px;
    line-height: 32px;
    text-align: left;
  }
  .farm-modal-footer {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 860px;
    bottom: 20px;
  }
  .farm-cow-detail {
    margin-left: 400px;
  }
  .farm-button {
    width: 300px;
    display: inline-block;
  }
  .farm-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
  }
  .farm-modal-close img {
    width: 50px;
    height: 50px;
  }
</style>
