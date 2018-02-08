import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page-home'
import PagePostDetail from '@/components/page-post-detail'
import PageCategoriesIndex from '@/components/page-categories-index'
import PageNotFound from '@/components/page-not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: PageHome
    },
    {
      name: 'categories',
      path: '/categories/:term',
      component: PageCategoriesIndex
    },
    {
      name: 'post-detail',
      path: '/posts/:slug',
      component: PagePostDetail
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
