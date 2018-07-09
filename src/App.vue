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

<style>

body {
    background-color: #bbbbbb;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: bold;
  font-size: 70px;
  color: white;
}

.farm-button {
  background-color: #fc6471;
  height: 100px;
  width: 600px;
  color: white;
  border: none;
  font-size: 60px;
}

.farm-button:hover {
  background-color: #ec3333;
}

</style>
