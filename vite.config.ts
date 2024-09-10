import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 144, //结果为：设计稿元素尺寸/144，比如元素宽144px,最终页面会换算成 1rem
          minPixelValue: 1,
          propList: ['*', '!font-size'], // 被转换的属性列表
          unitPrecision: 3, //保留rem小数点多少位
          selectorBlackList: ['xy-loading', 'xy-ani', 'el-input', 'el-step', 'no-'] //则是一个对css选择器进行过滤的数组，比如你设置为['el-']，那所有el-类名里面有关px的样式将不被转换，这里也支持正则写法。
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  }
})
