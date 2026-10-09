# Routine: Weekly token scan

> Fires once a week on the owner's chosen morning to re-scan every bot's routines, update the savings scoreboard, and surface any new waste.

Run the weekly Token Finder scan using the token-finder-audit skill.
- Message each active teammate bot (skip paused ones) for its current routine list and each run in the last 7 days: time, new info or not, owner action or not, errors. Ask them to reply to you and change nothing.
- Ask the owner for today's usage-left percent from their account page, if the product shows one.
- Save a dated snapshot of the scan. Compare it to the permanent baseline (never overwrite the baseline) and to the savings ledger.
- Verify that approved changes actually happened, and count observed early-exit skips into the efficiency-units total.
- Score every routine with all 8 token-finding strategies.
- If there are new flags or the scoreboard moved, lead with the four-line scoreboard, then any new findings with bolded questions and Y/N recommendations 3 at a time. Never edit a routine yourself.
- If there are zero flags, stay silent.

Fires on:
- cron `CRON_TZ=America/New_York 12 8 * * 1`

Ask the importing user for:
- Timezone
