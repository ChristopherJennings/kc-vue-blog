<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical">
      <post-list-home-item :post="post" v-for="post in posts" :key="post.system.id"/>
    </div>
  </div>
</template>

<script>
import PostListHomeItem from './post-list-home-item'

export default {
  props: ['posts'],
  components: {
    PostListHomeItem
  }
}
</script>