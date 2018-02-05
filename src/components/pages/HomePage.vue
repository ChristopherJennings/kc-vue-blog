<template>
  <div>
    <blog-layout>
      <Hero slot="hero" title="Welcome!" subtitle="This is a sample blog" />
      <div class="box">
        <post-preview :post="post" v-for="post in posts" :key="post.system.id" />
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
  name: 'home-page',
  components: {
    BlogLayout,
    Hero,
    PostPreview
  },
  data () {
    return {
      posts: []
    }
  },

  created () {
    deliveryClient.items().type('post').orderParameter('elements.publish_date', 1).get().subscribe(response => { this.posts = response.items })
  }
}
</script>
