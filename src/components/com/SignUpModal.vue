<!-- SignUp Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <button class="farm-modal-close" v-on:click="onClose"><img src="~@/assets/icon_close.png"/></button>
      <div class="farm-modal-title">Enter a nickname:</div>
      <div class="farm-inputgroup">
        <span class="farm-inputgroup-addon"><img src="~@/assets/person_icon.png"/></span>
        <input class="farm-input" v-model="nickname" placehoder="Your Nick Name" />
      </div>
      <button class="farm-button" v-on:click="onSubmit">Done</button>
    </div>
  </div>
</template>

<script>
import { web3, contracts } from '@/lib/eth'
import { sleep } from '@/lib/util'
export default {
  name: 'SignUpModal',
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    async onSubmit () {
      if (!this.nickname) {
        alert('Username cannot be empty')
        return
      }
      const userAddress = (await web3.eth.getAccounts())[0]
      this.$store.commit('setUser',
        {
          address: userAddress,
          username: this.nickname
        })
      const tx = await contracts.userInfo.register(web3.fromUtf8(this.nickname), '')
      await web3.eth.getTransactionReceipt(tx)
      await sleep(4000)
      this.$emit('close')
      alert('Please buy a cow and join a farm or create a new farm first.')
      this.$router.push({path: '/marketplace'})
    },
    onClose () {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .farm-modal
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .farm-modal-body
      position: relative;
      margin: 150px auto;
      height: 400px;
      width: 700px;
      padding: 50px;
      background-color: white;
      border: solid 3px #BBB;
    .farm-modal-title
      font-size: 60px;

  .farm-inputgroup
    margin: 80px auto;
    height: 100px;
    clear: both;

  .farm-inputgroup-addon
    display: inline-block;
    float: left;
    height: 100px;
    width: 100px;

  .farm-inputgroup-addon img
    height: 100px;
    width: 100px;

  .farm-modal-close
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    img
      height: 50px;
      width: 50px;

  .farm-input
    display: inline-block;
    box-sizing: border-box;
    height: 100px;
    width: 600px;
    font-size: 60px;
    border: none;
    border-bottom: 3px solid #BBB;

</style>
