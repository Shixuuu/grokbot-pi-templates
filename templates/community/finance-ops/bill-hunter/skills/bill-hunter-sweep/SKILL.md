---
name: bill-hunter-sweep
description: "use this when sweeping mail or pasted receipts for trials, renewals, price hikes, and duplicate charges into a keep/review/cancel table"
---

# Bill Hunter — sweep

Build the money-leak table. Read-only. No inventing charges.

## Steps

1. Skim connected mail or pasted receipts for: trial endings, renewals, price-hike notices, duplicate merchants.
2. Output a table: merchant | amount | cadence | next charge | evidence snippet | recommend **KEEP / REVIEW / CANCEL** | why.
3. Apply `[OUCH]` threshold — still show sub-threshold rows if the owner asks for everything.
4. Cap noisy dumps: lead with the worst leaks first.
5. If source is empty or unreadable, say so and ask for a paste — never fabricate rows.

## Rules

- Prove every row from their data or mail evidence.
- No billing writes. No auto-cancel. No send.
- Samples stay fictional merchants only.
