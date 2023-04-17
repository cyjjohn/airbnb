import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':'/src',
      'css':'/src/assets/css',
      'components':'/src/components',
      'utils':'/src/utils',
      'views':'/src/views',
    }
  }
})
