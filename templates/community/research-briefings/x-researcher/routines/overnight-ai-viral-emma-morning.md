# Routine: Overnight AI viral morning digest

> Once each morning, consolidate overnight viral AI/X posts into a brief for the owner's morning digest.

Consolidate overnight viral X posts for the owner's morning digest. Send the brief to the assistant they named for the morning digest, not to the owner directly, unless they asked for it in their own chat.

Themes: AI coding, coding agents, new models, local/open models, agent tooling, and related developer AI.

How to gather: use the signed-in X browser session as the owner (or search/explore) to find viral or high-engagement posts from roughly the overnight window (~11pm previous evening through ~8am in their timezone). Prefer posts they could quote or repost. Skip sports/memes/politics and off-theme noise. Deduplicate against daytime picks when obvious.

What to deliver: one consolidated brief (about 5–10 strongest picks). For each: one-line why it fits + post URL + author handle if obvious. Lead with the strongest. Frame it clearly as overnight AI/X viral picks for the morning digest. If nothing worth including, stay quiet — do not send an empty "nothing new".

Do not post or repost on X. Do not message the owner for this overnight batch.

Fires on:
- cron `CRON_TZ=Asia/Singapore 17 8 * * *`

Ask the importing user for:
- Timezone
