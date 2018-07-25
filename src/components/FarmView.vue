<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <Cow class="cow" v-for="(cow, index) in cowList" :cowData="cow" v-on:cowclick="onCowClick(cow)" :key="cow.cowId" :style="getCowStyle(index, cowList.length)"/>
      <div class="toolbox">
        <button class="tool-item">G</button>
        <button class="tool-item">M</button>
        <button class="tool-item">+</button>
      </div>
      <div class="user-box">
        {{user.username}}'s Farm ({{user.balance}} cows)
      </div>
      <CowDetailModal v-if="showModal === 'COW_DETAIL'" v-on:close="closeModal" v-on:sell="onSellCowClick" :cowData="currentCow" />
      <BuyToolModal v-if="showModal === 'BUY_TOOL'" v-on:close="closeModal" />
      <SellCowModal v-if="showModal === 'SELL_COW'" v-on:close="closeModal" :cowData="currentCow"/>
      <FarmMemberModal />
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import CowDetailModal from '@/components/com/CowDetailModal'
import BuyToolModal from '@/components/com/BuyToolModal'
import SellCowModal from '@/components/com/SellCowModal'
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
    SellCowModal,
    Cow
  },
  computed: mapState({
    cowList: state => {
      if (!state.user) {
        window.location = '/'
      }
      return state.cowList.filter(cow => cow.owner === state.user.address)
    },
    user: state => state.user
  }),
  data () {
    return {
      currentCow: undefined,
      showModal: 'NONE'
    }
  },
  async created () {
  },
  methods: {
    onCowClick (cow) {
      this.currentCow = cow
      this.showModal = 'COW_DETAIL'
    },
    onBuyToolClick () {
      this.showModal = 'BUY_TOOL'
    },
    onSellCowClick () {
      this.showModal = 'SELL_COW'
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
  background-position: -3300px 0;
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
.user-box {
  position: fixed;
  left: 30px;
  top: 100px;
  color: white;
  font-size: 20px;
}
</style>
