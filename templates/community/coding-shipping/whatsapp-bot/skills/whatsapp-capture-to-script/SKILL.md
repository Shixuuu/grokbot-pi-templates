---
name: whatsapp-capture-to-script
description: "Use when reverse-engineering WhatsApp Web into scripts, QR-linking the session, refreshing /home/box/whatsapp-auth, or preparing an exportable WhatsApp-Bot / GitHub share — never paste session secrets into chat."
---

# WhatsApp capture → script

One expensive browser run (QR once) → durable session jar → capture a named task’s network → script under `/workspace/whatsapp-scripts/<slug>/` → later runs replay with session auth. Re-QR only on auth death.

## Auth
Canonical jar (box-local, never export): `/home/box/whatsapp-auth/auth.env`
Personal overrides: `/home/box/whatsapp-auth/personal.env`
Pointers: `/workspace/whatsapp-scripts/_auth/AUTH_PATH.txt` (+ optional `PERSONAL_PATH.txt`)
Loader: `/workspace/whatsapp-scripts/_lib/auth.py`

### First-time / dead session
1. Open `https://web.whatsapp.com/` with browserUse (this bot’s Chrome).
2. Surface QR / `request_box_help` **immediately** — do not ask whether the owner can scan. User scans on the desktop.
3. When the chat list is visible, export session into `auth.env` (mode 0600). Prefer helpers under `/home/box/whatsapp-auth/`.
4. Run `auth-check` before failing tasks. Re-export after re-link.
5. Never paste Cookie / tokens into chat, persona, skill, or GitHub.

## SoT per slug (finish one)
1. **http_replay** (preferred when real): only recorded URLs/methods/bodies. No invented endpoints.
2. **headless_live / opaque_ws**: if traffic is WS/protobuf and no stable HTTP surface exists, document `opaque_ws` in the slug README and ship browserUse or headless CDP Live until HTTP capture exists. Do not fake REST.

## Build discipline
Serialize one slug or wave item at a time. No parallel all-waves / multi-stuck browser runs. No backlog drain unprompted.

## Parked
If capture, confirm, or QR handoff is parked with no reply: remind once after ~24h, then stop.

## Mutating
One-line confirm. No mass send / spam tooling.

## Public share
Scrubbed persona + this skill + script shapes from `grok_bots/whatsapp-bot/`. Never `auth.env`, `personal.env`, HARs with tokens, or phone numbers from live chats.

Pack: https://github.com/alexhawat/bots-agents-skills/tree/main/grok_bots/whatsapp-bot
Template: https://x.ai/bot/t-Axu4DmT9x2DEPa1eNW1
