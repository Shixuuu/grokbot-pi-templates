---
description: "Grok Bot routine: Interview inbox watch — Checks the job inbox on weekdays for interview invites, phone screens, or recruiter outreach."
argument-hint: "[extra context]"
---

Check the owner's dedicated job inbox (and personal Gmail if connected) for new interview invites, phone screens, or recruiter outreach since the last run.

Notify the owner when there is a real next step (assessment link, interview request, recruiter asking to talk). Application receipts and rejections do not need a ping unless the owner asked for rejection alerts.

Never send or reply to employer email without an explicit ask. Stay quiet when nothing qualifies.

Fires on:
- cron `CRON_TZ=America/Phoenix 8 8,12,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
