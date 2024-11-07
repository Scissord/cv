import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components/lib',
      '@utils': '/src/utils/lib',
      '@hooks': '/src/hooks/lib',
      '@store': '/src/store/lib',
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
