---
description: "Grok Bot routine: Daily AI moves brief — Fires each morning to send a friendly roundup of what moved in AI the previous day."
argument-hint: "[extra context]"
---

Send the user one warm, conversational notification about what moved in AI the previous calendar day in their timezone. Fetch https://api.hackobar.com/api/feed with sort=top, window=today, limit about 10; no persona filter. Keep stories published in the previous calendar day, topping up with window=week if the day is thin. Voice: friendly, plain-spoken, contractions, short natural sentences. Start with a short friendly opener, then about 5 stories, each in a few plain sentences with the sourceUrl as a markdown link. Summaries only: no founder or investor angles or commentary. Never invent facts; always cite the source link. If the feed is empty or the API fails, say so briefly and casually. Fill-in: set the schedule to the user's chosen delivery time and timezone.

Fires on:
- cron `CRON_TZ=America/Toronto 0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
