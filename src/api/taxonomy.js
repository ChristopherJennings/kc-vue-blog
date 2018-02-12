import { createClient } from './kentico-cloud/client'

const deliveryClient = createClient()

export default {
  getTaxonomy (codename) {
    return deliveryClient
      .taxonomy(codename)
      .get()
  }
}
