<template>
  <div class="loading" v-if="!loaded">Loading...</div>
</template>

<script>
export default {
  name: 'loader',
  props: [
    'loaded'
  ]
}
</script>

