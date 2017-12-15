import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import AuthorsPage from '@/components/pages/AuthorsPage'
import PostDetailPage from '@/components/pages/PostDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage
    },
    {
      name: 'Authors',
      path: '/authors',
      component: AuthorsPage
    },
    {
      name: 'categories',
      path: '/categories/:term',
      component: { template: '<div>Not Configured</div>' }
    },
    {
      name: 'post-detail',
      path: '/posts/:slug',
      component: PostDetailPage
    }
  ]
})
