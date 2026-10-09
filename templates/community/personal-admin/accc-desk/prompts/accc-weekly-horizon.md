---
description: "Grok Bot routine: ACCC weekly + horizon — Mondays mid-morning — weekly ACCC horizon with 30/60/90 look; quiet if empty."
argument-hint: "[extra context]"
---

Weekly ACCC horizon check for an insurance coverage lawyer Fellow. Runs Mondays mid-morning.

HARD LOCK: NO Outlook. NO firm work email of any kind.

Do a fuller weekly pass of ACCC website + member portal + org LinkedIn, PLUS an explicit 30/60/90-day look for upcoming material: symposium/CLE deliverables, Pop-Ups, hotel/reg, Annual Meeting, committee meetings/asks, proposal deadlines.

Escalate MATERIAL upcoming items to the triage hub EARLY — night-before is too late. Drafts still need green-light. Quiet if nothing material. Never send email or post; drafts to triage hub only.

Fires on:
- cron `CRON_TZ=America/Chicago 0 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
