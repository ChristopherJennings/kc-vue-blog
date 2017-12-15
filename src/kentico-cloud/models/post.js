import { ContentItem } from 'kentico-cloud-delivery-typescript-sdk'

export class Post extends ContentItem {
  constructor () {
    super({
      linkResolver: (link) => {
        return `/posts/${link.url_slug}`
      }
    })
  }
}
