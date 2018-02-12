<template>
  <div>
    <div class="columns is-centered is-multiline">
      <post-grid-item v-for="post in posts" :key="post.system.id" :post="post" />
    </div>
  </div>
</template>

<script>
import PostGridItem from './post-grid-item'

export default {
  props: [
    'posts'
  ],
  components: {
    PostGridItem
  }
}
</script>