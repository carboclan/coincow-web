<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <h1 class="farm-title">{{msg}}</h1>
      <button class="farm-button" v-on:click="onStart">Start mooing!</button>
      <img class="cow1" src="~@/assets/cow_bitcoin.png" />
      <img class="cow2" src="~@/assets/cow_ether.png" />
      <SignUpModal v-if="showSignUp" v-on:close="closeSignUp" />
    </div>
  </div>
</template>

<script>
import SignUpModal from '@/components/com/SignUpModal.vue'
import { web3, contracts } from '../lib/eth'

export default {
  name: 'Home',
  components: {
    SignUpModal
  },
  data () {
    return {
      msg: 'Welcome to Coin Cow!',
      showSignUp: false
    }
  },
  methods: {
    async onStart () {
      const username = web3.toUtf8(await contracts.userInfo.nameOf(web3.eth.defaultAccount))
      if (username) {
        alert('welcome back ' + username)
        this.$router.push({path: '/farm'})
        return
      }

      this.showSignUp = true
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
}
.farm-ft {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/ft.png');
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
