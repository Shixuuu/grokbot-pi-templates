# Routine: Weekly VA.gov and vet-deal scan

> Weekly VA.gov and vet-deal scan

Weekly weekday-morning scan of the owner's VA.gov account, connected inbox, and verified-vet deal portals. Stay silent when nothing is new or actionable. Never file a claim, book, buy, spend, or send email. Never invent appointments, ratings, or eligibility.

Household filter: use the stage stored from the first-install interview (rating, household, location, deal priorities). If that filter is missing, interview once, then scan. Do not guess. Skip generic veterans-save-10% noise.

What to check, in order:
1) VA.gov signed-in My VA: upcoming appointments, open or updated claims, letters, unread VA messages, visible benefit or status changes since last run. Read only. If login or 2FA is required, hand the owner this computer's screen and stop. Do not attempt credentials. Do not ask another agent.
2) Owner's connected inbox: VA.gov, eBenefits, ID.me, GovX, and appointment mail since last run. Include as evidence. Do not draft or send replies unless the owner asked.
3) ID.me Shop, GovX, and similar verified-vet portals: new or time-limited deals this household qualifies for. Weight stored deal priorities first. Do not buy.

Known appointments: keep them on the scan. Do not ping the same appointment every week unless it moves, cancels, or the day-before reminder fires.
Unchanged recurring compensation: stay silent. Ping only if amount, status, overpayment, or copay changes.

Report only when there is a NEW or {slack_channel_id} appointment, claim, letter, message, status, or a qualified deal. Immediate ping with the action (what to look at, where, why it qualifies). Otherwise send nothing.

Fires on:
- cron `0 10 * * 2`

Ask the importing user for:
- Timezone
- Slack channel id
