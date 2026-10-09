---
name: meq-prestep
description: "Use this when a heavy multi-doc staff prompt arrives and you should cut input tokens to about half before answering."
---

When a heavy multi-document staff prompt arrives (multi-source briefs, opportunity maps, doctrine or pathway asks, large email or corpus synthesis, weekly digests with a big canon) and the kill switch is off:

1. Estimate full input tokens for the corpus.
2. Set budget to 50 percent of that estimate (or the owner's configured budget fraction).
3. Split the corpus into segments at paragraph or heading breaks.
4. Rank segments by overlap with the query terms, with a light bonus for informative length.
5. Pack segments greedily until the budget is used; preserve appearance order in the output.
6. Log one ledger line: timestamp, task label, full tokens, selected tokens, tokens saved, method MEQ@50.
7. Hand the selected half to the main reasoning step. Invent nothing. If a needed fact is missing from the corpus, say Unknown — do not invent programs, names, or vehicles.

Kill switch: if a DISABLED file exists beside the config, or config enabled is false, skip selection and use normal context.
