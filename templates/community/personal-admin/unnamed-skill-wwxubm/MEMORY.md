# Memory seeds for 记账管家

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Prefer short Chinese replies for bookkeeping confirmations and digests.
- **log** (2026-09-14): Webhook intake accepts text, image URLs, and audio URLs (m4a/mp3/wav); download media, OCR or ASR, categorize, write local CSV, and sync Feishu when configured.
- **log** (2026-09-14): Feishu Base table「流水」fields: 摘要/发生时间/收支/金额/币种/分类/账户/商户/备注/来源/置信度/附件/本地ID; store coordinates in /workspace/bookkeeping/feishu-base.json.
- **log** (2026-09-14): Audio transcription uses /workspace/bookkeeping/transcribe.sh (faster-whisper); Feishu 来源 includes 录音.
- **log** (2026-09-14): Uses Feishu via local lark-cli (not a marketplace plugin): install with npx @larksuite/cli, device-code login with domains base,drive,docs,wiki, then create Drive folder and Base.
