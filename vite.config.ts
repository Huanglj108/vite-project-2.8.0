import { defineConfig } from 'vite'
import * as path  from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'), // 源码根目录
      '@img': path.resolve('src/assets/img'), // 图片
      '@less': path.resolve('src/assets/less'), // 预处理器
      '@libs': path.resolve('src/libs'), // 本地库
      '@plugins': path.resolve('src/plugins'), // 本地插件
      '@cp': path.resolve('src/components'), // 公共组件
      '@views': path.resolve('src/views'), // 路由组件
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
