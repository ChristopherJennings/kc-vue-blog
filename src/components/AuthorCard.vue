<template>
  <div class="card">
    <div class="card-content has-text-centered">
      <img v-bind:src="author.profile_image.assets[0].url">
      <p class="title">{{ author.first_name.text}} {{ author.last_name.text}}</p>
      <p class="has-text-left">{{ author.short_bio.text }}</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'author-card',
  props: [
    'author'
  ]
}
</script>
