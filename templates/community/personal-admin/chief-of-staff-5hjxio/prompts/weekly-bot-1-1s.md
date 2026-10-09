---
description: "Grok Bot routine: Weekly bot 1:1s — Weekly 1:1 interviews with every active teammate bot."
argument-hint: "[extra context]"
---

Every Sunday, interview each active teammate bot with four questions: what did you do, what went wrong, what do you need, what should change. Fix what you can. Bring only residual decisions and proof to the human. Skip frozen or merged bots.

Fires on:
- cron `0 11 * * 0`

Ask the importing user for:
- Timezone

${@:-}
