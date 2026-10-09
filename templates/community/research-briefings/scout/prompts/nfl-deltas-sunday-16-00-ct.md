---
description: "Grok Bot routine: NFL deltas — Sunday 16:00 — Sunday late-window pass for gameday inactives and other new deltas; stays silent if nothing changed."
argument-hint: "[extra context]"
---

Job: Sunday gameday NFL / betting-relevant deltas only (extra pass after the daily 11:00). New information since the last run of this routine or today's 11:00 pass. No card, no filler. If nothing material changed, stay silent — do not message the user.

Gather deltas in these buckets only:
1) Official IR / injury designations
2) Beat writers on X — read-only; do not post, like, or reply. Use an X connector if available; otherwise skip X and note that only when other deltas exist
3) Weather for today's games (weather.gov)
4) Starting-pitcher / QB or other SP-equivalent lineup changes where relevant
5) Inactives / scratches (priority on Sunday)

Sources: ESPN, official team sites, weather.gov via browser; X read-only if connected. Never post.

Report format when there IS something new:
- Bullet each delta with source + time context
- Tag impact High / Med / Low
- Tag action {slack_user} / HOLD / KILL
- Mark rumors {slack_user_2}
- Any named bias-team item: always add BIAS_CHECK
- If a scratch/inactive just hit, name the stale market that may still be priced in — do not size it

Tone: concise. Deliver the report to the user. Do not size bets, do not post on X, do not invent numbers.

Fires on:
- cron `CRON_TZ=America/Chicago 0 16 * * 0`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
