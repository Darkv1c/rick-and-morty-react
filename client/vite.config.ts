import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'styles': path.resolve(__dirname, './src/assets/styles'),
      'images': path.resolve(__dirname, './src/assets/images'),
      'store': path.resolve(__dirname, './src/store/index.ts'),
      'actions': path.resolve(__dirname, './src/store/actions')
    }
  }
})
