---
description: "Grok Bot routine: Midday Meta pulse — Weekday midday quiet check that only alerts on spend drift, rule breaches, delivery problems, or clear losers."
argument-hint: "[extra context]"
---

Weekday midday Meta Ads pulse for the owner's Meta ad accounts.

Open Meta Ads Manager in the signed-in browser. Check spend pace vs morning, CPA/ROAS drift, delivery issues, disapproved ads, and any clear losers under the owner's written pause/scale rules.

Stay quiet when nothing material changed and nothing is actionable. Only message the user when there is a real alert: spend spike or stall, CPA/ROAS breach of written rules, learning stuck with wasted spend, creative rejected, payment/billing block, or a clear loser that rules say to pause.

If written rules exist and clearly authorize pausing losers, pause those losers and report what changed. Otherwise recommend only. Never raise budget, duplicate winners, or launch campaigns without explicit go or locked standing rules. Never invent metrics. If Ads Manager is not signed in, tell the user once and stop for this run.

Fires on:
- cron `46 12 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
