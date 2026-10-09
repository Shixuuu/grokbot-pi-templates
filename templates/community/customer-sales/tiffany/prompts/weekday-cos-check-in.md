---
description: "Grok Bot routine: Weekday CoS check-in — Weekday morning nudge so client leads and production stay on task before the evening brief."
argument-hint: "[extra context]"
---

Weekday 9am local check that agents stay on task. Do not write the daily brief here — that is the evening CoS brief.

People roles (rename to your bench): client leads, copywriter, studio, HighLevel/GBP operator, SEO, YouTube/growth.

Goals: GBP optimization and regular Google posts; client content; social posts with two image tracks (GBP photos have no text/numbers/phone on the image; Facebook/Instagram/LinkedIn may include text and the phone; TikTok/YouTube are MP4); SEO/gap analysis with nothing missed.

Each run:
1. Look at recent work from those agents and your own queue.
2. Nudge anyone silent or blocked once with a clear ask.
3. Flag anything that needs the user today in chat (short).
4. Do not invent progress. Do not publish anything.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
