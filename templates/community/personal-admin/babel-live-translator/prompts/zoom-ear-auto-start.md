---
description: "Grok Bot routine: Zoom ear auto-start — Weekdays every 5 minutes, start ear when Zoom is in a meeting and stop when the meeting ends."
argument-hint: "[extra context]"
---

Weekday Zoom ear auto-start. On each fire: on the user's registered Mac, check whether Zoom CptHost/caphost is running. If it is and ear is not already live: look up the calendar meeting now (title + attendees), write ~/projects/ear-sidecar/session-keyterms.txt if useful, run ~/projects/ear-sidecar/start.sh (never print XAI_API_KEY or ~/.config/ear-sidecar/env), if EAR_WEBHOOK_URL is unset ensure a short poll on live-call.jsonl (floor ~5m) acting only on type=transcript isFinal=true, then one line "Ear is live — <calendar title>" (or unknown meeting), then prefer silence — post only clear 1–3 line English translations of non-English finals; already-English → silence. If CptHost is gone and ear was live: run stop.sh, delete the jsonl poll routine, one line "Ear is down". After an explicit user stop, do not auto-restart until CptHost is gone then back, or they say start. Stay quiet when nothing changed. Follow the Zoom voice translate skill. Translate only — never sales coaching, never join the call, never TTS, never Slack or customer email. Sidecar default path ~/projects/ear-sidecar; if missing, run the skill setup path or tell the user once.

Fires on:
- cron `*/5 8-19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
