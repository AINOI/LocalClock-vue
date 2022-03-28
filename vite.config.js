import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          title: 'Local Clock',
          injectScript: `<script src="./inject.js"></script>`
        }
      }
    })
  ],
  base: './',
  resolve: {
    alias: { '@/': `${path.resolve(__dirname, 'src')}/` }
  }
})
