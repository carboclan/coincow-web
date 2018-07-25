<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <MarketplaceModal />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuBar from '@/components/com/MenuBar'
import MarketplaceModal from '@/components/com/MarketplaceModal'
export default {
  name: 'MarketplaceView',
  created () {
    this.getCows()
  },
  components: {
    MenuBar,
    MarketplaceModal
  },
  data () {
    return {
      showSignUp: false
    }
  },
  methods: {
    ...mapActions([
      'getCows'
    ])
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
  background-position: -2000px 0;
}
.farm-ft {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~@/assets/ft.png');
  background-position: -2000px 0;
}
</style>
