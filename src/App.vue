<template>
  <div id="app">
    <!-- START NAV -->
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link class="navbar-item brand-text" to="/">KC Blog Sample</router-link>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/authors">Authors</router-link>
        </div>
      </div>
    </nav>
    <!-- END NAV -->

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
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import './style/main.scss'
</style>