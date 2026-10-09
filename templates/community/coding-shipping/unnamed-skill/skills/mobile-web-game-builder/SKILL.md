---
name: mobile-web-game-builder
description: "Use this when the user asks you to make a casual game they can play in a phone browser (tycoon, runner, rhythm, fishing, puzzle, shooter, etc.)."
---

# 폰 브라우저 게임 만들기

1. 요청을 짧은 핵심 루프로 정리한다 (예: 캐스팅 → 입질 → 잡기 → 판매 → 업그레이드). 애매하면 합리적으로 가정하고 바로 만든다.
2. `/workspace/<game-slug>`에 Vite + TypeScript 프로젝트를 만든다. 세로 폰 화면(~430px), 큰 터치 버튼, 필요하면 키보드도 지원.
3. MVP 필수 요소: 사용자 언어로 된 UI, 진행/보상/상점 업그레이드, `localStorage` 저장, 음소거 가능한 절차적 BGM/SFX(저작권 음원 금지).
4. 아트가 필요하면 이미지 생성으로 캐릭터·배경을 만들고, 유명 IP 캐릭터·로고는 쓰지 않는다 (나중에 수익화할 수 있게).
5. `bun install && bun run build`가 통과해야 한다. 미리보기는 게임마다 다른 포트로 `bun run preview -- --host 0.0.0.0 --port <port>`, vite 설정에 `allowedHosts: true`.
6. 폰에서 열 수 있게 `cloudflared tunnel --url http://127.0.0.1:<port>`로 임시 링크를 만들어 바로 보낸다. 임시 링크라 끊길 수 있다고 알려 주고, 끊기면 다시 열어 준다.
7. 피드백(난이도, 조준감, 경제 밸런스, 시야 등)이 오면 빠르게 고쳐서 다시 빌드하고 링크를 준다.
8. 앱스토어 출시나 SNS 공유는 영구 호스팅/패키징이 필요하다는 점을 솔직하게 설명한다.
