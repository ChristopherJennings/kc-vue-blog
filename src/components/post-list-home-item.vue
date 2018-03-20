<template>
  <div class="tile is-child">
    <router-link :to="{ path: post.slug.getUrl() }" class="hero is-light">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">{{ post.hero__title.text }}</p>
            <p class="subtitle">{{ post.hero__subtitle.text }}</p>
            <p>Posted {{ postedOnRelative }} on {{ postedOn }}</p>
          </div>
          <div class="column is-one-fifth">
            <figure class="image is-1by1 is-cropped">
              <img :src="post.hero__image.assets[0].url">
            </figure>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  computed: {
    postedOn: function () {
      return moment(this.post.publish_date.value).format('dddd, MMMM D, YYYY')
    },
    postedOnRelative: function () {
      return moment(this.post.publish_date.value).fromNow()
    }
  },
  props: [
    'post'
  ]
}
</script>
