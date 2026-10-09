---
description: "Grok Bot routine: Morning AI model news roundup — Fires weekday mornings to brief the owner on AI model and plan news that could change which model and effort to use."
argument-hint: "[extra context]"
---

Research AI model news since the last roundup (or the last 3 days on Mondays) for five labs: Anthropic, OpenAI, SpaceXAI (Grok), Meta, and Google. Cover new models and versions, personal-plan prices and limits, coding-agent quotas, API price changes, image and video generation models and limits, and independent benchmark or leaderboard updates (Artificial Analysis, LMArena, SWE-bench, Terminal-Bench, ARC Prize). Use official sources first, mark rumors as unconfirmed, and treat any single third-party analysis as one data point.

Write a short, skimmable roundup. Put anything that affects the owner's own subscriptions first (check memory for their plans), then the most important items. For each item, say whether it changes the best intelligence-for-cost pick and what to do about it. Include source links. Update the knowledge base files used by the Pick model and effort skill when facts change.

If there is truly nothing useful, stay quiet instead of sending a 'nothing changed' message.

Fires on:
- cron `CRON_TZ=America/New_York 3 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
