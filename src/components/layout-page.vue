<template>
  <layout-base>
    
    <slot name="hero"/>
    
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <slot/>
          </div>
          <div class="column is-one-quarter">
            <div class="box">
              <app-sidebar-posts />
              <characters-menu-list />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </layout-base>
</template>

<script>
import LayoutBase from './layout-base'
import AppSidebarPosts from './app-sidebar-posts'
import CharactersMenuList from './characters-menu-list'

export default {
  components: {
    LayoutBase,
    AppSidebarPosts,
    CharactersMenuList
  }
}
</script>