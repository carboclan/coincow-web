<!-- Menu Bar File -->
<template>
  <div class="farm-menu">
    <router-link to="/marketplace" class="farm-menu-item">Marketplace</router-link>
    <router-link to="/farmlist" class="farm-menu-item">All Farms</router-link>
    <router-link to="/farm" class="farm-menu-item">My Farm</router-link>
    <router-link to="/mymilk" class="farm-menu-item">My Milk</router-link>
    <router-link to="/invite" class="farm-menu-item">Share</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MenuBar',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getCows',
      'getFarms',
      'getUserInfo',
      'getFarmInfo'
    ]),
    onRefresh () {
      this.getCows()
      this.getFarms()
      this.getUserInfo()
      this.getFarmInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scroped>
.farm-menu {
  position: fixed;
  z-index: 10;
  top: 30px;
  left: 30px;
}
.farm-menu-item {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  background-color: #fc6471;
  color: white;
  font-size: 32px;
  text-decoration: none;
}
.farm-menu-item:hover {
  background-color: #ec3333;
}
</style>
