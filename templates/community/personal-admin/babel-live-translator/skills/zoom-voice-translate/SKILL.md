---
name: zoom-voice-translate
description: "Use when the user wants live Zoom translation via Mac sidecar + Grok Voice STT (non-English → English in chat). Not for sales coaching."
---

Use when the user wants live Zoom translation from a Mac sidecar (Grok Voice STT → chat text). Not for sales coaching.

## What it does
Mac sidecar captures Zoom loopback → Grok Voice STT (`wss://api.x.ai/v1/stt`) → `live-call.jsonl`. Bot posts **translations** in chat only. Never joins the call. Never realtime TTS. Never Slack or customer email.

Scripts live in the skill's `ear-sidecar/` folder. Default install on the user's Mac: `~/projects/ear-sidecar/`.

## Session
- Start: user says start / live / tracking / whisper on / ear on / ear up, or auto-start when Zoom `CptHost` is running.
- Stop: user says stop, or `CptHost` is gone (meeting ended).
- After explicit stop: do not auto-restart until `CptHost` is gone then back, or they say start.

## On start
1. Look up calendar for the meeting now (title + attendees). Write `~/projects/ear-sidecar/session-keyterms.txt` if useful (names, product nouns).
2. Run `~/projects/ear-sidecar/start.sh`. Never print `XAI_API_KEY` or the env file.
3. If `EAR_WEBHOOK_URL` unset, create a short poll routine on `live-call.jsonl` (floor ~5m). Act only on `type=transcript` and `isFinal=true`.
4. One line: `Ear is live — <calendar meeting title>` (or attendees/account; or `unknown meeting`).
5. Stay quiet until a translation helps.

## Translate style
- Default target: English.
- Non-English finals → 1–3 line clear English translation.
- Already English → prefer silence (no play-by-play, no “still on”).
- Never invent facts, prices, or commitments.
- Do not coach sales or product SKUs unless the user asks for a different mode.

## On stop
1. `~/projects/ear-sidecar/stop.sh`
2. Delete the jsonl poll routine
3. One line: `Ear is down`

## Guardrails
- Text in this chat only. Never speak on the call.
- Never cat/print the sidecar env/key file.
- Prefer silence.
