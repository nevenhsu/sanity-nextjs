import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { env } from '@/utils/env'
import { schemaTypes } from '@/schemas'

const { projectId, dataset } = env.sanity

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from

  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
