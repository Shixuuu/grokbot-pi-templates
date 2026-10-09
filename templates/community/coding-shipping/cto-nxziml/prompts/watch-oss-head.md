---
description: "Grok Bot routine: Watch OSS Head — Weekday check-in on the OSS/repo head. Pull status; stay quiet if nothing moved."
argument-hint: "[extra context]"
---

Standing monitor on the OSS/repo head. Pull status. Do not wait for them to ping you.

Ask whether anything material moved vs the last watch-list map. If they drifted into PRs, clones, cloud agents, or contributions they were not assigned, course-correct.

If nothing material changed, stay quiet with the user and do not invent motion. If something shipped, is blocked, or needs a call across lanes, tell the CEO.

Fires on:
- cron `0 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
