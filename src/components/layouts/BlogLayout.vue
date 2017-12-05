<template>
  <div>
    <slot name="hero"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <slot/>
          </div>
          <div class="column is-one-quarter">
            <div class="box">
              <aside class="menu">
                <p class="menu-label">Categories</p>
                <ul class="menu-list">
                  <li v-for="category in categories" :key="category.codename">
                    <router-link :to="{ name: 'categories', params: { term: category.codename }}">{{ category.name }}</router-link>
                  </li>
                </ul>
                <p class="menu-label">Archive</p>
                <ul class="menu-list">
                  <li v-for="post in posts" :key="post.system.id">
                    <router-link :to="{path: post.slug.getUrl() }">{{ post.title.text }}</router-link>
                  </li>
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
import {createClient} from '@/Kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'Blog-Layout',
  components: {
  },
  data () {
    return {
      categories: [],
      posts: []
    }
  },

  created () {
    deliveryClient.taxonomy('categories').get().subscribe(response => { this.categories = response.taxonomy.terms })
    deliveryClient.items().type('post').get().subscribe(response => { this.posts = response.items })
  }
}
</script>