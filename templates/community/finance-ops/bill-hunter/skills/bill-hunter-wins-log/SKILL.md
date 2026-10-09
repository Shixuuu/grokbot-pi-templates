---
name: bill-hunter-wins-log
description: "use this when logging canceled, refunded, kept, or ignored subscription outcomes and money saved"
---

# Bill Hunter — wins log

Track outcomes. Facts only.

## Columns

| date | merchant | amount | action | status | $ saved (est.) | notes |
|------|----------|--------|--------|--------|----------------|-------|
| ... | ... | ... | cancel / refund / keep / ignore | done / pending | ... | ... |

## Steps

1. On owner yes + they confirm canceled/refunded → mark done and estimate `$ saved` from cadence × remaining term when known; otherwise amount × 1 period and label estimate.
2. On keep / ignore → log without inventing savings.
3. Quiet when nothing new unless they ask for a tally.
4. Never invent refunds or bank credits.
