<template>
  <layout-page>
    <app-hero slot="hero" :title="term" />
    <div class="box">
      <p v-if="posts && posts.length == 0">No posts found</p>
      <p v-if="posts && posts.length > 0">{{posts.length}} posts found</p>
      <post-list :posts="posts" />
    </div>
  </layout-page>
</template>

<script>
import LayoutPage from '@/components/layout-page'
import AppHero from '@/components/app-hero'
import PostList from '@/components/post-list'
import postApi from '@/api/posts'

export default {
  name: 'categories-index-page',
  components: {
    LayoutPage,
    AppHero,
    PostList
  },
  data () {
    return {
      loaded: false,
      posts: [],
      term: ''
    }
  },

  created () {
    this.term = this.$route.params.term

    postApi.getPostsByCharacterTaxonomy(this.term).subscribe(response => {
      this.posts = response.items
      this.loaded = true
    })
  }
}
</script>
