<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <InviteModal />
    </div>
  </div>
</template>

<script>
import InviteModal from '@/components/com/InviteModal'
import MenuBar from '@/components/com/MenuBar'
export default {
  name: 'InviteView',
  components: {
    MenuBar,
    InviteModal
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.farm-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/bg.jpg');
}

</style>
