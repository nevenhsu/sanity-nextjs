import { client } from '@/utils/sanity/client'

type Post = {
  _id: string
  title?: string
  slug?: {
    current: string
  }
}

export default async function Blog() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`)

  return (
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <a href={post?.slug?.current}>{post?.title}</a>
        </li>
      ))}
    </ul>
  )
}
