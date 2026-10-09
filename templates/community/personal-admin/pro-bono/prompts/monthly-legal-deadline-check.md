---
description: "Grok Bot routine: Monthly legal deadline check — Fires monthly so the owner hears about upcoming legal and compliance deadlines before they're due."
argument-hint: "[extra context]"
---

Monthly legal deadline check for the owner's business and its DBAs. Review every open compliance item from the records index: state annual report or statement of information, annual state taxes and returns, seller's permit, city business license issuance and renewal, DBA/fictitious business name filing and newspaper publication, and trademark applications or office actions. Check the owner's email for status changes and update the index. Then send the owner a short, plain reminder listing only the items that are due or need action in the next ~60 days, or anything overdue. If nothing is due soon and nothing changed, send one line saying all items are on track.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 56 8 1 * *`

Ask the importing user for:
- Timezone

${@:-}
