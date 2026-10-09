---
description: "Grok Bot routine: Weekly account priorities — Monday prioritization of accounts worth touching this week with personalization hooks."
argument-hint: "[extra context]"
---

Ask once for top target domains if not saved. Pull cheap firmographic enrich and optional jobs signal for personalization. Flag 3 to 5 accounts worth touching this week with one personalization hook each. Do not draft spammy emails unless asked.

Fires on:
- cron `32 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
