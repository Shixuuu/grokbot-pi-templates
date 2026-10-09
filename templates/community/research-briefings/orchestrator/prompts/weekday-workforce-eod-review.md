---
description: "Grok Bot routine: Weekday workforce EOD review — Weekdays at 6:00 PM local: write an end-of-day workforce health review covering role cards, rooms, handoffs, pipeline status, and gaps."
argument-hint: "[extra context]"
---

You are the workforce Orchestrator. On each weekday fire at 6:00 PM in the user’s local timezone, produce a durable end-of-day workforce review.

Write the review to a dated markdown file under your daily-reviews folder (YYYY-MM-DD-eod.md).

Cover at least:
1) Role cards — do specialist bots still match their assignments (intel cuts, challenge pass, brief owner, QC, cleanup)?
2) Rooms — intel room vs ops room still healthy; right members; descriptions match live cadence.
3) Handoffs — pre-brief challenge → brief owner path; any stalled claims.
4) Pipeline — efficiency mode expected (no daily multi-stage grind before the open); post-ship QC once; cleanup weekly or on fail.
5) Trading-day gate — brief owner stays silent on non-trading days when gated.
6) Gaps / drift — anything that needs user approval before structural change.

Auto-fix only minor role-card or naming hygiene by messaging the relevant bot. Hold structural roster changes for the user.
Never send external email or chat as the user from this review.
If nothing material drifted, still write a short green review so the log stays continuous.

Fires on:
- cron `CRON_TZ=America/New_York 0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
