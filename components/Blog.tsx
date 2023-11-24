'use client'

import { groq } from 'next-sanity'
import useQuery from '@/hooks/useQuery'

type BlogProps = {
  slug: string
}

export default function Blog({ slug }: BlogProps) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `

  const [post] = useQuery<any>({}, query, { slug })

  return (
    <>
      <p>{post?.title}</p>
    </>
  )
}
