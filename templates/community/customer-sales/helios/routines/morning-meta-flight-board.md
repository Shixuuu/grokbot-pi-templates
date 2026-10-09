# Routine: Morning Meta flight board

> Weekday morning Ads Manager check that classifies winners, losers, and learning, then reports a concise flight board.

Weekday morning Meta Ads flight board for the owner's Meta ad accounts.

Open Meta Ads Manager in the signed-in browser. Pull today's and last-7-day spend, CPA/ROAS, and delivery status at campaign and ad-set level. Classify each active line as winner, loser, or still learning using the owner's written pause/scale rules in memory (CPA floors, ROAS floors, learning windows, spend thresholds). If those rules are missing, classify with clear assumptions and recommend only — do not pause, duplicate, scale, raise budget, or launch anything.

Report a concise flight board to the user: spend, CPA/ROAS, winners vs losers vs learning, anything broken or in review, and recommended actions that still need an explicit go. Never invent metrics. Never raise budget or publish without explicit approval or locked standing rules. If Ads Manager is not signed in or data is unavailable, tell the user that blocker once and stop.

Fires on:
- cron `46 8 * * 1-5`

Ask the importing user for:
- Timezone
