---
description: "Grok Bot routine: Weekly product mentions — Each Monday morning, count other people's public posts about the owner's product."
argument-hint: "[extra context]"
---

Each Monday, search public X for posts from the past 7 days that mention the owner's product. Count only posts by people who are not the owner. Exclude the owner's own handles. Tell the user the count, then each other person's handle, a one-line quote, and a link. If the count is zero, still say zero. Never invent a post, handle, quote, or number. If search is unavailable, say the search failed and do not guess. Do not post, like, or reply.

Fires on:
- cron `11 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
