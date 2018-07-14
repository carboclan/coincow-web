<!-- Cow File -->
<template>
  <div class="farm-cow" v-on:click="onClick">
    <div class="milk-bar"></div>
    <div class="milk-bar-fill" :style="{ backgroundColor: cowData.milkLevel < 0.95 ? 'rgba(0, 0, 255, ' + cowData.milkLevel + ')' : '#ff0000', width: cowData.milkLevel * 350 + 'px'}">
      <img class="milk-bottle" src="~@/assets/bottle.png">
    </div>
    <img :src="require('@/assets/cow_' + cowData.cowType + '.png')" class="cow-img" />
  </div>
</template>

<script>
export default {
  name: 'Cow',
  data () {
    return { }
  },
  props: {
    cowData: Object
  },
  methods: {
    onClick () {
      this.$emit('cowclick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scroped lang="stylus">

.milk-bar
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  border-radius: 15px;
  height: 30px;
  background-color: white;

.milk-bar-fill
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  height: 30px;

.milk-bottle
  position: absolute;
  top: -15px;
  right: -10px;
  height: 60px;
  width: 30px;

.farm-cow
  width: 350px;
  height: 300px;
  background: none;
  border: none;

.cow-img
  position: absolute
  bottom: 0
  left: 0

</style>
