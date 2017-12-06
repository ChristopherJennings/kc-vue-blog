<template>
  <div>
    <blog-layout>
      <Hero slot="hero" title="Detail" subtitle="Sub" />
      <div class="box" v-if="loaded">
        <post-preview :post="post" />
      </div>
    </blog-layout>
  </div>
</template>

<script>
import BlogLayout from '@/components/layouts/BlogLayout'
import Hero from '@/components/Hero'
import PostPreview from '@/components/PostPreview'
import { createClient } from '@/Kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'PostDetail',
  components: {
    BlogLayout,
    Hero,
    PostPreview
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
