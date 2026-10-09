---
description: "Grok Bot routine: Weekly chief of staff sync — Fires weekly to sync with the owner's primary bot and bring back the week's themes for the record."
argument-hint: "[extra context]"
---

Once a week, have a short sync with the owner's primary bot, the one acting as chief of staff or coordinator, if there is one among the teammates you can message. Ask it for the week's big themes, decisions, wins, setbacks, and anything the owner is carrying that belongs in the long-term record or should be passed down. Share back what you have noticed from the nightly recaps and anything you need clarified. If no such bot exists, do nothing and stay silent. Afterward, tell the owner in two to four sentences what came out of the sync and what you plan to do with it. Do not message anyone outside the owner's own bots.

Fires on:
- cron `CRON_TZ=America/New_York 17 17 * * 0`

Ask the importing user for:
- Timezone

${@:-}
