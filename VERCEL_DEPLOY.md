# Vercel 배포 가이드

## 단계별 배포 방법

### 1단계: GitHub에 코드 Push (아직 안 했다면)

GitHub Desktop을 사용하는 경우:
1. GitHub Desktop 열기
2. 변경사항 확인
3. 왼쪽 하단에 "Summary" 입력 (예: "Add sign up page and deployment setup")
4. "Commit to main" 클릭
5. 상단의 "Push origin" 버튼 클릭

또는 터미널에서:
```bash
git add .
git commit -m "Add sign up page and deployment setup"
git push origin main
```

### 2단계: Vercel에 배포

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속

2. **로그인**
   - "Sign Up" 또는 "Log In" 클릭
   - "Continue with GitHub" 선택하여 GitHub 계정으로 로그인

3. **새 프로젝트 생성**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - 또는 "New Project" 버튼 클릭

4. **GitHub 저장소 선택**
   - "Import Git Repository" 섹션에서
   - `my-first-github-desktop` 저장소 찾기
   - "Import" 클릭

5. **프로젝트 설정 (자동 감지됨)**
   - Vercel이 자동으로 Vite 프로젝트를 감지합니다
   - Framework Preset: Vite (자동 선택됨)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)
   - Root Directory: `./` (기본값)

6. **환경 변수 (필요 없음)**
   - 이 프로젝트는 환경 변수가 필요 없으므로 그대로 진행

7. **배포 시작**
   - "Deploy" 버튼 클릭

8. **배포 완료 대기**
   - 약 1-2분 정도 소요
   - 배포가 완료되면 성공 메시지와 함께 URL이 표시됩니다
   - 예: `https://my-first-github-desktop.vercel.app`

### 3단계: 배포 확인

- 제공된 URL을 클릭하여 사이트 확인
- Sign Up 페이지가 정상적으로 표시되는지 확인

## 자동 재배포

이제부터는:
- GitHub에 코드를 push할 때마다
- Vercel이 자동으로 감지하여
- 새로운 배포를 시작합니다!

## 커스텀 도메인 (선택사항)

나중에 원하는 도메인을 추가할 수 있습니다:
1. Vercel 프로젝트 설정 → Domains
2. 원하는 도메인 입력
3. DNS 설정 안내에 따라 설정

## 문제 해결

### 배포가 실패하면:
1. Vercel 대시보드의 "Deployments" 탭 확인
2. 실패한 배포 클릭하여 에러 로그 확인
3. 일반적인 원인:
   - `npm install` 실패 (의존성 문제)
   - 빌드 에러
   - 환경 변수 누락 (이 프로젝트는 해당 없음)

### 사이트가 제대로 안 보이면:
1. 브라우저 캐시 삭제 후 재시도
2. Vercel 대시보드에서 배포 상태 확인
3. 콘솔에서 에러 메시지 확인


