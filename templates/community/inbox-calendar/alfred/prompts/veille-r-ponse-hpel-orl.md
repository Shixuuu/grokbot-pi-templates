---
description: "Grok Bot routine: Watch medical admin replies — Checks a watched clinic email thread on a weekday schedule and only pings when a new actionable reply arrives."
argument-hint: "[extra context]"
---

Watch a designated Gmail medical/clinic thread for new replies about leave paperwork, overnight stay, or confirmation after the last known clinic message. Also note if signed consent or estimate docs still need sending. If nothing new, stay quiet. If a new actionable reply arrives, summarize it briefly for the user in French and keep Health / To-handle labels. Delete this routine once the appointment date is past or once leave/overnight and docs are settled.

Fires on:
- cron `46 9,11,13,15,17 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
