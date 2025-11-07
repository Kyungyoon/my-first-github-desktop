# Sign Up Page

A modern, responsive sign up page built with React and Vite.

## Features

- Beautiful, modern UI with gradient background
- Form validation
- Responsive design (mobile-friendly)
- Smooth animations
- Accessible form inputs

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### 배포 전 미리보기 (Production Preview)

배포하기 전에 프로덕션 빌드를 로컬에서 미리 확인할 수 있습니다:

```bash
# 1. 프로덕션 빌드 생성
npm run build

# 2. 빌드된 결과물 미리보기
npm run preview
```

이렇게 하면 `http://localhost:4173` (또는 다른 포트)에서 배포될 사이트와 동일한 버전을 확인할 수 있습니다.

## 배포하기 (Deployment)

프로젝트를 배포하는 방법은 [DEPLOYMENT.md](./DEPLOYMENT.md) 파일을 참고하세요.

### 빠른 배포 방법:

1. **Vercel (추천)**: https://vercel.com 에서 GitHub 저장소 연결
2. **Netlify**: https://netlify.com 에서 GitHub 저장소 연결
3. **GitHub Pages**: 저장소 Settings → Pages에서 GitHub Actions 선택

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── SignUp.jsx
│   │   └── SignUp.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── DEPLOYMENT.md
```

