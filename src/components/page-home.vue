<template>
  <div>
    <layout-master>
      <AppHero slot="hero" title="Welcome!" subtitle="This is a sample blog" />
      <div class="box">
        <app-loader v-if="loading" />
        <div class="columns is-multiline" v-else>
          <PostPreview :post="post" v-for="post in posts" :key="post.system.id" />
        </div>        
      </div>
    </layout-master>
  </div>
</template>

<script>
import LayoutMaster from '@/components/layout-master'
import AppHero from '@/components/app-hero'
import AppLoader from '@/components/app-loader'
import PostPreview from '@/components/post-preview'

export default {
  data () {
    return {
      loading: false
    }
  },
  components: {
    LayoutMaster,
    AppHero,
    AppLoader,
    PostPreview
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
