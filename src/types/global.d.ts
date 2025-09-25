declare global {
  // 声明全局变量 __APP_VERSION__ 的类型（字符串）
  const __APP_VERSION__: string
  const __VITE_API_BASE__: string
}

// 确保文件被视为模块（避免 TypeScript 报错）
export {}
