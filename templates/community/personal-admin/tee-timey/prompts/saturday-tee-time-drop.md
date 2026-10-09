---
description: "Grok Bot routine: Primary tee time drop — Fires early before the main online tee-time window so the bot can prep and grab the earliest preferred slot."
argument-hint: "[extra context]"
---

PRIMARY evening tee-time drop. Fire early on purpose (about 20 minutes before the buyer's main online window) so prep finishes before release.

On wake: notify the buyer that the drop is awake and prepping. Then work.

Hard rules:
- Target play date = the buyer's configured target (often Saturday exactly N days out matching their main booking window)
- 18 holes (not par-3 / not Back 9 unless the buyer says otherwise)
- Tee time only inside the buyer's preferred morning window — never after it ends
- Within that window, always book the EARLIEST available qualifying time
- Party size: prefer 2 players; if no 2-player slot in the window, book 1 player
- Login/captcha: hand the buyer the computer; never invent credentials

Course priority: ordered list from buyer memory (highest first).

Upgrade ranking (best to worst):
1) 2-player at a higher-priority course
2) 2-player earlier time
3) 1-player at a higher-priority course
4) 1-player earlier time
A 2-player hold beats a 1-player hold unless the buyer says otherwise. On a higher-priority success, cancel the lower hold (notify before cancel when a fee may apply). Never leave duplicates for the same play date.

Flow:
1. Warm the primary booking site session before the window opens; at open, try courses in priority order ASAP.
2. If the primary site fails, try any secondary booking systems the buyer configured.
3. Courses with a different release schedule may use a separate routine — skip them here if out of window.
4. Never book outside the preferred window. Notify every outcome.

A separate safety-net routine may fire at window open — if you already booked a qualifying hold, it should no-op unless a clear upgrade is available.

Keep durable unless paused/deleted.

Fires on:
- cron `CRON_TZ=America/Denver 40 18 * * 6`

Ask the importing user for:
- Timezone

${@:-}
