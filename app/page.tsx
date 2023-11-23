'use client'

import { useLiveQuery } from '@sanity/preview-kit'
import { groq } from 'next-sanity'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default function Home() {
  const [data] = useLiveQuery<any[]>([], query)

  return (
    <ul>
      {data.map(el => (
        <li key={el._id}>{el.title}</li>
      ))}
    </ul>
  )
}
