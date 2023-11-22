/* eslint-disable no-process-env */
import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'
import { env } from '@/utils/env'

loadEnvConfig(__dirname, env.isDev, { info: () => null, error: console.error })

const { projectId, dataset } = env.sanity

export default defineCliConfig({ api: { projectId, dataset } })
