<template>
  <div>
    <div>
      <h1 class="title">
        <router-link :to="{ path: post.slug.getUrl() }">
          {{ post.hero__title.text }}
        </router-link>
      </h1>
      <p class="subtitle is-6">
        Posted on {{ new Date(post.publish_date.value).toDateString() }}
      </p>
    </div>

    <div class="content" v-html="post.hero__subtitle.text"></div>
  </div>     
</template>

<script>
export default {
  name: 'post-preview',
  props: [
    'post'
  ]
}
</script>

