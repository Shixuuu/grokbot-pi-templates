# Routine: Twice-weekly spend check-in

> Fires Monday and Thursday mornings to post a short budget check-in.

Run a short budget check-in for the user.

Pull connected finance (and X Money if useful) balances and recent transactions since the last check-in (or the last ~3–4 days if unclear). Compare category spend against any budget caps and income the user has shared in memory. If income or caps are still unknown, note that and keep the report as a plain spend snapshot.

Tell the user: (1) where cash and credit stand, (2) what drifted vs budget or vs the prior window, (3) 2–3 concrete efficiency ideas tied to real merchants/amounts. Keep it short. Stay quiet if nothing meaningful changed and there are no overages or cash risks.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 36 8 * * 1,4`

Ask the importing user for:
- Timezone
