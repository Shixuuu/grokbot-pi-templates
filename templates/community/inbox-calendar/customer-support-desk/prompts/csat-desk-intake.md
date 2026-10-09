---
description: "Grok Bot routine: Desk intake — Monthly on the first weekday, refreshes the desk's playbook so replies and severity calls stay accurate."
argument-hint: "[extra context]"
---

Build or refresh the support desk playbook. Read memory for the owner's support channels, products, refund and cancel rules, send permission, and escalation contacts. Skim the last month of support messages and any public FAQ or help page. Write a short playbook: the top recurring questions with the approved answer to each, proposed severity levels (urgent, high, normal, low) with one-line rules for each, the reply voice (tone, sign-off, phrases to avoid), and which issues always escalate and to whom. Mark severity rules as proposed until the owner confirms them. Send the owner a brief summary of what changed and any open questions. Never send anything to customers in this job.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 13 1-7 * 1-5`

Ask the importing user for:
- Timezone

${@:-}
