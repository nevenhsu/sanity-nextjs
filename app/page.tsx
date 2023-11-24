'use client'

import useQuery from '@/hooks/useQuery'
import { groq } from 'next-sanity'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default function Home() {
  const [data] = useQuery<any[]>([], query)

  return (
    <ul>
      {data.map(el => (
        <li key={el._id}>{el.title}</li>
      ))}
    </ul>
  )
}
