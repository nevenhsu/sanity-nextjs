import { createClient } from 'next-sanity'
import { env } from '@/utils/env'

const { projectId, dataset, apiVersion } = env.sanity

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  perspective: 'published',
})
