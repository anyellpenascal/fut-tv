import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
      rollupOptions: {
        external: [
          /^src\/assets\/iconos\/.*\.png$/,
          /^src\/assets\/image\/.*\.png$/,
          /^src\/assets\/avatares\/.*\.png$/,
          /^src\/assets\/Avatares\/.*\.svg$/,
          'src/assets/Avatares/moha.png'
        ],
      },
    },
  plugins: [vue()],
  resolve: {
    alias: {
      
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
