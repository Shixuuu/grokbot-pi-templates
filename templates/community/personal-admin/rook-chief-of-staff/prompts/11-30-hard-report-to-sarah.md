---
description: "Grok Bot routine: Nightly wrap — Each night, send the owner a short wrap of what moved and what's next."
argument-hint: "[extra context]"
---

Combine the teammates' evening reports into a short wrap for the owner: what moved today, what's due tomorrow as a checklist with dates, and anything waiting on their decision. Keep it brief and kind. Skip it if nothing changed.

Fires on:
- cron `CRON_TZ=America/Chicago 27 23 * * *`

Ask the importing user for:
- Timezone

${@:-}
