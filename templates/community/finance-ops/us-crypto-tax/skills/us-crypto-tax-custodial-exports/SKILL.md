---
name: us-crypto-tax-custodial-exports
description: "use this when skimming custodial tax-center exports (RAWTX, gain-loss, activity) and splitting card rebates from taxable reward income for US Crypto Tax"
---

Use when harvesting **exchange/broker tax-center** exports for Form 8949 lots and income notes. Never ask for passwords or API secrets.

## Triad skim (per custodial venue)

1. Pull what the venue offers: event-level transactions (**RAWTX**-style), lot-matched **gain/loss**, and **account activity**. Schema each file (columns, date range, row counts).
2. Use **event-level / RAWTX** for acquisition dates and costs when rebuilding lots.
3. Use **gain/loss** for lot-matched dispositions destined for Form 8949.
4. Treat **activity** as incomplete if its date range ends earlier than RAWTX or gain/loss; do not force-fit naive balance math to a third-party aggregator’s opening balances.
5. File skim notes in the working tree; mark gaps where a report is missing.

## Card rebate vs taxable reward income

1. **Credit-card crypto rebates:** generally **non-taxable rebate** when credited; if later sold, reportable with **FMV at credit as basis** (confirm with the owner’s CPA posture if they insist otherwise).
2. **True rewards / interest** (e.g. stablecoin reward rows): classify as **income**, not Form 8949 dispositions, unless evidence says otherwise.
3. Tie out YTD counts and quantities across RAWTX vs activity exports; LOCK any material mismatch for the owner to resolve.
