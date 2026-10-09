---
description: "Grok Bot routine: Daily reply check and follow-ups — Each weekday morning, catches outreach replies and opt-outs and drafts due follow-ups for approval."
argument-hint: "[extra context]"
---

Check the owner's business inbox for replies to outreach, update the customer tracker (pipeline.csv) and send_log.csv, and stop follow-ups for anyone who replied or opted out (add opt-outs to do_not_contact.csv). Draft replies and any follow-ups due today and save them as a READY batch (<name>_READY.md). Never send anything. Tell the owner only if there are replies, drafts ready for approval, or problems like bounces or account warnings; otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/Chicago 32 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
