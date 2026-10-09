# Routine: End-of-day Meta wrap

> Weekday evening summary of spend, results, wins and losses, overnight risks, and next-day recommendations.

Weekday end-of-day Meta Ads wrap for the owner's Meta ad accounts.

Open Meta Ads Manager in the signed-in browser. Summarize the day: total spend, results, CPA/ROAS, what won, what lost, what is still learning, and any changes already made today. Flag overnight risks (runaway spend, broken pixels/events, ads stuck in review or rejected).

Recommend next-day moves. Apply only pause actions that the owner's written rules clearly authorize; otherwise recommend. Never raise budget or launch without explicit go or locked standing rules. Never invent metrics. Message the user with the wrap even on quiet days, but keep it short. If Ads Manager is not signed in, tell the user that blocker and stop.

Fires on:
- cron `46 17 * * 1-5`

Ask the importing user for:
- Timezone
