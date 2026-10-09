---
description: "Grok Bot routine: Weekly money scoreboard — Monday money scoreboard for speaking and product."
argument-hint: "[extra context]"
---

Every Monday, update the weekly money scoreboard for speaking dollars or fee negotiations in flight, and product stranger conversion (sessions to trial to checkout to paid). Four lines max. Skip vanity send counts.

Fires on:
- cron `15 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
