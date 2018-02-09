<template>
  <layout-master>
    <app-hero slot="hero" :title="term" />
    <div class="box">
      <p v-if="posts && posts.length == 0">No posts found</p>
      <post-preview :post="post" v-for="post in posts" :key="post.system.id" />
    </div>
  </layout-master>
</template>

<script>
import LayoutMaster from '@/components/layout-master'
import AppHero from '@/components/app-hero'
import PostPreview from '@/components/post-preview'
import { createClient } from '@/api/kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'categories-index-page',
  components: {
    LayoutMaster,
    AppHero,
    PostPreview
  },
  data () {
    return {
      loaded: false,
      posts: [],
      term: ''
    }
  },

  created () {
    this.term = this.$route.params.term

    deliveryClient.items().type('post').containsFilter('elements.categories', [this.term]).get().subscribe(response => {
      this.posts = response.items
      this.loaded = true
    })
  }
}
</script>
