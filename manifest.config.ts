import path from 'node:path'
import process from 'node:process'
// manifest.config.ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { loadEnv } from 'vite'
import base from './src/manifest.json'
import packageJson from './package.json'
// 获取环境变量的范例
const env = loadEnv(process.env.NODE_ENV!, path.resolve(process.cwd(), 'env'))

const {VITE_APP_TITLE,} = env

export default defineManifestConfig({
  ...base,
  name: VITE_APP_TITLE,
  versionName: packageJson.version,
  versionCode: Number(packageJson.version.replace(/\./g,''))
})
