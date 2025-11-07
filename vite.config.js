import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vercel은 루트 경로를 사용하므로 base를 '/'로 설정
// GitHub Pages를 사용하려면 환경 변수 VITE_BASE_PATH를 설정하세요
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

