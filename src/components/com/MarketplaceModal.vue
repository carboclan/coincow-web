<!-- Marketplace Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="cow-card" v-for="cow in cowList" :key="cow.cowId">
        <div class="cow-card-img"><img :src="require('@/assets/cow_' + cow.cowType + '.png')" /></div>
        <div class="cow-detail-box">
          <div>Type: {{cow.cowType}}</div>
          <div>Price: {{cow.price}}</div>
          <div>Contract Size: {{cow.contractSize}}</div>
        </div>
        <button class="cow-card-button" v-on:click="onBuyCow(cow.cowId)">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketplaceModal',
  data () {
    return {
      cowList: [
        {
          cowId: 1,
          cowType: 'bitcoin',
          price: 2,
          contractSize: '2 GH'
        },
        {
          cowId: 2,
          cowType: 'ether',
          price: 5,
          contractSize: '10 GH'
        },
        {
          cowId: 3,
          cowType: 'bitcoin',
          contractSize: '2 GH',
          price: 10
        },
        {
          cowId: 4,
          cowType: 'ether',
          contractSize: '1 GH',
          price: 0.5
        }
      ]
    }
  },
  methods: {
    onBuyCow (cowId) {
      console.log(cowId)
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
  .cow-card {
    background-color: white;
    width: 350px;
    height: 400px;
    padding: 5px;
    margin: 5px;
  }
  .cow-card-img {
    background-color: #cdf3fa;
    width: 350px;
    height: 250px;
  }
  .cow-detail-box {
    height: 65px;
    padding: 10px;
    font-size: 20px;
  }
  .cow-card-button {
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
