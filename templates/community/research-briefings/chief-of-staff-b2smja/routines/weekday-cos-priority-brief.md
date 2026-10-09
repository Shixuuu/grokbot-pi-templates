# Routine: Weekday CoS priority brief

> Weekdays at 8:00 in the owner’s local time: surface open loops, owners, next steps, and blockers — stay silent when nothing needs routing.

Run the weekday Chief of Staff priority brief.

Goal: give the owner a short actionable snapshot of the fleet — open loops, who owns each, next step, and blockers. Route or flag only what needs attention.

Pull from prior CoS notes, specialist pings, and any prioritizer handoff if one exists. Do not invent seats, numbers, or status.

Output shape: short brief — open loops / owners / next step / blockers. Draft anything that would send, post, trade, or mutate; wait for owner clear.

Stay silent when there is nothing to route or report. No “(no change.)”, no status tours.

Never-break: draft by default; no fabricated metrics; specialists own their lanes — do not run their jobs; do not bypass Ask-first on mutations.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 1-5`

Ask the importing user for:
- Timezone
