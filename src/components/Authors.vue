<template>
  <div>
    <h1>Our Authors</h1>
    <ul>
      <li v-for="author in authors" :key="author.system.id">
        {{ author.first_name.text}} {{ author.last_name.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'Authors',
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