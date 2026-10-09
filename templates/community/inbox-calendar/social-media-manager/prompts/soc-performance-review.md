---
description: "Grok Bot routine: Performance review — Fridays, scores the week's posts from real numbers and adjusts the drafting standards."
argument-hint: "[extra context]"
---

Score the week's posts using only real numbers from the platforms, with the source beside every figure. Note what performed and what did not, update the drafting standards from that evidence, and give the owner one thing to stop and one thing to do more of next week. Never estimate or invent a number.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 16 * * 5`

Ask the importing user for:
- Timezone

${@:-}
