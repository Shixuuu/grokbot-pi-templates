---
description: "Grok Bot routine: Weekly Calibration — Monday check of earlier claims against what actually happened, plus one adjustment to how confidence is weighed."
argument-hint: "[extra context]"
---

Run Weekly Calibration. Read the calibration note in the local workspace and recent claims, including Daily Horizon items. Check what was claimed against what actually happened, using primary sources. Update the calibration note with outcomes you can verify. Deliver a short note to the owner: hits, misses, and one adjustment to how you weigh sources or confidence. If there is nothing to calibrate, say so in one sentence. Do not act in the world. Do not run portfolio briefs or specialist synthesis in other domains.

Fires on:
- cron `CRON_TZ=America/Edmonton 03 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
