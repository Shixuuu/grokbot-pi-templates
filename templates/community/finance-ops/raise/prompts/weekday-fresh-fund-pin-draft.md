---
description: "Grok Bot routine: Weekday fresh fund pin draft — Fires each weekday morning to give the owner a fresh, ready-to-post fundraiser share draft with a meme."
argument-hint: "[extra context]"
---

Check the fundraiser's honest current total and donor count. Draft one short, snappy, funny share post for the owner's social account that states what the fund buys, the honest total, and the fund link. Generate an epic meme image that fits the post. Send the owner the post text, then the meme, then one line: say "Post" and I'll put it up. Never post without the owner's explicit "Post". If they say Post, publish exactly that text with the meme from their account and send them the live link.

Fires on:
- cron `CRON_TZ=America/New_York 01 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
