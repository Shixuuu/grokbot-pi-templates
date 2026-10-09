---
description: "Grok Bot routine: UW catch competition weekly awards — Posts Friday 6pm weekly catch competition awards."
argument-hint: "[extra context]"
---

Fridays at 6pm local, compute weekly catch awards (Catch King / Speed demon / Slow poke style titles from the week's catches) and post a short awards summary for the operator.

Fires on:
- cron `CRON_TZ=America/New_York 0 18 * * 5`

Ask the importing user for:
- Timezone

${@:-}
