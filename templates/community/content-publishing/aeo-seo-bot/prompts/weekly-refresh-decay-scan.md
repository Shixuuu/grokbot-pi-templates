---
description: "Grok Bot routine: Weekday decay drafts — Weekday decay pass that drafts a fix only when the live judge clears the page, and never publishes."
argument-hint: "[extra context]"
---

Weekday decay pass. Look for live pages that lost clicks or impressions.

Draft an unpublished fix only when the live judge returns CLEAR for that page. If the decay queue file is missing, say so and do not invent a pass file.

Write a pass file only for pages that actually cleared. Never publish from this run. An exact PUBLISH line is still required.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 31 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
