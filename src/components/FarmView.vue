<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <Cow class="cow1" v-on:cowclick="onCowClick" />
      <div class="toolbox">
        <button class="tool-item">G</button>
        <button class="tool-item">M</button>
        <button class="tool-item" v-on:click="onBuyToolClick">+</button>
      </div>
      <CowDetailModal v-if="showModal === 'COW_DETAIL'" v-on:close="closeModal" />
      <BuyToolModal v-if="showModal === 'BUY_TOOL'" v-on:close="closeModal" />
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import CowDetailModal from '@/components/com/CowDetailModal'
import BuyToolModal from '@/components/com/BuyToolModal'
import Cow from '@/components/com/Cow'
export default {
  name: 'FarmView',
  components: {
    MenuBar,
    CowDetailModal,
    BuyToolModal,
    Cow
  },
  data () {
    return {
      msg: 'Farm View',
      showModal: 'NONE'
    }
  },
  methods: {
    onCowClick () {
      console.log('click')
      this.showModal = 'COW_DETAIL'
    },
    onBuyToolClick () {
      this.showModal = 'BUY_TOOL'
    },
    closeModal () {
      this.showModal = 'NONE'
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
.cow1 {
  position: fixed;
  left: 50px;
  bottom: 50px;
}

.cow2 {
  position: fixed;
  right: 70px;
  bottom: 40px;
}

a {
  color: #42b983;
}
</style>
