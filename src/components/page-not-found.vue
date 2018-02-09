<template>
  <layout-master>
    <app-hero slot="hero" title="Page not found" subtitle="Sorry about that" />
    <div class="box">
      <p>Try going <router-link :to="{ name: 'home' }">Home</router-link></p>
    </div>
  </layout-master>
</template>

<script>
import LayoutMaster from '@/components/layout-master'
import AppHero from '@/components/app-hero'

export default {
  components: {
    LayoutMaster,
    AppHero
  }
}
</script>
