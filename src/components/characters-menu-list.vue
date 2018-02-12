<template>
  <app-menu-list :children="menu" />
</template>

<script>
import AppMenuList from './app-menu-list'
import taxonomyApi from '@/api/taxonomy'

export default {
  components: {
    AppMenuList
  },
  data () {
    return {
      menu: []
    }
  },
  created () {
    taxonomyApi.getTaxonomy('characters').subscribe(response => {
      this.menu = [{
        key: 'characters',
        title: 'Characters',
        isLabel: true,
        children: translateToMenu(response.taxonomy.terms)
      }]
    })
  }
}

function translateToMenu (taxonomyItems) {
  let processed = []
  if (taxonomyItems) {
    taxonomyItems.forEach(taxonomyItem => {
      processed.push({
        key: taxonomyItem.codename,
        title: taxonomyItem.name,
        routerTo: {
          name: 'categories-detail',
          params: {
            term: taxonomyItem.codename
          }
        },
        children: translateToMenu(taxonomyItem.terms)
      })
    })
  }
  return processed
}
</script>
