<template>
  <div>
    <h1>Welcome to the blog</h1>
    <div v-for="post in posts" :key="post.system.id">
      <h2>{{ post.title.text }}</h2>
      <div v-html="post.body.getHtml()"></div>
    </div>
  </div>
</template>

<script>
import {createClient} from '@/KenticoCloud/client'

const deliveryClient = createClient()

export default {
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
