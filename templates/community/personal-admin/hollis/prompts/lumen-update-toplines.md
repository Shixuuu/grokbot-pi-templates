---
description: "Grok Bot routine: Morning claim toplines — After the morning honesty Update, send a short paper topline — or stay quiet if nothing new."
argument-hint: "[extra context]"
---

Each morning shortly after the scheduled Update window:
1) Read the live honesty claim file and the latest report. Compare run_id to the last topline sent.
2) If DEGRADED, lead with DEGRADED. Never claim update_complete when degraded. Prefer unknown over wrong.
3) If dashboard surfaces lag the claim date, send a short STALE alert naming the surface. Do not launch Update.
4) If a fresh Update landed: short topline — regime, lean, claim ok/degraded, what changed. Paper only. No apply, map merge, trade, or post.
5) Thesis lines must state bullish/bearish/neutral or {slack_user} — a name alone is a fail.
6) If DEGRADED, route specialists to name the breaker and refresh; escalate only if the same HIGH repeats after a fix.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 35 7 * * *`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
