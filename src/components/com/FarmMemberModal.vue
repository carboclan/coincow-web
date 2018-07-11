<!-- FarmMember Modal File -->
<template>
  <div class="member-list-frame">
    <button class="farm-menu-item" v-on:click="toggleList">Members({{memberList.length}})</button>
    <div class="member-list-body" v-if="showList">
      <div class="farm-member" v-for="member in memberList" :key="member.name">
        {{member.name}}({{member.cows}})<router-link :to="'/member/' + member.name">Enter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteModal',
  data () {
    return {
      memberList: [
        {
          name: 'Alan',
          cows: 10
        },
        {
          name: 'G',
          cows: 100
        },
        {
          name: 'ttl',
          cows: 50
        },
        {
          name: 'B7',
          cows: 5
        },
        {
          name: 'C',
          cows: 40
        },
        {
          name: 'xxx',
          cows: 1
        }
      ],
      showList: true
    }
  },
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

</style>
