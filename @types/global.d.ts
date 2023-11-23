import type { Mongoose } from 'mongoose'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Private
      NODE_ENV: string
      SANITY_API_READ_TOKEN: string

      // Public
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_COLOR_SCHEME: 'dark' | 'light'
      NEXT_PUBLIC_SANITY_PROJECT_ID: string
      NEXT_PUBLIC_SANITY_DATASET: string
      NEXT_PUBLIC_SANITY_API_VERSION: string
    }
  }
}
