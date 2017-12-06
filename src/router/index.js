import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Authors from '@/components/pages/Authors'
import PostDetail from '@/components/pages/PostDetail'

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
    },
    {
      name: 'post-detail',
      path: '/posts/:slug',
      component: PostDetail
    }
  ]
})
