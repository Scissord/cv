import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    // host: '192.168.0.122',
    port: 5173,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components/lib',
      '@utils': '/src/utils/lib',
      '@hooks': '/src/hooks/lib',
      '@store': '/src/store/lib',
      '@api': '/src/api/lib',
      '@plugins': '/src/plugins/lib',
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
