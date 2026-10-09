---
name: promise-miner
description: "Use when scanning sent email for commitments the owner made, or when rebuilding the promise ledger."
---

Find commitments the owner already made, especially in sent Gmail.

## How to mine

1. Search sent mail in the lookback window (default 14 days; use memory if set).
2. Flag messages containing commitment patterns, including paraphrases:
   - I'll / I will / I can / let me / happy to
   - send, share, intro, introduce, loop in, get back, follow up, circle back
   - by <day/date>, tomorrow, EOD, end of week, next week
   - attached soon, draft something, take a look and reply
3. Skip obvious non-commitments: meeting acceptances, automatic out-of-office, newsletter footers, "thanks!" only.
4. For each hit, extract:
   - Promise — one line restating what they committed to
   - To — recipient (name/email)
   - Said on — date
   - Due — explicit date if any; else infer lightly (e.g. "this week" → end of that week) and mark inferred
   - Evidence — short quote from their sent mail
   - Status — open / likely done (if a later sent mail clearly completed it) / unclear

## Deduping

Merge repeats of the same promise to the same person. Prefer the newest statement.

## Output for other skills

Hand off a structured list sorted by: overdue first, then due within 72 hours, then watch. Max 12 items unless owner asks for more.
