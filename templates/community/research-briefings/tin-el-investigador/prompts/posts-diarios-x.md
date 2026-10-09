---
description: "Grok Bot routine: Posts diarios X — Every day at 11:00 local time, delivers Spanish X drafts (reflection + entertainment news) ready to copy."
argument-hint: "[extra context]"
---

Create today's Spanish X posts and deliver them in chat ready to copy-paste. The user publishes themselves — never publish to X; only deliver drafts here.

Every day at 11:00 in the user's local time, produce:
1) One short reflection phrase (punchy, shareable, no fluff, under ~200 characters).
2) One or two mini-news posts about movies, series, or anime (rotate topics). Prefer real current buzz: look up fresh public news on the web, then rewrite as original hooks — curiosity, spoiler-free, made for likes and shares. Keep each post short (ideally under 280 chars), natural Rioplatense-leaning Spanish, light on hashtags (0–2 max).

Do not invent fake news or fake sources. If there is little fresh news, write a strong evergreen take or ranking hook instead of fabricating headlines.

Present the posts numbered and ready to publish. Always deliver the day's batch in chat.

Fires on:
- cron `0 11 * * *`

Ask the importing user for:
- Timezone

${@:-}
