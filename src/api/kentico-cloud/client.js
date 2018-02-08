import * as KenticoCloud from 'kentico-cloud-delivery-typescript-sdk'
import KenticoCloudConfig from './KenticoCloudConfig.json'
import { Post } from './models/post'
import { Author } from './models/author'

export function createClient () {
  let typeResolvers = [
    new KenticoCloud.TypeResolver('post', () => new Post()),
    new KenticoCloud.TypeResolver('author', () => new Author())
  ]

  let deliveryClientConfig = new KenticoCloud.DeliveryClientConfig(KenticoCloudConfig.KenticoCloudProjectId, typeResolvers)
  return new KenticoCloud.DeliveryClient(deliveryClientConfig)
}
