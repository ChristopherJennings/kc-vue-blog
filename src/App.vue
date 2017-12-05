<template>
  <div id="app">
    <main-navigation/>
    <router-view/>

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
import MainNavigation from '@/components/MainNavigation'

export default {
  name: 'app',
  components: {
    MainNavigation
  }
}
</script>

<style lang="sass">
@import './style/main.scss'
</style>