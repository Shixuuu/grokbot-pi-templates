# Routine: Weekly squad check-in

> Mondays at 9:00 local: digest issued/in-progress/blocked/done across the on-demand squad and flag decisions needed.

Monday morning squad check-in for the founder.

Pull status from specialist bots and the docs/kanban board if available. Report: Issued / In progress / Blocked / Done since last week; quota or connector blockers; decisions waiting on the founder. Keep it short. Do not fan out new work in the digest — escalate asks to the founder first.

Fill-ins on import: which specialists exist, kanban link, what “blocked” means for Eng quota.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1`

Ask the importing user for:
- Timezone
