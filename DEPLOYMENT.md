# 배포 가이드 (Deployment Guide)

이 프로젝트를 배포하는 여러 방법을 안내합니다.

## 방법 1: Vercel (추천 - 가장 쉬움) ⭐

Vercel은 React 앱 배포에 최적화되어 있고, 무료이며 매우 간단합니다.

### 단계:

1. **Vercel 계정 만들기**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "New Project" 클릭
   - GitHub 저장소 선택 (`my-first-github-desktop`)
   - 자동으로 설정 감지됨 (Vite)
   - "Deploy" 클릭

3. **완료!**
   - 몇 분 후 자동으로 배포 완료
   - URL이 제공됨 (예: `https://my-first-github-desktop.vercel.app`)

### 자동 배포
- GitHub에 push할 때마다 자동으로 재배포됩니다!

---

## 방법 2: Netlify

Netlify도 무료이고 사용하기 쉽습니다.

### 단계:

1. **Netlify 계정 만들기**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - "Deploy site" 클릭

3. **완료!**
   - 배포 완료 후 URL 제공

---

## 방법 3: GitHub Pages

GitHub 저장소를 사용 중이라면 GitHub Pages도 좋은 선택입니다.

### 단계:

1. **vite.config.js 설정 확인**
   - 이미 `base: '/my-first-github-desktop/'` 설정되어 있음

2. **GitHub Actions 설정**
   - `.github/workflows/deploy.yml` 파일이 자동 생성됨

3. **GitHub 저장소 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택

4. **코드 푸시**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push
   ```

5. **배포 확인**
   - Actions 탭에서 배포 진행 상황 확인
   - 완료 후: `https://[사용자명].github.io/my-first-github-desktop/` 접속

---

## 방법 4: 수동 빌드 및 배포

### 로컬에서 빌드:

```bash
# 의존성 설치
npm install

# 프로덕션 빌드
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다. 이 폴더의 내용을 원하는 호스팅 서비스에 업로드하면 됩니다.

### 빌드 미리보기:

```bash
npm run preview
```

---

## 추천 순서

1. **Vercel** - 가장 빠르고 쉬움, 자동 배포
2. **Netlify** - Vercel과 유사, 좋은 대안
3. **GitHub Pages** - 이미 GitHub 사용 중이라면 편리

---

## 문제 해결

### 빌드 에러가 발생하면:
- `npm install` 다시 실행
- `node_modules` 삭제 후 재설치
- `package.json`의 의존성 버전 확인

### 배포 후 페이지가 안 보이면:
- 빌드가 완료되었는지 확인
- 브라우저 캐시 삭제 후 재시도
- 콘솔에서 에러 메시지 확인


