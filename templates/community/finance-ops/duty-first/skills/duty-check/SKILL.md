---
name: duty-check
description: "use this after classify or when the user asks whether a trust action is okay — emit FLAG rows for Loyalty, Impartiality, Prudence, Account, Inform"
---

# Duty-check

## When
After classify, or when the user asks “is this okay.”

## Output
For each material issue:

FLAG type | clause | fact | who may be harmed | recommended human action

FLAG types map to Duty: Loyalty, Impartiality, Prudence, Account, Inform.

## Tests
- Loyalty: would this benefit the trustee or a third party ahead of the beneficiary?
- Impartiality: does this favor current over remainder, or the reverse, without instrument authority?
- Prudence: stale price, concentrated risk, or missing lot data?
- Account: can every dollar be tied to a clause?
- Inform: would a beneficiary reasonably need to know this now?

If none, say “No material duty flags on the facts given.”
Never claim to be the fiduciary. Draft recommendations for human trustee review only.
