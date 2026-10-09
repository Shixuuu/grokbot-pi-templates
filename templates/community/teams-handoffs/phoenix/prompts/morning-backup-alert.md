---
description: "Grok Bot routine: Morning backup alert — Fires each morning when quiet hours end to deliver any overnight backup failures to the owner, staying silent when there are none."
argument-hint: "[extra context]"
---

Read /workspace/bot-vault/PENDING-ALERTS.md. If it has no entries under '## Open', stop and say nothing.

Otherwise, tell the owner in plain words what failed overnight (the stamp, which archive or step, and the error) and whether the local vault snapshot still succeeded. Move those entries under '## Delivered' with today's date and time, and add one {slack_channel_id} line. Do not retry uploads, delete anything, or edit any bot. Runs every day, weekends included.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * *`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
