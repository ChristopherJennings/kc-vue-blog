<template>
  <div>
    <Hero title="Our Authors" subtitle="They don't really exist" />
    <div class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half" v-for="author in authors" :key="author.system.id">
            <Author-Card :author="author" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import AuthorCard from '@/components/Author-Card'
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'Authors',
  components: {
    Hero,
    AuthorCard
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