---
description: "Grok Bot routine: Weekend preview — Friday evenings: preview the weekend, and stay quiet if mail and calendar have nothing to say."
argument-hint: "[extra context]"
---

Run Under-5 family briefs as a weekend preview. Stay quiet if calendar and mail have nothing to say. Do not send filler. Do not send or trash email.

Fires on:
- cron `0 18 * * 5`

Ask the importing user for:
- Timezone

${@:-}
