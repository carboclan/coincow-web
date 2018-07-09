<!-- Cow File -->
<template>
  <div class="farm-cow" v-on:click="onClick">
    <div class="milk-bar"></div>
    <div class="milk-bar-fill" :style="{ backgroundColor: cowData.milk < 0.95 ? 'rgba(0, 0, 255, ' + cowData.milk + ')' : '#ff0000', width: cowData.milk * 350 + 'px'}">
      <img class="milk-bottle" src="~@/assets/bottle.png">
    </div>
    <img :src="require('@/assets/cow_' + cowData.cowType + '.png')" />
  </div>
</template>

<script>
export default {
  name: 'Cow',
  data () {
    return {
      cowData: {
        milk: 0.7,
        cowType: 'bitcoin'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('cowclick');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scroped>
.milk-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  border-radius: 15px;
  height: 30px;
  background-color: white;
}
.milk-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  height: 30px;
}
.milk-bottle {
  position: absolute;
  top: -15px;
  right: -10px;
  height: 60px;
  width: 30px;
}
.farm-cow {
  width: 350px;
  height: 350px;
  background: none;
  border: none;
}
</style>
