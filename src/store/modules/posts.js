import * as types from '@/store/mutation-types'
import postApi from '@/api/posts'

export default {
  state: {
    posts: [],
    recentPosts: []
  },

  getters: {},

  mutations: {
    [types.SET_POSTS] (state, posts) {
      state.posts = posts
    },
    [types.SET_RECENT_POSTS] (state, recentPosts) {
      state.recentPosts = recentPosts
    }
  },

  actions: {
    loadPosts ({state, commit}) {
      return new Promise((resolve, reject) => {
        if (state.posts.length === 0) {
          try {
            postApi.getPosts().subscribe(response => {
              commit(types.SET_POSTS, response.items)
              resolve()
            })
          } catch (error) {
            reject(error)
          }
        } else {
          resolve()
        }
      })
    },
    loadRecentPosts ({state, commit}) {
      return new Promise((resolve, reject) => {
        if (state.recentPosts.length === 0) {
          try {
            postApi.getRecentPosts().subscribe(response => {
              commit(types.SET_RECENT_POSTS, response.items)
              resolve()
            })
          } catch (error) {
            reject(error)
          }
        } else {
          resolve()
        }
      })
    }
  }
}
