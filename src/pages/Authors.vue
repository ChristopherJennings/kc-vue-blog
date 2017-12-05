<template>
  <blog-layout>
    <Hero slot="hero" title="Our Authors" subtitle="They don't really exist" />

    <div class="columns is-multiline">
      <div class="column is-half" v-for="author in authors" :key="author.system.id">
        <Author-Card :author="author" />
      </div>
    </div>
  </blog-layout>
</template>

<script>
import BlogLayout from '@/components/layouts/Blog-Layout'
import Hero from '@/components/Hero'
import AuthorCard from '@/components/Author-Card'
import {createClient} from '@/Kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'Authors',
  components: {
    BlogLayout,
    Hero,
    AuthorCard
  },
  data () {
    return {
      authors: []
    }
  },

  created () {
    deliveryClient.items().type('author').get().subscribe(response => { this.authors = response.items })
  }
}
</script>