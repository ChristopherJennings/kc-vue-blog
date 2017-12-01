import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Authors from '@/components/Authors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    }
  ]
})
