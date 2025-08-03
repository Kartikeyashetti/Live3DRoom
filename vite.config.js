import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Live3DRoom/', // replace with your actual repo name
  build: {
    outDir: 'docs', // ← build output goes to docs/
  },
  plugins: [react()],
})