<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <FarmListModal :farmList="farmList" />
      <button class="farm-create-button" v-on:click="onCreateFarm()">Create Farm</button>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import FarmListModal from '@/components/com/FarmListModal'
import { web3, contracts } from '@/lib/eth'
import { mapState } from 'vuex'
export default {
  name: 'FarmListView',
  components: {
    MenuBar,
    FarmListModal
  },
  data () {
    return {
      showSignUp: false
    }
  },
  computed: mapState({
    farmList: state => {
      return state.farmList
    }
  }),
  methods: {
    async onCreateFarm () {
      console.log(contracts.farm)
      const creationFee = web3.toWei(0.2, 'ether')
      contracts.farm.create(web3.fromAscii('test farm'), {value: creationFee})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

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
.farm-ft {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/ft.png');
  background-position: -3300px 0;
}

.farm-create-button
  position: absolute;
  top: 30px;
  right: 30px;
  color: white;
  background: $red;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  padding: 0 30px;
  border: none;

</style>
