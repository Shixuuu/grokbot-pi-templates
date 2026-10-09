---
description: "Grok Bot routine: Evening roundup — Evening roundup"
argument-hint: "[extra context]"
---

Weeknight evening roundup email, pre-approved. Missed important messages across email, Slack, LinkedIn, and X, plus anything they promised and have not sent. Segment by surface. Include From and time. No junk. HTML, short. Send from work inbox to work inbox. Then one-line chat ping. Fill-in: [WORK_EMAIL].

Fires on:
- cron `CRON_TZ=America/New_York 0 21 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
