<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <Cow class="cow" v-for="(cow, index) in cowList" :cowData="cow" v-on:cowclick="onCowClick(cow)" :key="cow.cowId" :style="getCowStyle(index, cowList.length)"/>
      <div class="toolbox">
        <button class="tool-item">G</button>
        <button class="tool-item">M</button>
        <button class="tool-item" v-on:click="onBuyToolClick">+</button>
      </div>
      <div class="user-box">
        {{username}}({{balance}})
      </div>
      <CowDetailModal v-if="showModal === 'COW_DETAIL'" v-on:close="closeModal" :cowData="currentCow" />
      <BuyToolModal v-if="showModal === 'BUY_TOOL'" v-on:close="closeModal" />
      <FarmMemberModal />
    </div>
  </div>
</template>

<script>
import { web3, contracts } from '@/lib/eth'

import MenuBar from '@/components/com/MenuBar'
import CowDetailModal from '@/components/com/CowDetailModal'
import BuyToolModal from '@/components/com/BuyToolModal'
import FarmMemberModal from '@/components/com/FarmMemberModal'
import Cow from '@/components/com/Cow'
import { mapState } from 'vuex'

export default {
  name: 'FarmView',
  components: {
    MenuBar,
    CowDetailModal,
    BuyToolModal,
    FarmMemberModal,
    Cow
  },
  computed: mapState({
    cowList: state => {
      return state.cowList.filter(cow => cow.owner === state.user.address)
    }
  }),
  data () {
    return {
      username: '',
      balance: 0,
      currentCow: undefined,
      showModal: 'NONE'
    }
  },
  async created () {
    const username = web3.toUtf8(await contracts.userInfo.nameOf(web3.eth.defaultAccount))
    this.$data.username = username
    console.log(contracts)
    const balance = await contracts.coinCowCore.balanceOf(web3.eth.defaultAccount)
    this.$data.balance = balance
  },
  methods: {
    onCowClick (cow) {
      this.currentCow = cow
      this.showModal = 'COW_DETAIL'
    },
    onBuyToolClick () {
      this.showModal = 'BUY_TOOL'
    },
    closeModal () {
      this.showModal = 'NONE'
    },
    getCowStyle (index, length) {
      const width = window.innerWidth - 300
      const left = index * width / length + 30
      return ({
        left: `${left}px`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.farm-title {
  margin: 250px auto 100px auto;
}
.farm-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/bg.jpg');
  background-position: -4000px 0;
}
.farm-ft {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/ft.png');
  background-position: -4000px 0;
}
.toolbox {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.tool-item {
  display: inline-block;
  height: 60px;
  width: 60px;
  font-size: 60px;
  text-align: center;
  border: none;
  background-color: green;
  color: white;
  line-height: 60px;
}
.cow {
  position: fixed;
  left: 50px;
  bottom: 50px;
}
</style>
