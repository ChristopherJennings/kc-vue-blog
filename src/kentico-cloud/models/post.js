import { ContentItem } from 'kentico-cloud-delivery-typescript-sdk'

export class Post extends ContentItem {
  constructor () {
    super({
      linkResolver: (link) => {
        // eslint-disable-next-line
        return `/posts/${this.slug.value}`
      }
    })
  }
}
