<template>
<aside class="menu">
  <p class="menu-label">Recent Posts</p>
  <ul class="menu-list">
    <li v-for="post in posts" :key="post.system.id">
      <router-link :to="{path: post.slug.getUrl() }">{{ post.hero__title.text }}</router-link>
    </li>
  </ul>
</aside>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts.recentPosts
    }
  },
  created () {
    this.$store.dispatch('loadRecentPosts')
  }
}
</script>