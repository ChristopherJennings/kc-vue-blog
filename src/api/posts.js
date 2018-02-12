import { createClient } from './kentico-cloud/client'

const deliveryClient = createClient()

export default {
  getPosts () {
    return deliveryClient
      .items()
      .type('post')
      .orderParameter('elements.publish_date', 1)
      .get()
  },

  getRecentPosts (count = 5) {
    return deliveryClient
      .items()
      .type('post')
      .limitParameter(count)
      .orderParameter('elements.publish_date', 1)
      .get()
  },

  getPostsByCharacterTaxonomy (character) {
    return deliveryClient
      .items()
      .type('post')
      .containsFilter('elements.categories', [character])
      .get()
  }
}
