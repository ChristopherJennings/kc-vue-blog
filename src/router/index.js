import Vue from 'vue'
import Router from 'vue-router'
import ViewHome from '@/views/view-home'
import ViewPostDetail from '@/views/view-post-detail'
import ViewCategoriesDetail from '@/views/view-categories-detail'
import ViewNotFound from '@/views/view-not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: ViewHome
    },
    {
      name: 'categories-detail',
      path: '/categories/:term',
      component: ViewCategoriesDetail
    },
    {
      name: 'post-detail',
      path: '/posts/:slug',
      component: ViewPostDetail
    },
    {
      path: '*',
      component: ViewNotFound
    }
  ]
})
