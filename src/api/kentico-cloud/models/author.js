import { ContentItem } from 'kentico-cloud-delivery-typescript-sdk'

export class Author extends ContentItem {
  constructor () {
    super({
      linkResolver: (link) => {
        // eslint-disable-next-line
        return `/authors/${link.url_slug}`
      }
    })
  }
}
