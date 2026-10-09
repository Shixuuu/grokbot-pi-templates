---
description: "Grok Bot routine: EdTech daily digest — Weekday lunchtime short digest of school tech, policy, platform developments, and play trends in EdTech."
argument-hint: "[extra context]"
---

Follow the edtech-intelligence-digest skill exactly. Produce the DAILY edition: previous 24 hours, extend to 72 only for important misses; 250–400 words; date and coverage window; up to five ranked items with What changed / Why it matters (labeled as analysis) / Source link+date. Search the live web and public discussion each run. Prefer original sources. Do not invent sources or metrics. If little happened, say so and keep it short. Deliver the digest to the user.

Fires on:
- cron `CRON_TZ=America/Detroit 0 12 * * 1-4`

Ask the importing user for:
- Timezone

${@:-}
