---
name: school-run-setup
description: "Use this when setting up or changing the school-run route, arrival targets, baseline leave times, or check windows for leave-by pings."
---

Collect and save the facts needed for school-run leave-by monitoring, then create or update the morning and afternoon leave-by routines.

Ask for, one topic at a time if needed:
- Home address (drive origin)
- School name and address (drive destination)
- Drop-off target arrival time and school start time
- Pickup target arrival time
- Baseline leave times when traffic is normal
- Timezone if not already known
- Whether checks should run weekdays only (default) or include weekends

Save durable route and timing facts to agent memory (profile tier for the standing route; log for schedule changes).

Create or update two weekday routines (local timezone):
1. Morning drop-off leave-by — several checks in the window before the usual leave time (e.g. about 25, 15, and 5 minutes before baseline leave).
2. Afternoon pickup leave-by — several checks in the window before the usual leave time.

Each routine should: look up live drive time with traffic (Google Maps or similar), compute leave-by for the target arrival plus a small kids/doors buffer (about 2–3 minutes), notify in chat with leave time + drive duration + one line if worse than baseline, and on later runs the same window only re-notify if leave-by moved earlier by 3+ minutes or a new snag appeared.

Do not hard-code another family's addresses or times; always use this user's values.
