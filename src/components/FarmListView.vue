<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <FarmListModal />
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import FarmListModal from '@/components/com/FarmListModal'
export default {
  name: 'FarmListView',
  components: {
    MenuBar,
    FarmListModal
  },
  data () {
    return {
      msg: 'FarmList View',
      showSignUp: false
    }
  },
  methods: {
    onStart () {
      console.log(this.showSignUp)
      this.showSignUp = !this.showSignUp
    },
    closeSignUp () {
      this.showSignUp = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  background-position: -3300px 0;
}
.farm-ft {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/ft.png');
  background-position: -3300px 0;
}
.cow1 {
  position: fixed;
  left: 50px;
  bottom: 50px;
}

.cow2 {
  position: fixed;
  right: 70px;
  bottom: 40px;
}

a {
  color: #42b983;
}
</style>
