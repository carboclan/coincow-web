<!-- MyMilk Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="milk-row">
        <div class="milk-row-header">Coin Type</div>
        <div class="milk-row-header">Balance</div>
        <div class="milk-row-header">Total Producted</div>
        <div class="milk-row-header">Actions</div>
      </div>
      <div class="milk-row" v-for="milk in milkList" :key="milk.coinType">
        <div class="milk-row-cell">{{milk.coinType}}</div>
        <div class="milk-row-cell">{{milk.balance}}</div>
        <div class="milk-row-cell">{{milk.total}}</div>
        <button class="milk-row-button" v-on:click="onWithdraw(milk.coinType)">Withdraw</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMilkModal',
  data () {
    return {
      milkList: [
        {
          coinType: 'BTC',
          balance: 0.45,
          total: 4.50
        },
        {
          coinType: 'ETH',
          balance: 0.56,
          total: 10.20
        },
        {
          coinType: 'EOS',
          balance: 45.30,
          total: 100.34
        },
        {
          coinType: 'COW',
          balance: 3402.20,
          total: 10234.50
        }
      ]
    }
  },
  methods: {
    onWithdraw (coinType) {
      console.log('withdraw ', coinType)
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

  .milk-row
    display: flex;
    width: 80%;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    color: white;
    .milk-row-header
      background-color: $jade;
      width: 25%;
      margin: 3px;
    .milk-row-cell
      background-color: $grey;
      width: 25%;
      margin: 3px;
      color: black;
    .milk-row-button
      background-color: $red;
      color: white;
      font-size: 32px;
      width: 25%;
      margin: 3px;
      border: none;
      &:hover
        background-color: $darkred;

  .farm-modal-body {
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
  }
</style>
