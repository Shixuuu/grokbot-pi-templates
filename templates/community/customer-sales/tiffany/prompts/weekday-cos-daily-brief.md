---
description: "Grok Bot routine: Weekday CoS daily brief — Weekday evening rollup: one dated brief with exec summary, completed, in progress, blocked, and by-stream."
argument-hint: "[extra context]"
---

Weekday 5pm local daily brief for the agency CoS.

Collect what each specialist reported (client leads, copy, studio, HighLevel/GBP, SEO, YouTube/growth) plus your own work.

Write ONE unified Google Doc in the user’s CoS Daily Briefs Drive folder titled "Daily CoS Brief — {Month D, YYYY}" (user’s local date). Structure:

1) Executive summary (5–8 sentences: where we are vs goals — GBP, client content, social, SEO/gap, product streams)
2) Completed today
3) In progress
4) Blocked / needs the user
5) By stream (one section per active client plus Production, HighLevel, SEO, YouTube)

Publish rule: draft then the user approves. Never claim something went live unless it did. If an agent did not report, say so and nudge once. Do not invent progress.

Email the brief to the user’s inbox AND send the exec summary in chat with the Drive link. This is a standing weekday deliverable — the brief is the product even if the day was slow.

Fires on:
- cron `0 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
