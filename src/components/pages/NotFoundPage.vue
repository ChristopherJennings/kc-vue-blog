<template>
  <div>
    <blog-layout>
      <Hero slot="hero" title="Page not found" subtitle="Sorry about that" />
      <div class="box">
        <p>Try going <router-link :to="{ name: 'home' }">Home</router-link></p>
      </div>
    </blog-layout>
  </div>
</template>

<script>
import BlogLayout from '@/components/layouts/BlogLayout'
import Hero from '@/components/Hero'

export default {
  name: 'not-found-page',
  components: {
    BlogLayout,
    Hero
  }
}
</script>
