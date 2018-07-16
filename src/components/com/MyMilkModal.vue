<!-- MyMilk Modal File -->
<template>
  <div class="farm-modal">
    <div v-if="user" class="farm-modal-body">
      <div class="milk-row">
        <div class="milk-row-header">Coin Type</div>
        <div class="milk-row-header">Balance</div>
        <div class="milk-row-header">Actions</div>
      </div>
      <div class="milk-row" v-for="milk in user.balances" :key="milk.type">
        <div class="milk-row-cell">{{milk.type}}</div>
        <div class="milk-row-cell">{{milk.balance}}</div>
        <button class="milk-row-button" v-on:click="onWithdraw(milk.address)">Withdraw</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { coinMap } from '@/lib/eth'
export default {
  name: 'MyMilkModal',
  data () {
    return {
    }
  },
  computed: mapState({
    user: state => {
      return state.user
    }
  }),
  methods: {
    async onWithdraw (address) {
      await coinMap[address].contract.withdraw()
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
      width: 33%;
      margin: 3px;
    .milk-row-cell
      background-color: $grey;
      width: 33%;
      margin: 3px;
      color: black;
    .milk-row-button
      background-color: $red;
      color: white;
      font-size: 32px;
      width: 25%;
      margin: 3px auto;
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
