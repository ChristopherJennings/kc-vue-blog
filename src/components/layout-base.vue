<template>
  <div>
    <nav-main />
    <slot/>
    <nav-footer/>
  </div>
</template>

<script>
import NavMain from './nav-main'
import NavFooter from './nav-footer'

export default {
  components: {
    NavMain,
    NavFooter
  }
}
</script>