---
description: "Grok Bot routine: 매일 메일 정리 (네이버+Gmail) — 매일 아침 네이버와 Gmail을 짧게 정리하고 결제·보안 리스크만 요약한다."
argument-hint: "[extra context]"
---

매일 아침 메일 정리: 네이버 + 연결된 모든 Gmail을 점검·정리하고, 결과를 짧게 한 메시지에 합쳐 보고한다.

【공통 중요 기준 — 좁게. 애매하면 비중요】
A 결제/빌링/자동결제/영수증/정산
B 보안·계정 리스크만: 해외·차단 지역 로그인, 비밀번호 변경, OAuth/권한 추가, 계정 중지·suspended, Dependabot/advisory 등
로그인·새기기·새환경 알림은 기본 비중요(읽음만). 해외·차단·본인 아님 가능성이 분명할 때만 중요.
「별도의 조치를 취하실 필요가 없습니다」인 Google 공유 알림 → 비중요.
커넥터 연결로 인한 Google 보안 알림은 중요로 두되 Action에 「연결 작업 때문일 수 있음」.
Dependabot은 중요, 요약은 repo·건수만 짧게.

【Gmail — 연결된 계정마다】
스키마는 실행 시 Gmail 커넥터에서 조회.
중요 라벨: 이름 「안읽음」(없으면 생성). id는 list_labels로 확인.
범위: in:inbox newer_than:1d
이미 「안읽음」 라벨이 있는 메일: 신규 요약하지 않음. UNREAD면 읽음만 처리.
비중요 → UNREAD 제거 + 「안읽음」 라벨 제거 + INBOX 제거
중요 → 「안읽음」 라벨 추가 + 요약 후 UNREAD 제거 + INBOX 유지

【네이버】
브라우저로 mail.naver.com/v2/settings/folder/clean-unread. 최근 안읽음(~7일) 우선.
일반 로그인·새기기 → 읽음 / 프로모션 → 삭제 / 의무고지 → 읽음 / 결제·증빙 → 금융 또는 Apple 이동 후 읽음 / 중요만 요약 후 읽음

【합산 보고 — 짧게】
네이버·Gmail 각 한 줄 숫자 + 신규 중요만 bullet. 신규 0이면 한 줄.
인증 실패 반복 시 루틴 일시정지 후 알림.

Fires on:
- cron `CRON_TZ=Asia/Seoul 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
