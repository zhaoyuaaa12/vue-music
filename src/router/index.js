import Vue from 'vue'
import Router from 'vue-router'
import rec from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'
import Search from '../components/search/search'
import User from '../components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: rec
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/user',
      component: User
    }
  ]
})
