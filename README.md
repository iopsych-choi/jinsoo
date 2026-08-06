# Jinsoo Choi — 연구자 홈페이지 (GitHub Pages 배포용)

사이트 자체는 영어(lang="en")로 작성되어 있습니다. 이 README는 편집을 위한 참고 문서라 한국어로 남겨둡니다.

## 폴더 구조
```
site/
├── index.html             # About 페이지
├── research.html          # 논문 목록 (연도/토픽 필터)
├── people.html             # 멘토·커미티·동료 소개
├── resources.html          # 측정 도구(Measures)
├── teaching.html            # 강의 이력 및 학생 평가
├── css/style.css            # 전체 디자인
├── js/research-data.js      # 논문 데이터 (PUBLICATIONS / WORKING_PAPERS)
├── js/research.js           # 필터링 로직 (수정 불필요)
├── images/                  # 사진
└── files/CV_Jinsoo_Choi.pdf # CV
```

## GitHub Pages로 무료 배포하는 방법

1. github.com에서 계정 생성 (이미 있으면 생략)
2. 새 저장소(Repository) 생성
   - 저장소 이름을 `본인아이디.github.io` 로 하면 `https://본인아이디.github.io` 로 바로 접속 가능
   - 다른 이름으로 만들면 `https://본인아이디.github.io/저장소이름` 형태로 접속
3. 이 `site` 폴더 안의 파일들을 저장소에 업로드
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그해서 올려도 되고,
   - git 명령어를 쓸 줄 알면 `git add . && git commit -m "init" && git push` 로 올려도 됩니다
4. 저장소의 Settings → Pages 메뉴로 이동
5. Branch를 `main` (또는 `master`), 폴더를 `/root`로 선택 후 저장
6. 1~2분 후 `https://본인아이디.github.io` 에서 사이트 확인 가능

## 현재 상태 (진행 상황)

**완료됨**
- 전 페이지 콘텐츠: About, Research(실제 논문 8편 + Working Papers), People, Teaching, Resources
- 메인 프로필 사진 (`images/profile-jinsoo.jpg`)
- CV PDF (`files/CV_Jinsoo_Choi.pdf`)
- People 페이지 스냅샷 2장 (Purdue 캠퍼스, SIOP 2026)
- Postdoc PI(Louis Tay)·PhD 지도교수(Bo Zhang) 소개 문단 — 초안이니 원하시는 대로 수정하세요

**아직 남은 것**
- Dissertation Committee 사진 (Fritz Drasgow, Susu Zhang, Leo Alexander III) — 보내주신 파일이 HEIC라 처리가 안 됐습니다. JPEG/PNG로 변환해서 `images/` 폴더에 넣고, `people.html`의 committee `<div class="grid">` 안 `img src`를 채워주세요.
- Louis Tay / Bo Zhang 개별 헤드샷 (현재 실루엣 placeholder)

## 내용 수정하는 법

- 논문 목록은 `js/research-data.js`의 `PUBLICATIONS`(연도 확정) / `WORKING_PAPERS`(accepted·in press·under
  review·in preparation) 배열을 수정하면 research.html에 자동 반영되고, 연도/토픽 필터에도 자동으로 나타납니다.
  제목이 아직 없는 under-review 논문은 `[Title TBD]`로 표시해뒀습니다.
- 사진은 `images/` 폴더에 넣고, 해당 html 파일의 `<img src="images/...">` 경로를 맞춰주면 됩니다.
- CV를 교체하려면 `files/CV_Jinsoo_Choi.pdf`를 새 파일로 덮어쓰면 됩니다 (파일명 동일하게 유지).
- Google Scholar: https://scholar.google.com/citations?user=YvyYw9AAAAAJ (index.html에 이미 링크됨)
