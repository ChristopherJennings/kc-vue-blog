<template>
  <layout-page v-if="loaded">
      <app-hero slot="hero" :title="post.hero__title.text" :subtitle="post.hero__subtitle.text" />
      <div class="box">
        <post-detail :post="post" />
      </div>
  </layout-page>
</template>

<script>
import LayoutPage from '@/components/layout-page'
import AppLoader from '@/components/app-loader'
import AppHero from '@/components/app-hero'
import PostDetail from '@/components/post-detail'
import { createClient } from '@/api/kentico-cloud/client'

const deliveryClient = createClient()

export default {
  components: {
    LayoutPage,
    AppLoader,
    AppHero,
    PostDetail
  },
  data () {
    return {
      loaded: false,
      post: {}
    }
  },

  created () {
    deliveryClient.items().type('post').equalsFilter('elements.slug', this.$route.params.slug).get().subscribe(response => {
      this.post = response.items[0]
      this.loaded = true
    })
  }
}
</script>
