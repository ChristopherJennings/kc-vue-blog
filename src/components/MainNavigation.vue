<template>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link class="navbar-item brand-text" to="/">KC Blog Sample</router-link>
        <div class="navbar-burger burger" data-target="navMenu" v-on:click="toggle()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" v-bind:class="{ 'is-active': open, 'navbar-menu': true }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/authors">Authors</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
}
</script>

<style>

</style>
