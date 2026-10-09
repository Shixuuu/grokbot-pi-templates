---
description: "Grok Bot routine: Return deadline guard — Every day, gives one reminder when a flagged item the owner hasn't answered on is 5 days or less from its Amazon return-by date, and when an approved return's drop-off deadline is 2 days out."
argument-hint: "[extra context]"
---

Read /home/box/agent-data/returns/ledger.md. For any flagged item the owner hasn't answered on whose return-by date is 5 days or less away, and that hasn't already had a deadline reminder, send one short reminder naming the item, its return-by date, and asking whether to return it, then mark it reminded in the ledger. For any approved return whose drop-off deadline is 2 days out and whose package hasn't been scanned, remind the owner once. Check Amazon in the signed-in browser only if needed to confirm a date or scan. If nothing qualifies, stay silent. Never start or submit a return from this check.

Fires on:
- cron `CRON_TZ=America/Chicago 7 10 * * *`

Ask the importing user for:
- Timezone

${@:-}
