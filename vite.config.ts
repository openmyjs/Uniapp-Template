import path from 'node:path'
import uni from '@dcloudio/vite-plugin-uni'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import { defineConfig, loadEnv } from 'vite'
import packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  console.log('mode', mode)
  const root = process.cwd()
  const env = loadEnv(mode, path.resolve(root, 'env'), '') // 读取 env/.env.* 到对象
  const UnoCSS = (await import('unocss/vite')).default
  return {
    envDir: './env', // 自定义env目录
    plugins: [
      UniPages({
        exclude: [
          '**/components/**/**.*',
          '**/modules/**/**.*',
          '**/module/**/**.*',
          '**/hooks/**/**.*',
          '**/css/**/**.*',
        ],
        routeBlockLang: 'json5', // 虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
        // homePage 通过 vue 文件的 route-block 的type="home"来设定
        // pages 目录为 src/pages，分包目录不能配置在pages目录下
        // subPackages: ['src/pages-sub'], // 是个数组，可以配置多个，但是不能为pages里面的目录
        dts: 'src/types/uni-pages.d.ts',
      }),
      UniLayouts(),
      UniPlatform(),
      UniManifest(),
      UnoCSS(),
      uni(),
    ],
    resolve: {
      alias: {
        '@': path.join(root, './src'),
        '@img': path.join(root, './src/static/images'),
      },
    },
    define: {
      // 注入版本号到全局，代码中可直接使用 __APP_VERSION__
      __APP_VERSION__: JSON.stringify(packageJson.version),
      __VITE_API_BASE__: JSON.stringify(env.VITE_API_BASE),
    },
  }
})
