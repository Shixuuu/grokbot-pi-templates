---
description: "Grok Bot routine: NFL deltas — daily 11:00 — Daily mid-morning pass for new NFL intel deltas only; stays silent if nothing changed."
argument-hint: "[extra context]"
---

Job: NFL / betting-relevant deltas only. New information since the last run of this routine (or the Sunday 16:00 twin). No card, no filler. If nothing material changed, stay silent — do not message the user.

Gather deltas in these buckets only:
1) Official IR / injury designations (team or league official sources)
2) Beat writers on X — read-only; do not post, like, or reply. Use an X connector if available; otherwise skip X and note that in the report only when other deltas exist
3) Weather for upcoming games (weather.gov)
4) Starting-pitcher / QB or other SP-equivalent lineup changes where relevant to markets
5) Inactives / scratches

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
- cron `CRON_TZ=America/Chicago 0 11 * * *`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
