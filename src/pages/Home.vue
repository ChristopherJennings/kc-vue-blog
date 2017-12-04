<template>
  <div>
    <Hero title="Welcome!" subtitle="This is a sample blog" />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <post-preview :post="post" v-for="post in posts" :key="post.system.id" />
            </div>
          </div>
          <div class="column is-one-quarter">
            <div class="box">
              <aside class="menu">
                <p class="menu-label">Categories</p>
                <ul class="menu-list">
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                </ul>
                <p class="menu-label">Archive</p>
                <ul class="menu-list">
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import PostPreview from '@/components/Post-Preview'
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'HelloWorld',
  components: {
    Hero,
    PostPreview
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
