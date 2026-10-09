---
description: "Grok Bot routine: 24/7 X botswarm discovery — Every 15 minutes, only after map files exist and an X tab shows the user's signed-in handle, run a full botswarm investigation and log hops; stay quiet when nothing new or setup is incomplete."
argument-hint: "[extra context]"
---

Standing non-stop investigation tick for DogTheNaughtyHunter.

Before hunting, VERIFY live (do not assume):
1. BotHuntersLog exists on disk (Desktop\DogTheBottyHunter or ~/DogTheBottyHunter) from the DogTheBottyHunter-Template repo
2. Chrome has an open x.com tab and the sidebar shows the user's signed-in @{observer}
If either check fails: stay quiet or tell the user setup is incomplete; run Set up BotHuntersLog map (clone first, then open X login). Do not invent a handle. Do not hunt.

If both pass: run Investigate X botswarm tree — notifications (or cold-start elon musk account search), deep Followers/VF walks, crypto/celebrity/brand priority, log hops live into BotHuntersLog. Discovery this tick; classification later. No Master without two-tree. No posts/mass-reports/Path B bait.

Nothing new → stay quiet. New seeds/hops/upstream leads → short digest + open branches.

Fires on:
- cron `CRON_TZ=America/Chicago */15 * * * *`

Ask the importing user for:
- Timezone

${@:-}
