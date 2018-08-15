<!-- Cow Detail Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <button class="farm-modal-close" v-on:click="onClose"><img src="~@/assets/icon_close.png"/></button>
      <div class="farm-modal-img"><img :src="require('@/assets/cow_' + cowData.cowType + '.png')" /></div>
      <ul class="farm-cow-detail" v-if="cowData.cowType==='ether'" >
        <li>Cow Type: {{cowData.cowType}}</li>
        <li>Contract Size: {{cowData.contractSize}} TH</li>
        <li>Last Milk Time: {{formatDate(cowData.lastMilkTime)}}</li>
        <li>Start Time: {{formatDate(cowData.startTime)}}</li>
        <li>End Time: {{formatDate(cowData.endTime)}}</li>
        <li>Total Milked: {{cowData.totalMilked / 100000000000000000}} Ether</li>
        <li>Total Stolen: {{cowData.totalStolen / 100000000000000000}} Ether</li>
        <li> Current Milk: {{cowData.milk / 100000000000000000}} Ether</li>
      </ul>
      <ul class="farm-cow-detail" v-if="cowData.cowType==='bitcoin'" >
        <li>Cow Type: {{cowData.cowType}}</li>
        <li>Contract Size: {{cowData.contractSize}} TH</li>
        <li>Last Milk Time: {{formatDate(cowData.lastMilkTime)}}</li>
        <li>Start Time: {{formatDate(cowData.startTime)}}</li>
        <li>End Time: {{formatDate(cowData.endTime)}}</li>
        <li>Total Milked: {{cowData.totalMilked / 100000000}} BTC</li>
        <li>Total Stolen: {{cowData.totalStolen / 100000000}} BTC</li>
        <li> Current Milk: {{cowData.milk / 100000000}} BTC</li>
      </ul>
      <div class="farm-modal-footer">
        <button class="farm-button" v-on:click="onSteal(cowData.cowId)">Steal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCowDetailModal',
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
    async onSteal (cowId) {
      if (this.cowData.milk / this.cowData.stealThreshold < 1) {
        alert('Milk is not full enough for stealing')
        return
      }
      await this.cowData.contract.steal(cowId)
      console.log('steal')
      this.$emit('close')
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
