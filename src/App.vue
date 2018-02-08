<template>
  <div id="app">
    <NavMain />
    <router-view :key="$route.fullPath" />
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Powered by <strong><a href="https://kenticocloud.com/">Kentico Cloud</a></strong>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavMain from '@/components/nav-main'

export default {
  components: {
    NavMain
  }
}
</script>

<style lang="sass">
@import './style/main.scss'
</style>