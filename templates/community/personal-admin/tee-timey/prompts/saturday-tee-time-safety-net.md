---
description: "Grok Bot routine: Primary tee time safety net — Fires at the main tee-time release time as a backup if the early primary drop missed."
argument-hint: "[extra context]"
---

SAFETY NET for the primary tee-time drop. Fire at the buyer's main online window open time.

Purpose: if the primary drop did not wake or did not finish a qualifying booking, do the grab now. Do NOT duplicate work.

Hard rules if booking: 18 holes, preferred morning window ONLY, earliest time in that window, never after it ends. Prefer 2 players; if no 2-player slot, book 1. Course order from buyer memory. Upgrade ranking: 2-player higher-priority beats 2-player lower; any 2-player beats any 1-player; then earlier time. Cancel/upgrade lower placeholders. Login/captcha handoff.

On wake:
1. Notify the buyer briefly that the safety net fired.
2. Check reservations for the target play date. If a qualifying booking already exists, notify “already covered” and stop unless a clear upgrade appeared.
3. If nothing qualifying is booked, run the full cascade ASAP (2 then 1).
4. Notify success or exact failure. Never outside the preferred window.

Keep durable unless paused/deleted.

Fires on:
- cron `CRON_TZ=America/Denver 0 19 * * 6`

Ask the importing user for:
- Timezone

${@:-}
