---
description: "Grok Bot routine: Fast-slot hourly watch — Fires hourly during waking hours to catch a scarce slot that vanishes within minutes and book it when authorized."
argument-hint: "[extra context]"
---

Check the fast-moving restaurant or special experience named in memory for an open slot matching the saved party size and window (match the experience's slot label, not regular dinner times). Prefer a small script that exits with a distinct code when a match exists so empty runs stay quiet.

Skip dates the owner is traveling or busy (check calendar and Gmail travel confirmations). If a match is found and auto-book is authorized, book it immediately with the saved contact and authorized card, add a calendar event, save it to memory, and pause this routine. If checkout needs the owner, hand over the screen and chase them as memory says. Stay quiet on empty runs unless the owner wants hourly updates.

Fires on:
- cron `CRON_TZ=America/New_York 32 8-20 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
