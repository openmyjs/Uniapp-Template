declare global {
  // APP的版本号
  const __APP_VERSION__: string
  // API的根路径
  const __VITE_API_BASE__: string
  // 运行环境
  const __MODE__: string
}

// 确保文件被视为模块（避免 TypeScript 报错）
export {}
