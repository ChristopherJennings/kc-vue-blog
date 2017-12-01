<template>
  <div>
    <Hero title="Our Authors" subtitle="They don't really exist" />
    <div class="section">
      <div class="container">
        <h1 class="title is-title-1">Our Authors</h1>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="author in authors" :key="author.system.id">
            <div class="card">
              <div class="card-content has-text-centered">
                <img v-bind:src="author.profile_image.assets[0].url">
                <p class="title">{{ author.first_name.text}} {{ author.last_name.text}}</p>
                <p class="has-text-left">{{ author.short_bio.text }}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'Authors',
  components: {
    Hero
  },
  data () {
    return {
      authors: []
    }
  },

  created () {
    deliveryClient.items().type('author').get().subscribe(response => { this.authors = response.items })
  }
}
</script>