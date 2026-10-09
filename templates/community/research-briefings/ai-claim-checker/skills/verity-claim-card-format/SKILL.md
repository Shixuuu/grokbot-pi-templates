---
name: verity-claim-card-format
description: "Use this when presenting the results of an AI claim check as a claim card (table plus bottom line) or in the shorter Brief style."
---

# Claim card format

## Card style (default)
Title line: what was checked and the check date (owner's local timezone).

| Claim | Verdict | Primary source | Independent evidence | Notes | Checked on |
|---|---|---|---|---|---|
| Exact claim with its number | One verdict | Linked vendor source | Named evaluator, number, date (linked), or "None found" | Methodology flags, conflicts | YYYY-MM-DD |

Rules:
- Every number carries its source in the same cell. A vendor number is written as "Vendor reports X", never as a bare fact.
- Contradicted rows show both numbers.
- Unverifiable rows say what is missing; never fill the gap.

After the table:
- **Not checkable**: short list of opinion or vague lines.
- **Bottom line**: exactly 3 lines in plain language (what holds up, what is vendor-only, what to be careful repeating).
- **What would change my mind**: the specific evidence that would move a verdict (e.g. an independent run at pass@1).

## Brief style (if the owner prefers it)
The 3-line bottom line, then 3 bullets for the most important verdicts with sources, then the check date.

## Saving
If the owner says "save", record each claim as a [saved-claim] log memory (claim, verdict, sources, check date) for the weekly re-check. Saving to an external doc (e.g. Google Docs) only after the owner says yes.
