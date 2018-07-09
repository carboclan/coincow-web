<!-- SignUp Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="farm-card" v-for="farm in farmList" :key="farm.farmId">
        <div class="farm-card-title">{{farm.name}}</div>
        <div class="farm-detail">
          <div>Owner: {{farm.owner}}</div>
          <div>Members: {{farm.members}}</div>
          <div>Cows: {{farm.cows}}</div>
        </div>
        <button class="farm-card-button" v-on:click="onJoinFarm(farm.farmId)">Join Farm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FarmListModal',
  data () {
    return {
      farmList: [
        {
          farmId: 1,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 2,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 3,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 4,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 5,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 7,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 8,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        },
        {
          farmId: 9,
          name: '澳洲肥牛庄园',
          owner: 'Smith',
          members: 123,
          cows: 182
        }
      ]
    }
  },
  methods: {
    onJoinFarm (farmId) {
      console.log(farmId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .farm-modal {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .farm-card {
    background-color: white;
    width: 350px;
    height: 250px;
    padding: 5px;
    margin: 5px;
  }
  .farm-card-title {
    color: white;
    background: green;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
  }
  .farm-detail {
    height: 110px;
    padding: 10px;
    font-size: 20px;
  }
  .farm-card-button {
    bottom: -30px;
    color: white;
    background: #fc6471;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    padding: 0 30px;
    border: none;
  }
  .farm-modal-body {
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
  }
</style>
