<template>
  <div id="app">
    <nav-main />
    <router-view :key="$route.fullPath" />
    <nav-footer />
  </div>
</template>

<script>
import NavMain from '@/components/nav-main'
import NavFooter from '@/components/nav-footer'

export default {
  components: {
    NavMain,
    NavFooter
  }
}
</script>

<style lang="sass">
@import './style/main.scss'
</style>