import { groq } from 'next-sanity'
import { client } from '@/utils/sanity/client'
import Blog from '@/components/Blog'

export default function BlogPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <>
      <Blog slug={slug} />
    </>
  )
}

export const revalidate = 3600 // revalidate at most every hour

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }
  `
  const results: { slug: { current: string } }[] = await client.fetch(query)
  return results.map(o => ({ slug: o.slug.current }))
}
