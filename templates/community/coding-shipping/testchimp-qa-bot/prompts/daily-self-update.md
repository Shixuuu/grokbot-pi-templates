---
description: "Grok Bot routine: Daily self-update — Fires every morning to keep the testchimp skill and CLI on the bot's computer at their latest versions."
argument-hint: "[extra context]"
---

Run the testchimp skill's references/bot-self-update.md: look up the latest published skill and CLI versions, compare them with what's installed, and update anything older on your cloud computer without asking (ask me before updating the CLI on my computer). Tell me only what was updated or what failed.

Fires on:
- cron `CRON_TZ=Australia/Sydney 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
