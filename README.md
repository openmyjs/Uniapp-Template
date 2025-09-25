# OPENMYJS
## [Uniapp-Template]()

基于uniapp + cli + vue3 + ts + pinia + vite + eslint + prettier + UnoCSS

# vite 集成功能表格

| 包名                                 | 功能解释                                                                  | 文档地址 |
| ------------------------------------ | ------------------------------------------------------------------------- | -------- |
| @uni-helper/vite-plugin-uni-pages    | 为 Vite 下的 uni-app 项目提供约定式路由（文件路由）和页面配置自动化的插件 | ----     |
| @uni-helper/vite-plugin-uni-platform | 与 @uni-helper/vite-plugin-uni-pages 插件一起使用                         | ----     |
| @uni-helper/vite-plugin-uni-layouts  | 在uniapp下使用layout布局                                                  | ----     |

## @uni-helper/vite-plugin-uni-pages
为 Vite 下的 uni-app 项目提供约定式路由（文件路由）和页面配置自动化的插件
### 文档地址
[@uni-helper/vite-plugin-uni-pages](https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-pages)
### 功能解释
- 自动生成 pages.json
- 只需在 src/pages/ 目录下新建 .vue 文件，插件会自动将其注册为页面路由，无需手动维护 pages.json 文件。
- 支持在页面文件中定义路由元信息
- 通过 <route> 代码块，可以在 .vue 文件中直接配置页面的导航栏样式、下拉刷新、权限等元信息，这些配置会自动同步到 pages.json 中。
- 支持使用 TypeScript 编写 pages.json
- 允许通过 pages.config.ts 来管理全局页面配置，替代传统的 JSON 文件方式，提升可维护性和类型安全。
- 支持 layout 布局系统（需配合 @uni-helper/vite-plugin-uni-layouts）
- 可在页面中指定使用的布局组件，实现类似 Nuxt 的布局功能。
- 支持最新的 definePage 宏（实验性）
- 提供更灵活、类型安全的方式来定义页面元信息，替代传统的 <route> 标签方式。
- 总结：
  - 这个插件让你告别手动维护 pages.json，通过文件结构和页面内配置即可自动完成路由注册和页面配置，极大提升 uni-app 项目的开发效率和可维护性。
## @uni-helper/vite-plugin-uni-platform
 - 与 @uni-helper/vite-plugin-uni-pages 插件一起使用

## @uni-helper/vite-plugin-uni-layouts
### 文档地址
[@uni-helper/vite-plugin-uni-layouts](https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-layouts)
### 功能解释

为 **Vite 驱动的 uni-app 项目** 提供 **类 Nuxt 布局系统** 的插件，核心作用如下：

---

### ✅ 一句话总结
> 让你像用 Nuxt 一样，用 `src/layouts/*.vue` 文件统一管理页面布局，支持页面级切换布局、全局插槽、自动导入，告别每个页面重复写导航栏/TabBar。

---

### 🎯 核心功能

| 功能 | 说明 | 示例 |
|---|---|---|
| **自动注册布局** | `src/layouts/*.vue` 自动识别为可用布局 | `src/layouts/default.vue` → 默认布局 |
| **页面级切换布局** | 在 `.vue` 页面里用 `<route>` 块指定布局 | `<route>{"layout":"custom"}</route>` |
| **全局插槽机制** | 布局文件用 `<slot />` 渲染页面内容 | 同 Nuxt 的 `<Nuxt />` |
| **自动导入** | 无需手动 import 布局组件 | 插件自动处理 |
| **支持全局组件注入** | 可一次性在布局里引入 Toast、Loading 等，全 App 共享 | 常用于全局弹窗、导航栏 |

---

### 📁 典型目录结构

```
src
└─ layouts
   ├─ default.vue      // 默认布局
   └─ custom.vue       // 自定义布局
src
└─ pages
   └─ index.vue        // 通过 route 块指定布局
```

---

### 🧩 使用示例

1. 定义布局 `src/layouts/default.vue`
```vue
<template>
  <AppHeader />
  <slot />          <!-- 页面内容插槽 -->
  <AppFooter />
</template>
```

2. 页面指定布局 `src/pages/index.vue`
```vue
<route lang="json">
{ "layout": "default" }
</route>
```

---

### 🚀 适用场景

- 需要**统一导航栏/底部栏**风格
- 想**快速切换不同布局**（如登录页无导航栏、首页有 TabBar）
- 想**全局注入 Toast、Loading、全局弹窗**等组件，避免每个页面重复引入
- 喜欢 Nuxt 的 layouts 体验，想在 uni-app 里复刻

---


## @uni-helper/vite-plugin-uni-manifest

`@uni-helper/vite-plugin-uni-manifest` 是 **用 TypeScript 编写和管理 uni-app 项目 manifest.json 配置** 的 Vite 插件。

---

### ✅ 一句话总结
> 让你用 `manifest.config.ts` 替代手写 `manifest.json`，支持类型提示、多环境配置，并自动生成最终的 `manifest.json` 文件。

---

### 🎯 核心功能

| 功能 | 说明 |
|---|---|
| **TypeScript 编写配置** | 用 `manifest.config.ts` 写配置，告别 JSON 手写，支持类型提示和注释 |
| **自动生成 manifest.json** | 插件会在构建时自动生成 `manifest.json`，**不要手动修改** |
| **多环境支持** | 可根据环境变量（如 dev/prod）动态生成不同配置 |
| **平台级配置支持** | 支持 `mp-weixin`、`app-plus`、`h5` 等平台差异化配置 |
| **与 Vite 集成** | 作为 Vite 插件使用，配置简单，支持热更新 |

---

### 📦 使用方法

#### 1. 安装
```bash
pnpm add -D @uni-helper/vite-plugin-uni-manifest
```

#### 2. 配置 `vite.config.ts`
```ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'

export default defineConfig({
  plugins: [
    UniManifest(), // 必须在 Uni() 之前
    Uni()
  ]
})
```

#### 3. 创建 `manifest.config.ts`
```ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  name: '我的小程序',
  appid: '__UNI__XXXXXXX',
  description: '基于 uni-app 的小程序',
  'mp-weixin': {
    appid: 'wx1234567890',
    optimization: {
      subPackages: true
    }
  }
})
```

---

### 🧠 注意事项
- `manifest.json` 是自动生成的，**不要手动修改**，否则会被覆盖。
- 所有配置请写在 `manifest.config.ts` 中。
- 支持 `.ts/.js/.json` 等多种格式，推荐使用 TypeScript。

---

### 📚 示例场景
- 动态配置小程序 `appid` 和 `权限设置`
- 控制是否开启分包优化 `subPackages`
- 设置上传时忽略某些文件夹（如 `static/img`）

---

### 📌 总结
这个插件让你**像写代码一样写配置**，更安全、可维护、可扩展，是 uni-app + Vite 项目的推荐实践之一。