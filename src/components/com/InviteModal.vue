<!-- Invite Modal File -->
<template>
  <div class="farm-modal">
    <div class="farm-modal-body">
      <div class="farm-modal-title">Invite Friends to Join:</div>
      <div class="farm-message">{{message}}</div>
      <button class="farm-button"
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteModal',
  data () {
    return {
      message: 'https://coincow.com/invite/4345333 Please join my farm!'
    }
  },
  methods: {
    onCopy () {
      console.log('copy')
    },
    onError () {
      console.log('error')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .farm-modal
    background-color: rgba(0, 0, 0, 0.3);
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

  .farm-message
    height: 100px;
    margin: 20px auto;
    width: 80%;
    border: 3px solid #bbb;
    padding: 10px;

</style>
