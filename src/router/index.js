import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FarmView from '@/components/FarmView'
import MarketplaceView from '@/components/MarketplaceView'
import FarmListView from '@/components/FarmListView'
import MyMilkView from '@/components/MyMilkView'
import InviteView from '@/components/InviteView'
import UserFarmView from '@/components/UserFarmView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/farm',
      name: 'FarmView',
      component: FarmView
    },
    {
      path: '/farmlist',
      name: 'FarmListView',
      component: FarmListView
    },
    {
      path: '/marketplace',
      name: 'MarketplaceView',
      component: MarketplaceView
    },
    {
      path: '/mymilk',
      name: 'MyMilkView',
      component: MyMilkView
    },
    {
      path: '/invite',
      name: 'InviteView',
      component: InviteView
    },
    {
      path: '/userfarm/:user',
      name: 'UserFarmView',
      component: UserFarmView
    }
  ]
})
