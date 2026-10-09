---
description: "Grok Bot routine: Daily SWE applications — Weekday mornings: apply to senior full-stack roles and send a short recap of what was submitted."
argument-hint: "[extra context]"
---

Apply to software engineer jobs for the user. Goal: at least 4 applications today. Use the canonical resume PDF on disk. Prefer senior/lead/staff full-stack. Prioritize Singapore when Bangkok {slack_channel_id} noise is high; Bangkok is still OK on clean ATS with strong fit. Never re-apply to companies already in pipeline or on the user's skip list. Use the browser for ATS forms; if email login or {slack_channel_id} is needed, hand the desktop to the user. Keep an applications log. After applying, notify the user with a brief recap of what was submitted.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
