<template>
  <aside class="menu">
    <app-menu-list-item v-for="child in children" :item="child" :key="child.key"/>
  </aside>
</template>

<script>
import AppMenuListItem from './app-menu-list-item'

export default {
  components: {
    AppMenuListItem
  },
  props: [
    'children'
  ]
}
</script>