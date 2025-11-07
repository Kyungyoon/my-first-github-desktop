import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages를 위한 base 경로 설정
// 저장소 이름이 'my-first-github-desktop'인 경우
const base = process.env.NODE_ENV === 'production' ? '/my-first-github-desktop/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})

