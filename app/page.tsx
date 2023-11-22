import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'
import DocumentsCount, { query } from '@/components/DocumentsCount'
import PreviewDocumentsCount from '@/components/PreviewDocumentsCount'
import { sanityFetch } from '@/utils/sanity/fetch'
export default async function Home() {
  const data = await sanityFetch<number>({ query, tags: ['post'] })

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewDocumentsCount}
    >
      <DocumentsCount data={data} />
    </LiveQuery>
  )
}
