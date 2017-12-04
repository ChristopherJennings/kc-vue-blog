import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Authors from '@/pages/Authors'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Authors',
      path: '/authors',
      component: Authors
    },
    {
      name: 'categories',
      path: '/categories/:term',
      component: { template: '<div>Not Configured</div>' }
    }
  ]
})
