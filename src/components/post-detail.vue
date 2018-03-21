<template>
  <div>
    <div class="content" v-html="post.body.getHtml()"></div>
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

