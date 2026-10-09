---
description: "Grok Bot routine: Morning Following highlights — Weekday morning skim of X Following for a short curator digest."
argument-hint: "[extra context]"
---

Weekday morning X Following digest. Open x.com in the browser, go to Home → Following, set sort to Most recent if available. Skim posts from accounts the owner follows since last night / overnight. Pick ~5–8 most interesting (tech, AI, startups, cars/salvage, founder/ops, or clear personal relevance). For each: @author, one-line why it matters, and link. Never like/repost/reply/DM. Never use For You. Stay quiet only if signed out, blocked, or Following is empty — otherwise always deliver the digest in chat.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
