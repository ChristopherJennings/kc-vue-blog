import { createClient } from './kentico-cloud/client'

const deliveryClient = createClient()

export default {
  getPosts () {
    return deliveryClient.items().type('post').orderParameter('elements.publish_date', 1).get()
  },

  getRecentPosts () {
    return deliveryClient.items().type('post').limitParameter(5).orderParameter('elements.publish_date', 1).get()
  }
}
