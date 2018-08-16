<!-- SignUp Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="farm-card" v-for="farm in farmList" :key="farm.farmId">
        <div class="farm-card-title">{{farm.name}}</div>
        <div class="farm-detail">
          <div>Owner: {{farm.ownerName}}</div>
          <div>Members: {{farm.members}}</div>
        </div>
        <button class="farm-card-button" v-if="user.address === farm.owner" v-on:click="onMyFarm">Your Farm</button>
        <button class="farm-card-button" v-else-if="farmInfo.id === farm.farmId" v-on:click="onMyFarm">Enter Farm</button>
        <button class="farm-card-button" v-else-if="user.address != farmInfo.owner" v-on:click="onJoinFarm(farm.farmId)">Join Farm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { contracts } from '@/lib/eth'
export default {
  name: 'FarmListModal',
  props: {
    farmList: Array
  },
  data () {
    return {
    }
  },
  computed: mapState({
    user: state => state.user,
    farmInfo: state => state.farmInfo,
  }),
  methods: {
    onMyFarm () {
      this.$router.push({path: '/farm'})
    },
    async onJoinFarm (farmId) {
      if (this.user.balance > 0) {
        console.log(farmId)
        await contracts.farm.join(farmId)
        return
      }
      alert('You need at least one cow to join a farm!')
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

  .farm-card
    background-color: white;
    width: 350px;
    height: 250px;
    padding: 5px;
    margin: 5px;

  .farm-card-title
    color: white;
    background: green;
    height: 60px;
    line-height: 60px;
    font-size: 32px;

  .farm-detail
    height: 110px;
    padding: 10px;
    font-size: 20px;

  .farm-card-button
    bottom: -30px;
    color: white;
    background: #fc6471;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    padding: 0 30px;
    border: none;

  .farm-modal-body
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    min-height: 400px;
</style>
