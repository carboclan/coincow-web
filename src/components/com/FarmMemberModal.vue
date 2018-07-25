<!-- FarmMember Modal File -->
<template>
  <div class="member-list-frame">
    <button class="farm-menu-item" v-on:click="toggleList">{{farmInfo.name}}({{farmInfo.members.length}})</button>
    <div class="member-list-body" v-if="showList">
      <div class="farm-member" v-for="member in farmInfo.members" :key="member.user">
        {{member.name}} <router-link :to="'/userfarm/' + member.user" class="enter-button">Enter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'InviteModal',
  data () {
    return {
      showList: true
    }
  },
  computed: mapState({
    farmInfo: state => {
      return ({
        name: state.farmInfo.name,
        members: Object.keys(state.farmInfo.members).map(member => {
          return ({
            name: state.farmInfo.members[member],
            user: member
          })
        })
      })
    }
  }),
  methods: {
    toggleList () {
      this.showList = !this.showList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .member-list-frame
    position: fixed;
    right: 40px;
    top: 40px;
    height: 800px;
    width: 250px;
    .member-list-body
      position: absolute;
      width: 250px;
      max-height: 800px;
      background-color: rgba(0,0,0, 0.5);
      transition: transform .3s ease-out;
    .farm-menu-item
      display: inline-block;
      height: 60px;
      line-height: 60px;
      width: 250px;
      padding: 0 30px;
      background-color: $red;
      color: white;
      font-size: 32px;
      border: none;
      &:hover
        background-color: $darkred;

    .farm-member
      padding: 15px;
      color: white;
      font-size: 18px;
      .enter-button
        color: white;
        border-radius: 3px;
        border: solid 1px white;
        text-decoration: none;

</style>
