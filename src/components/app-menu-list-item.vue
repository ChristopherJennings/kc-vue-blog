<template>
  <div>
    <template v-if="item.isLabel">
      <p class="menu-label">
          {{ item.title }}
      </p>
      <ul class="menu-list" v-if="item.children">
        <app-menu-list-item v-for="child in item.children" :item="child" :key="child.key"/>  
      </ul>  
    </template>
    <template v-else>
      <li>
        <router-link :to="item.routerTo" >{{ item.title }}</router-link>
        <ul v-if="item.children">
          <app-menu-list-item v-for="child in item.children" :item="child" :key="child.key"/>  
        </ul>  
      </li>
    </template>
  </div>
</template>

<script>
import AppMenuListItem from './app-menu-list-item'

export default {
  name: 'app-menu-list-item',
  components: {
    AppMenuListItem
  },
  props: [
    'item'
  ]
}
</script>