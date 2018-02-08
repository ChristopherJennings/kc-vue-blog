<template>
  <div>
    <div>
      <p class="subtitle is-6">
        Posted on {{ new Date(post.publish_date.value).toDateString() }}
      </p>
    </div>
    <div class="content" v-html="post.body.getHtml()"></div>
  </div>     
</template>

<script>
export default {
  props: [
    'post'
  ]
}
</script>

