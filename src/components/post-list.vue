<template>
  <div>
      <post-list-item :post="post" v-for="post in posts" :key="post.system.id"/>
  </div>
</template>

<script>
import PostListItem from './post-list-item'

export default {
  props: ['posts'],
  components: {
    PostListItem
  }
}
</script>