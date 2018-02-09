<template>
  <div class="column is-half">
    <div class="card">
      <div class="card-image">
        <router-link :to="{ path: post.slug.getUrl() }">
          <figure class="image is-1by1 is-cropped">
            <img :src="post.hero__image.assets[0].url">
          </figure>
        </router-link>
      </div>
      <div class="card-content">
        <h2 class="title">
          <router-link :to="{ path: post.slug.getUrl() }">
             {{ post.hero__title.text }}
          </router-link>
        </h2>
        <div class="content" v-html="post.hero__subtitle.text"></div>
        <p class="subtitle is-6">
          Posted on {{ new Date(post.publish_date.value).toDateString() }}
        </p>
      </div>
    </div>
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
