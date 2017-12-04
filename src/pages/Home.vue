<template>
  <div>
    <Hero title="Welcome!" subtitle="This is a sample blog" />
    <div class="section">
      <div class="container">
        <div v-for="post in posts" :key="post.system.id">
          <post-preview-card :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import PostCardPreview from '@/components/Post-Preview-Card'
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'HelloWorld',
  components: {
    Hero,
    PostPreviewCard
  },
  data () {
    return {
      posts: []
    }
  },

  created () {
    deliveryClient.items().type('post').get().subscribe(response => { this.posts = response.items })
  }
}
</script>
