<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <FarmListModal :farmList="farmList" :farmInfo="farmInfo" />
      <CreateFarmModal v-if="showCreateFarm" v-on:close="onCloseCreateFarm" />
      <button class="farm-create-button" v-if="farmInfo.owner !== user.address" v-on:click="onCreateFarm()">Create Farm</button>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import FarmListModal from '@/components/com/FarmListModal'
import CreateFarmModal from '@/components/com/CreateFarmModal'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'FarmListView',
  components: {
    MenuBar,
    FarmListModal,
    CreateFarmModal
  },
  async created () {
    await this.getFarms()
  },
  data () {
    return {
      showCreateFarm: false
    }
  },
  computed: mapState({
    farmList: state => {
      return state.farmList
    },
    farmInfo: state => state.farmInfo,
    user: state => state.user
  }),
  methods: {
    ...mapActions(['getFarms']),
    onCloseCreateFarm () {
      this.showCreateFarm = false
    },
    onCreateFarm () {
      if (this.user.balance > 0) {
        this.showCreateFarm = true
        return
      }
      alert('You need at least one cow to join a farm!')
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
  background-position: -3600px 0;
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
