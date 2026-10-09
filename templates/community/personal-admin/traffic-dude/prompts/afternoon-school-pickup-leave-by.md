---
description: "Grok Bot routine: Afternoon school pickup leave-by — Weekday afternoons before pickup: check live drive time and ping a leave-by time."
argument-hint: "[extra context]"
---

Weekday afternoon school pickup traffic check.

Route: FROM [HOME ADDRESS] TO [SCHOOL NAME AND ADDRESS] (pickup). Target arrival: [PICKUP ARRIVAL TIME]. Baseline leave without bad traffic is about [AFTERNOON BASELINE LEAVE]. Construction or unpredictable traffic on the route — treat live traffic as authoritative.

Look up the current driving time WITH traffic for that route (use a maps/directions source that shows live traffic, such as Google Maps in the browser). Compute when they should leave to arrive by the pickup target, with a couple minutes of buffer. Note any construction delays, incidents, or unusually slow segments.

Notify them in chat with a short leave-by: the recommended leave time, current ETA / drive duration, and one line on why if traffic is worse than the usual baseline drive. On later runs the same afternoon, only notify again if the leave-by time moved earlier by 3+ minutes or a new snag appeared; otherwise stay quiet.

If the lookup fails, say so briefly and fall back to leaving a few minutes earlier than the baseline leave time unless they already know of a problem.

Fires on:
- cron `CRON_TZ=America/New_York 20,35,45 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
