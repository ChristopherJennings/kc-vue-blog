<template>
  <div>
    <div>
      <p class="subtitle is-6">
        <router-link :to="{ path: post.author[0].slug.getUrl() }">
          {{ post.author[0].first_name.text }} {{ post.author[0].last_name.text }}
        </router-link> on {{ new Date(post.publish_date.value).toDateString() }}
      </p>
    </div>

    <div class="content" v-html="post.body.getHtml()"></div>
  </div>     
</template>

<script>
export default {
  name: 'post-detail',
  props: [
    'post'
  ]
}
</script>

