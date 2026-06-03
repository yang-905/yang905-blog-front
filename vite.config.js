import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'  // 引入 Vue 2 插件
import Inspector from 'vite-plugin-vue-inspector'
import tailwindcss from '@tailwindcss/vite'   // 引入 v4 插件

export default defineConfig({
  plugins: [
    vue(), 
    Inspector({ vue: 2 }),
    tailwindcss()
  ],  // 注册插件
  resolve: {
    alias: {
      '@': '/src',  // 配置路径别名（可选）
    }
  }
})