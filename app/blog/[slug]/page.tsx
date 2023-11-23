'use client'

import { groq } from 'next-sanity'
import { useLiveQuery } from '@sanity/preview-kit'

export default function Blog({ params: { slug } }: { params: { slug: string } }) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `

  const [post] = useLiveQuery<any>({}, query, { slug })

  return (
    <>
      <p>{post?.title}</p>
    </>
  )
}
