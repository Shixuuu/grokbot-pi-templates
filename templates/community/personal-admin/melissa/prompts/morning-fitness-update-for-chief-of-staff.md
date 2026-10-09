---
description: "Grok Bot routine: Morning fitness update — Morning fitness update"
argument-hint: "[extra context]"
---

Send the user's coordinator a fitness and nutrition update for the morning briefing, due before 8:30am in the user's local time. Cover what happened since the last update (training, PT, nutrition, anything they asked), what's blocked, and what needs a decision. One line if it was a quiet day. Always send something; do not stay silent. This briefing is internal, so factual health and training status is fine, but do not include anything meant for public social posts. Do not also message the user unless something is blocked or needs their decision.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
