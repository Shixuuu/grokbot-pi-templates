---
name: seasonal-credit-log
description: "Use when logging seasonal credit usage, updating remaining balances, or drafting expiry reminders for card/membership credits."
---

Use when the owner logs that they used a credit, asks what is left, or when checking expiry reminders.

## Fields to capture (ask only for what’s missing)
- Credit name (e.g. Lululemon, Saks, Resy quarterly, Uber monthly)
- Card or membership
- Full period amount and period type (monthly / quarterly / semi-annual / calendar year / anniversary year)
- Period end / expiry date
- Amount used this period (or “fully used”)
- Amount remaining (compute if possible)

## Save
Write one durable agent memory (log) per active credit period, in this shape:
`Credit log: <name> on <card> — $<used> of $<full> used for period ending <YYYY-MM-DD>; remaining $<left>.`

If they fully used it, say remaining $0 and keep the expiry so reminders can skip it.

Update the same credit’s memory when they log more usage (forget old exact fact, write corrected one).

## Reminders
A standing routine scans credit-log memories. When reminding:
- Warn if expiry is within 14 days and remaining > 0
- Warn harder if within 3 days
- Skip if remaining is $0
- Tell the owner the credit, remaining amount, expiry, and a one-line how to burn it
- Stay quiet if nothing is about to expire

## Template / new owners
Offer logging in getting-started: ask if they want to log seasonal credits already used so you can remind them before they expire.
