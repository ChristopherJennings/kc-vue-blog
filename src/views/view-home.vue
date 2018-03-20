<template>
  <layout-base>
    <div class="container">
      <section class="section">
        <app-loader v-if="loading" />
        <post-list-home v-else :posts="posts" />        
      </section>
    </div>        
  </layout-base>
</template>

<script>
import LayoutBase from '@/components/layout-base'
import AppLoader from '@/components/app-loader'
import PostListHome from '@/components/post-list-home'

export default {
  components: {
    LayoutBase,
    AppLoader,
    PostListHome
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    }
  },
  created () {
    this.loading = true
    // eslint-disable-next-line
    this.$store.dispatch('loadPosts').then(() => this.loading = false)
  }
}
</script>
