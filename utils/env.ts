export const env = {
  // private
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',

  // public
  colorScheme: process.env.NEXT_PUBLIC_COLOR_SCHEME,

  sanity: {
    // private
    token: process.env.SANITY_API_READ_TOKEN,
    // public
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  },
}
