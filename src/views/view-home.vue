<template>
  <layout-base>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <app-loader v-if="loading" />
            <post-grid :posts="posts" v-else />
          </div>
        </div>
      </div>        
    </section>
  </layout-base>
</template>

<script>
import LayoutBase from '@/components/layout-base'
import AppLoader from '@/components/app-loader'
import PostGrid from '@/components/post-grid'

export default {
  components: {
    LayoutBase,
    AppLoader,
    PostGrid
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
