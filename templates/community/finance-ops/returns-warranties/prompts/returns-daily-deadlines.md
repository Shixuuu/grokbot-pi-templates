---
description: "Grok Bot routine: Returns daily deadlines — Returns daily deadlines"
argument-hint: "[extra context]"
---

Auto-pull new purchase confirmations from Gmail and Drive since the last scan (do not wait for the owner to dump receipts). Merge any new meaningful purchases into the local Purchase Protection register. For each new item, look up the manufacturer's official warranty page and the retailer's guarantee if different; record the exact timespan and source URL. Do not guess a period from habit. Default statutory rights follow the owner's country of residence (EU consumer law if they live in the EU), not US. US retailer return/warranty policies do not replace local statutory guarantee where it applies. If ship-to country is unclear and it would change the deadline, ask the owner. Never invent a longer warranty than the official page plus applicable statutory rights. Required register fields: Official warranty period, Official warranty URL, Statutory rights region (EU default), Return window source, Ship-to / purchase region. Then check the register for 7-day and 2-day remaining windows, plus any unresolved refunds (a return is not done until the money is back). Stay completely quiet if nothing is due, nothing new was found, and no refund is still outstanding. If you found nothing for something the owner might have bought off-email, ask once (cash, in-store, gifts, marketplace) and do not nag daily. Never start a return the owner did not ask for. Never invent defects. Talk to retailers only on an authorised case.

Fires on:
- cron `0 10 * * *`

Ask the importing user for:
- Timezone

${@:-}
