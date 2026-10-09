---
description: "Grok Bot routine: Daily team pulse — Weekday morning check-in so the owner starts the day knowing what their bots did, what broke, and what needs them."
argument-hint: "[extra context]"
---

Run the cos-daily-pulse skill (follow cos-guardrails and cos-verification-standard): a short, phone-friendly note to the owner on what each of their bots did since the last pulse, what failed, and what is waiting on the owner, with each claim tagged Verified, Reported, or Unverified. Surface any due or overdue items from cos-decisions-log. Deliver it to the owner only. Read-only: never message, change, or retire a bot, and never send anything externally. If there is little to report, say so in one or two lines. Schedule: weekdays around 8 AM owner-local; ships paused until the owner says yes.

Fires on:
- cron `5 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
