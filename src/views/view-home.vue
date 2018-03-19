<template>
  <layout-base>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <app-loader v-if="loading" />
            <div v-else>
              <div class="tile is-ancestor">
                <div class="tile is-parent is-8-desktop is-12-tablet">
                   <a href="#" class="tile is-child notification"
                      style="background: url('https://assets.kenticocloud.com:443/38c91924-939f-4740-be70-5c92ea3cb4e1/eab40f09-19a1-4649-9198-8f1eb92a4244/i007_th.jpg') no-repeat center center; background-size: cover">
                        <p class="title">
                          Primary bold title
                        </p>
                        <h2 class="subtitle">
                          Primary bold subtitle
                        </h2>
                  </a>
                </div>
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <div class="card">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title">John Smith</p>
                          <p class="subtitle">@johnsmith</p>
                        </div>
                        <div class="content">
                          Test
                        </div>
                      </div>
                    </div>
                    </div>
                  </article>
                  <article class="tile is-child notification is-primary">
                    <p class="title">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                  </article>
                </div>
              </div>
              <post-grid :posts="posts" />
            </div>
          </div>
        </div>
      </div>        
    </section>
  </layout-base>
</template>

<script>
import LayoutBase from '@/components/layout-base'
import AppLoader from '@/components/app-loader'
import PostGrid from '@/components/post-grid'

export default {
  components: {
    LayoutBase,
    AppLoader,
    PostGrid
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    }
  },
  created () {
    this.loading = true
    // eslint-disable-next-line
    this.$store.dispatch('loadPosts').then(() => this.loading = false)
  }
}
</script>
