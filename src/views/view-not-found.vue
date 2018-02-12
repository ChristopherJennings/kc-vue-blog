<template>
  <layout-page>
    <app-hero slot="hero" title="Page not found" subtitle="Sorry about that" />
    <div class="box">
      <p>Try going <router-link :to="{ name: 'home' }">Home</router-link></p>
    </div>
  </layout-page>
</template>

<script>
import LayoutPage from '@/components/layout-page'
import AppHero from '@/components/app-hero'

export default {
  components: {
    LayoutPage,
    AppHero
  }
}
</script>
