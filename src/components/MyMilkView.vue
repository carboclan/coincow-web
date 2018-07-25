<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <MyMilkModal />
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import MyMilkModal from '@/components/com/MyMilkModal'
export default {
  name: 'MyMilkView',
  components: {
    MenuBar,
    MyMilkModal
  },
  data () {
    return {
      msg: 'MyMilk View',
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
  background-position: 4000 0;
}
</style>
