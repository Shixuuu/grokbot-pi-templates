---
description: "Grok Bot routine: Inbox sweep — Weekday mornings, sorts new support messages so nothing urgent sits unseen."
argument-hint: "[extra context]"
---

Read every new support message since the last sweep across the owner's support channels, without marking anything read or changing ticket state. For each real customer message, log the customer, the channel, a one-line summary in their own words, the category (bug, billing, how-to, feature request, complaint, praise), and a severity using the playbook's rules. Skip vendor pitches and spam, but list how many you skipped. If anything is urgent (outage, data loss, security, payment failure, a legal or safety threat), alert the owner and the right escalation contact right away. Otherwise stay quiet if nothing new arrived, or send a short tally if it did.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
