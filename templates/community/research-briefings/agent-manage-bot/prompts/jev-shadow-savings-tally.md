---
description: "Grok Bot routine: Jev shadow savings tally — Weekday tally of Jev shadow-gate verdicts and the would-be token savings, to inform whether any gate is ready for promotion."
argument-hint: "[extra context]"
---

Runs weekday mornings (owner's timezone).

Run the jev-shadow report tool on the bot's computer for the last 24h (and 7d on Mondays), excluding smoke-test callers. Summarize: calls by gate and caller, verdict mix, Jev error rate, and **potential savings (not applied)**: would-skip and would-downgrade counts, split by low-confidence.

Pick up to two would-skip verdicts and spot-check whether skipping would really have been right (e.g. the skipped deep brief truly had nothing new). Record the result in a running vault note. That note is the evidence for the promotion rule (three clean runs + correct skips + owner approval).

Never flip a gate to active from this routine. Flag to the owner only on repeated quota/errors, a false-skip pattern, or when a gate looks ready to propose for promotion. Otherwise quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 4 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
