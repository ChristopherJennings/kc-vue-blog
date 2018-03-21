<template>
  <layout-page>
    <app-loader v-if="loading" />
    <template v-else>
      <app-hero slot="hero" 
        :title="post.hero__title.text"
        :subtitle="post.hero__subtitle.text"
        :imageUrl="post.hero__image.assets[0].url"
        :text="'Posted ' + postedOnRelative + ' on ' + postedOn" />
      <post-detail :post="post" />  
    </template>
  </layout-page>
</template>

<script>
import LayoutPage from '@/components/layout-page'
import AppLoader from '@/components/app-loader'
import AppHero from '@/components/app-hero'
import PostDetail from '@/components/post-detail'
import * as moment from 'moment'

export default {
  components: {
    LayoutPage,
    AppLoader,
    AppHero,
    PostDetail
  },
  computed: {
    post () {
      return this.$store.state.posts.currentPost
    },
    postedOn () {
      return moment(this.post.publish_date.value).format('dddd, MMMM D, YYYY')
    },
    postedOnRelative () {
      return moment(this.post.publish_date.value).fromNow()
    }
  },
  data () {
    return {
      loading: false
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('loadCurrentPost', this.$route.params.slug).then(() => (this.loading = false))
  }
}
</script>
