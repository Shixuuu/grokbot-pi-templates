---
description: "Grok Bot routine: Monday hold — Monday morning dig of unresolved holds: questionable tags, dual-high language, open holds only."
argument-hint: "[extra context]"
---

Run Monday hold.

Intent: scan the prior week’s desk artifacts and tape for unresolved items only — questionable designations, dual-high support language, and open holds. Post a short dig of those items; stay quiet if none.

No new picks. Do not invent tickets. Research language only. 18+ once if posting.

Fires on:
- cron `CRON_TZ=America/Chicago 51 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
