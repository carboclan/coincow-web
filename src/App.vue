<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
