import { DefaultDocumentNodeResolver } from 'sanity/desk'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'sanity'
import { env } from '@/utils/env'

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  const url = new URL('/api/draft', env.baseUrl)
  url.search = `slug=${doc?.slug?.current}`
  return url.href
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Only show preview pane on 'post' schema type documents
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
            defaultSize: `mobile`, // default `desktop`
            reload: {
              button: true, // default `undefined`
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
