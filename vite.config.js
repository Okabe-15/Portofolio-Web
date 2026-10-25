import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          flow: ['@xyflow/react'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
