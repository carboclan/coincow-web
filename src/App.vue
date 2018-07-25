<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  async created () {
    this.getCows()
    this.getFarms()
    this.getUserInfo()
    this.getFarmInfo()
  },
  methods: {
    ...mapActions([
      'getCows',
      'getFarms',
      'getUserInfo',
      'getFarmInfo'
    ])
  }
}
</script>

<style lang="stylus">

h1 {
  font-weight: bold;
  font-size: 70px;
  color: white;
}

.farm-button
  background-color: $red;
  height: 100px;
  width: 600px;
  color: white;
  border: none;
  font-size: 60px;
  &:hover
    background-color: $darkred;

</style>
