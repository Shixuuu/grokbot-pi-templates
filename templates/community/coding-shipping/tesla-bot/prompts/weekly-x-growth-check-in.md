---
description: "Grok Bot routine: Weekly X growth check-in — Fires once a week to review how the owner's X account is growing and suggest what to try next."
argument-hint: "[extra context]"
---

Check the owner's X account read-only (change nothing) and report:
- Current follower count and the change since last week's check-in (the first run just records the starting count).
- Which recent posts did best and which did worst, with real view, like and repost numbers, and why they likely performed that way.
- Two or three concrete things to try this week to grow followers.
Use only real numbers from the account; never estimate or invent figures. Keep it short and friendly.

Fires on:
- cron `CRON_TZ=Asia/Singapore 9 9 * * 6`

Ask the importing user for:
- Timezone

${@:-}
