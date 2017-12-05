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
import {createClient} from '@/Kentico-cloud/client'

const deliveryClient = createClient()

export default {
  name: 'Blog-Layout',
  components: {
  },
  data () {
    return {
      categories: []
    }
  },

  created () {
    deliveryClient.taxonomy('categories').get().subscribe(response => { this.categories = response.taxonomy.terms })
  }
}
</script>