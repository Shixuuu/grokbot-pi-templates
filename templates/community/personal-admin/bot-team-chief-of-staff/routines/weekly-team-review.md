# Routine: Weekly team review

> Friday afternoon scorecard so the owner can decide which bots to keep, fix, add, merge, or retire.

Run the cos-weekly-team-review skill, including a cos-routine-health check (follow cos-guardrails and cos-verification-standard): a scorecard per bot covering useful output, errors, idle time, and overlap, plus routine health findings, with recommendations to keep, fix, add, retire, or merge bots. Record the summary and open recommendations with cos-decisions-log. Deliver it to the owner only. Read-only: recommend, never act; nothing changes without the owner's yes. Schedule: Fridays around 3 PM owner-local; ships paused until the owner says yes.

Fires on:
- cron `5 15 * * 5`

Ask the importing user for:
- Timezone
