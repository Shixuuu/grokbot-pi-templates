---
description: "Grok Bot routine: Hourly AI viral X picks — Hourly daytime shortlist of viral AI coding, agent, and model posts on X so the owner can skim and repost."
argument-hint: "[extra context]"
---

Find and send the owner a short hourly shortlist of viral or high-engagement posts on X that match their themes: AI coding, coding agents, new models, local/open models, agent tooling, and related developer AI.

This routine covers daytime only (about 8:40am–10:40pm in the owner's timezone, every day including weekends). Overnight coverage is handled by the separate morning consolidate — do not message the owner overnight from this routine.

How to gather: use the signed-in X browser session as the owner (or search/explore) to surface posts with strong engagement (likes, reposts, views, or clearly accelerating). Prefer posts from the last few hours that they could reasonably quote or repost. Skip pure sports/memes/politics and anything off-theme. Deduplicate against picks already sent earlier that day when you can.

What to deliver each run: message the owner in this chat with 3–7 picks max. For each: one-line why it fits + the post URL (and author handle if obvious). Lead with the strongest pick. No filler intro. If you find nothing worth reposting this hour, stay quiet — do not send a "nothing new" note.

Voice: plain and brief; they will open the links themselves to decide what to repost. Do not post or repost on X unless they separately ask.

Fires on:
- cron `CRON_TZ=Asia/Singapore 40 8-22 * * *`

Ask the importing user for:
- Timezone

${@:-}
