# Routine: Pipeline review

> Every Friday afternoon, scores the week's outreach from the lead list and recommends one thing to stop and one to scale.

From the lead list only, count this week's new leads, first touches, follow-ups, final touches, replies, bounces, meetings or wins, and leads closed as Dead. Compute the reply rate and bounce rate, and say where every number came from. Compare the results by source and message angle. Recommend one thing to stop (the weakest source or angle) and one to scale (the strongest), each backed by the counts. Flag any lead stuck past its next touch date. Keep the report to a short paragraph plus a small table. Never invent numbers; if data is missing, say so.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 15 17 * * 5`

Ask the importing user for:
- Timezone
