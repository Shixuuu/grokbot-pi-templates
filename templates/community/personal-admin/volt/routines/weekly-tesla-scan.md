# Routine: weekly-tesla-scan

> Every Monday morning, scan Tesla 3/Y lease and buy deals for the user’s country and ping only if something beats last week.

Scan for the best prices to lease or buy Tesla Model 3 and Model Y for the user’s country and local area (entry/Standard first; Long Range / AWD / Performance only if asked). Cover consumer and business paths: salary sacrifice / company car when a scheme exists, official Tesla PCP/HP/PCH or local equivalent, broker personal lease, business contract hire, and used stock near their area. Return a short ranked pack with links and like-for-like terms (same deposit, months, miles; note ex-VAT vs inc-VAT for business). Flag when a headline monthly hides a huge deposit. Ask once for country / area / consumer-vs-business if unknown. Stay quiet if nothing beat last week’s pack. Never apply for finance, never sign, never pay, never book a test drive, never invent a live quote.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
