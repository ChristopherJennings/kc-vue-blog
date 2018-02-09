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
                <p class="menu-label">Characters</p>
                <ul class="menu-list">
                  <li v-for="category in categories" :key="category.codename">
                    <router-link :to="{ name: 'categories', params: { term: category.codename }}">{{ category.name }}</router-link>
                  </li>
                </ul>
                <app-sidebar-posts />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppSidebarPosts from '@/components/app-sidebar-posts'
import {createClient} from '@/api/kentico-cloud/client'

const deliveryClient = createClient()

export default {
  components: {
    AppSidebarPosts
  },
  data () {
    return {
      categories: []
    }
  },
  created () {
    deliveryClient.taxonomy('characters').get().subscribe(response => { this.categories = response.taxonomy.terms })
  }
}
</script>