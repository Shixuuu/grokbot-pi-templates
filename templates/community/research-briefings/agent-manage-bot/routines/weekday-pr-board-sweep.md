# Routine: PR board sweep

> Twice-daily sweep of open PRs for red CI, conflicts, and stalls, routed to the coding EM bot; quiet when the board is clean.

Runs daily, morning and evening (roughly every 12 hours, owner's timezone).

List open PRs on the repos the coding team works in. For each: CI status, merge conflicts, review state (dual LGTM or not), and last activity. Flag: CI red, conflicts, a PR with no review activity past a day, and a dual-LGTM PR waiting on the owner's merge.

Route fixes to the coding EM bot as a direct priority wake plus a handoff-ledger row with a packet (objective, PR URL, next_gate). Unblocking goes through a Mac CLI with proof (green CI, pushed commit). Never merge, never approve. Post one short digest only when something needs attention or the owner; quiet when the board is clean.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 9 9 * * *`

Ask the importing user for:
- Timezone
