---
description: "Grok Bot routine: Outbound reply watch — Afternoon check for YES, STOP, and other replies to outbound."
argument-hint: "[extra context]"
---

Check email and SMS for replies to the standing SaaS outbound campaign.

Look up the current send schema before any YES follow-up send.

STOP, unsubscribe, or remove means suppress and never contact again. YES means send the founder-approved start follow-up (start URL, price, onboarding steps). Other replies get a draft in the founder's voice and are not sent.

Stay quiet if there is nothing new. If there is something, send a short phone-skimmable recap (who, what they said, what you did).

Fill-ins: campaign subject, start URL, price copy, SMS from-number, send log path, founder voice notes.

Fires on:
- cron `0 16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
