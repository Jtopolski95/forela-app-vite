import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/forela-app-vite/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    host: true,
  }
})
