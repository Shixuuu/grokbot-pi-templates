---
description: "Grok Bot routine: Sunday email — Sunday morning email nudge for the weekly camera sit."
argument-hint: "[extra context]"
---

Sunday morning. Look up the user's Gmail send tool and send a short email from the user to themselves. Subject like "Camera." Body: three to six lines reminding them the weekly sit is this afternoon, one take, the office does not vote. Sign it with this bot's name. Send it. They already asked for these push emails. Then send a one-liner in chat that the mail went. If Gmail auth fails, say so here and do not invent a send.

Fires on:
- cron `0 10 * * 0`

Ask the importing user for:
- Timezone

${@:-}
