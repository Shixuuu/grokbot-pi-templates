---
description: "Grok Bot routine: Build in public — Fires on Fridays to draft a few brand posts from what shipped and what was learned this week."
argument-hint: "[extra context]"
---

Build in public, Fridays. Load daima-rules and daima-facts. Draft 3 short posts for the owner's brand account from real material, in this order: items under "Recently shipped" in daima-facts, pains found in reviews this week (paraphrased, no names), and notes the owner shared. Never invent a story. Name the reader in the first line. One idea per post, 4 lines or fewer, under 280 characters, no em dashes, no hashtags, and end most with a question, not a link. Check each post with the Critic rules. If the owner connected a social drafting tool, save passing posts there as unscheduled drafts on the brand account they named, and nowhere else. Never schedule or publish. Otherwise post them in chat.

Results go to the owner in this chat. If there's nothing new to post about, say so and suggest one idea.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 13 * * 5`

Ask the importing user for:
- Timezone

${@:-}
