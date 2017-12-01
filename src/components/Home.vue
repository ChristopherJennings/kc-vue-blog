<template>
  <div>
    <Hero title="Welcome!" subtitle="This is a sample blog" />
    <div class="section">
      <div class="container">
        <!-- START ARTICLE -->
        <div class="card article" v-for="post in posts" :key="post.system.id">
          <!-- <div class="card-image">
            <figure class="image is-4by3">
              <img v-bind:src="post.hero.assets[0].url">
            </figure>
          </div> removed until images are resized -->
          <div class="card-content">
            <div class="has-text-centered">
              <h1 class="title">
                {{ post.title.text }}
              </h1>
              <p class="subtitle">
                {{ post.subtitle.text }}
              </p>
              <p class="subtitle is-6">
                <router-link to="/authors">
                  {{ post.author[0].first_name.text }} {{ post.author[0].last_name.text }}
                </router-link> on {{ new Date(post.publish_date.value).toDateString() }}
              </p>
            </div>
          </div>
          <div class="card-content">
              <div class="content article-body" v-html="post.body.getHtml()"></div>
            </div>
        </div>
        <!-- END ARTICLE -->
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'HelloWorld',
  components: {
    Hero
  },
  data () {
    return {
      posts: []
    }
  },

  created () {
    deliveryClient.items().type('post').get().subscribe(response => { this.posts = response.items })
  }
}
</script>
