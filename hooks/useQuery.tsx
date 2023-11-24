'use client'

import { useState, useEffect } from 'react'
import { useLiveQuery } from '@sanity/preview-kit'
import { useAppContext } from '@/stores/AppContext'
import { client } from '@/utils/sanity/client'

type Params<QueryResult> = Parameters<typeof useLiveQuery<QueryResult>>

export default function useQuery<QueryResult>(
  ...params: Params<QueryResult>
): [QueryResult, boolean] {
  const [initialData, query, queryParams = {}] = params

  const { isPreview } = useAppContext().state
  // client state
  const [fetchResult, setFetchResult] = useState<QueryResult>(initialData)
  const [fetchLoading, setFetchLoading] = useState(false)

  const liveResult = useLiveQuery<QueryResult>(...params)

  useEffect(() => {
    if (!isPreview) {
      setFetchLoading(true)
      client
        .fetch<QueryResult>(query, queryParams)
        .then(res => setFetchResult(res))
        .catch(err => console.error(err))
        .finally(() => {
          setFetchLoading(false)
        })
    }
  }, [isPreview, query, queryParams])

  return isPreview ? liveResult : [fetchResult, fetchLoading]
}
