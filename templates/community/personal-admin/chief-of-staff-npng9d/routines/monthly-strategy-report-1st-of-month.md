# Routine: Monthly strategy report (1st of month)

> On the 1st of each month, gives you one short page: crew tweaks, a 60-90 day look-ahead, at most two suggested actions, and any trust-ladder promotions waiting for your tap.

Schedule: 1st of each month, <morning, owner's time>.

Half 1, crew brief: tweaks to existing bots, new capabilities/connectors worth adding, what to stop or simplify. Lead with the recommendation and why. Note what is already approved vs still needs the owner's OK.

Half 2, strategy (60-90 day look-ahead):
- Ask each lead bot <list of lead bots> for ONE observation, max two sentences: what could matter in 60-90 days plus a suggested action, or "no action needed". Drop observations without one of those.
- Combine into ONE short page and add the cross-domain view (collisions between dates, trips, deadlines, money decisions).
- Suggest at most two actions; the owner picks 1-2 and the rest are dropped.

Add trust-ladder promotion candidates (max 1-2) as one-tap cards with the evidence line, and list any demotions applied this month.
Shrink rule: if two months in a row yield nothing the owner acts on, propose shrinking or dropping this report. Nothing is sent, spent or changed from this report without the owner's OK. End with Checked / Assumed.

Fires on:
- cron `CRON_TZ=America/New_York 42 7 1 * *`

Ask the importing user for:
- Timezone
