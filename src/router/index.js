import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import AuthorsPage from '@/components/pages/AuthorsPage'
import PostDetailPage from '@/components/pages/PostDetailPage'
import CategoriesIndexPage from '@/components/pages/CategoriesIndexPage'
import NotFoundPage from '@/components/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage
    },
    {
      name: 'authors',
      path: '/authors',
      component: AuthorsPage
    },
    {
      name: 'categories',
      path: '/categories/:term',
      component: CategoriesIndexPage
    },
    {
      name: 'post-detail',
      path: '/posts/:slug',
      component: PostDetailPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})
