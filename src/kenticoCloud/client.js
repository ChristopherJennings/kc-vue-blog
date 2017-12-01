import * as KenticoCloud from 'kentico-cloud-delivery-typescript-sdk'
import config from '@/KenticoCloudConfig.json'

export function createClient () {
  let typeResolvers = []
  let deliveryClientConfig = new KenticoCloud.DeliveryClientConfig(config.KenticoCloudProjectId, typeResolvers)
  return new KenticoCloud.DeliveryClient(deliveryClientConfig)
}
