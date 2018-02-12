<template>
  <article class="media">
    <figure class="media-left">
      <router-link :to="{ path: post.slug.getUrl() }" class="image is-64x64 is-cropped is-1by1">
        <img :src="post.hero__image.assets[0].url">
      </router-link>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <router-link :to="{ path: post.slug.getUrl() }">
            <strong>{{ post.hero__title.text }}</strong>
          </router-link>
          <br>
          {{ post.hero__subtitle.text }}
          <br>
          <small>Posted on {{ new Date(post.publish_date.value).toDateString() }}</small>
        </p>
      </div>
    </div>
  </article>  
</template>

<script>
export default {
  props: [
    'post'
  ]
}
</script>
