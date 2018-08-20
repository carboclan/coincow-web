// Farmview for other users
<template>
  <div class="farm-bg">
    <div class="farm-ft">
      <MenuBar />
      <Cow class="cow" v-for="(cow, index) in cowList" :cowData="cow" v-on:cowclick="onCowClick(cow)" :key="cow.id" :style="getCowStyle(index, cowList.length)"/>
      <div class="user-box">
        {{user.username}}'s Farm
      </div>
      <FarmMemberModal />
      <UserCowDetailModal v-if="showModal === 'COW_DETAIL'" v-on:steal="onSteal" v-on:close="closeModal" :cowData="currentCow" />
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/com/MenuBar'
import FarmMemberModal from '@/components/com/FarmMemberModal'
import UserCowDetailModal from '@/components/com/UserCowDetailModal'
import Cow from '@/components/com/Cow'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UserFarmView',
  components: {
    MenuBar,
    FarmMemberModal,
    UserCowDetailModal,
    Cow
  },
  computed: mapState({
    cowList: function (state) {
      if (!this.$route.params.user) {
        window.location = '/'
      }
      return state.cowList.filter(cow => cow.owner === this.$route.params.user)
    },
    user: function (state) {
      return ({
        username: state.farmInfo.members.filter(member => member.address === this.$route.params.user)[0].name
      })
    }
  }),
  data () {
    return {
      currentCow: undefined,
      showModal: 'NONE'
    }
  },
  async created () {
  },
  methods: {
    ...mapActions([
      'getCows'
    ]),
    onCowClick (cow) {
      this.currentCow = cow
      this.showModal = 'COW_DETAIL'
    },
    closeModal () {
      this.showModal = 'NONE'
    },
    onSteal () {
      this.getCows()
      this.showModal = 'NONE'
    },
    getCowStyle (index, length) {
      const width = window.innerWidth - 300
      const left = index * width / length + 30
      return ({
        left: `${left}px`
      })
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
  background-position: -3000px 0;
}
.toolbox {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.tool-item {
  display: inline-block;
  height: 60px;
  width: 60px;
  font-size: 60px;
  text-align: center;
  border: none;
  background-color: green;
  color: white;
  line-height: 60px;
}
.cow {
  position: fixed;
  left: 50px;
  bottom: 50px;
}
.user-box {
  position: fixed;
  left: 30px;
  top: 100px;
  color: white;
  font-size: 20px;
}
</style>
