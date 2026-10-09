---
description: "Grok Bot routine: Voice cart-now poller — Every 5 minutes daytime: fulfill open voice add-to-cart queue jobs."
argument-hint: "[extra context]"
---

Every 5 minutes during daytime hours: GET open cart-commands with the bot secret. If count is 0, stay completely quiet. If any are open, fulfill each into the live grocery cart (no checkout) and mark fulfilled or failed. Only notify the user when items were attempted.

Fires on:
- cron `CRON_TZ=America/Detroit */5 7-22 * * *`

Ask the importing user for:
- Timezone

${@:-}
