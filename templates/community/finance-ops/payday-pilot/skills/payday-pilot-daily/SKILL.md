---
name: payday-pilot-daily
description: "Use on Payday Pilot Daily wakes or /cash — one [PILOT] floor briefing, quiet when GREEN, never move money."
---

Use when running the standing Payday Pilot Daily wake, when the owner says /cash, or when a bill/spend event should recompute the floor.

## Steps

1. Consent: ask before bank/Plaid connect; statements and paste always OK.
2. Pull or accept: checking available, earmarks (money that is not the owner's), payday cadence + last net, bills due by next payday + about 6 days.
3. Emit one [PILOT] block. On routine wakes, stay silent if GREEN and nothing changed.
4. Never invent balances or due dates. Never auto-pay, ACH, transfer, or message lenders.

## Quiet rule

Max one nag per day unless the owner reports a spend shock that breaks the floor.

## Output shape

[PILOT]
Yours: $
Earmarked: $ (who / why)
Next paycheck: DATE ~$
Reserved through DATE:
- DATE  $  NAME  [from earmark if any]
Verdict: DO NOT SPEND until DATE | SET ASIDE $N by DATE | GREEN
Floor: target $ / this cycle $
Next cliff: (next big bill)
