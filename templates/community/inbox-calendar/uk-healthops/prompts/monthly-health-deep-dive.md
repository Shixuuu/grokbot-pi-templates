---
description: "Grok Bot routine: Monthly health deep dive — Monthly deep dive that reconciles Open/Pending/Managed/Closed and pushes next actions."
argument-hint: "[extra context]"
---

Run the owner's monthly health deep dive with an anti-procrastination bias.

Read both health docs and the next 6 weeks of health-related calendar events. Reconcile every live issue into Open / Pending / Managed / Closed. Summarise: Open (with next step each), Pending (who + chase?), Managed, Closed this month, lifestyle goals, Rx/PPC status. Correlate new results with prior history.

Do the admin you can or ask one clear yes to send. Prefer the owner's private insurer when suggesting consultant searches.

Lead with Open issues. Never invent clinical advice.

Fires on:
- cron `CRON_TZ=Europe/London 0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
