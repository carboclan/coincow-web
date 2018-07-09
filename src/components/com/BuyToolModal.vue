<!-- Buy Tool Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <button class="farm-modal-close" v-on:click="onClose"><img src="~@/assets/icon_close.png"/></button>
      <div class="farm-modal-img"><img src="~@/assets/cow_filecoin.png" /></div>
      <div class="farm-modal-footer">
        <button class="farm-button" v-on:click="onBuyG">Buy</button>
        <button class="farm-button" v-on:click="onBuyM">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyToolModal',
  components: {
  },
  data () {
    return {
      cowData: {
        cowType: 'bitcoin',
        contractSize: '2 GH',
        lastMilkTime: '2018-7-1',
        startTime: '2018-6-1',
        endTime: '2018-8-31',
        totalMilked: 0.03,
        totalStolen: 0.0004
      }
    }
  },
  methods: {
    onBuyG () {
      console.log('BuyM')
      this.$emit('close')
    },
    onBuyM () {
      console.log('BuyG')
      this.$emit('close')
    },
    onClose () {
      this.$emit('close')
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
