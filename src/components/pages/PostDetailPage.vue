<template>
  <div>
    <loader :loaded="loaded" />
    <blog-layout v-if="loaded">
      <Hero slot="hero" :title="post.title.text" :subtitle="post.subtitle.text" />
      <div class="box">
        <post-detail :post="post" />
      </div>
    </blog-layout>
  </div>
</template>

<script>
import BlogLayout from '@/components/layouts/BlogLayout'
import Loader from '@/components/Loader'
import Hero from '@/components/Hero'
import PostDetail from '@/components/PostDetail'
import { createClient } from '@/Kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'PostDetailPage',
  components: {
    BlogLayout,
    Loader,
    Hero,
    PostDetail
  },
  data () {
    return {
      loaded: false,
      post: {}
    }
  },

  created () {
    deliveryClient.items().type('post').equalsFilter('elements.slug', this.$route.params.slug).get().subscribe(response => {
      this.post = response.items[0]
      this.loaded = true
    })
  }
}
</script>
