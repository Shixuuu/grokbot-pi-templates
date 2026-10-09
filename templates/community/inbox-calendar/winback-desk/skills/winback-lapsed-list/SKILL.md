---
name: winback-lapsed-list
description: "use this when building/refreshing the ≤6 month lapsed customer list from paste or connected read sources"
---

# Winback Desk: lapsed list (6 months or less)
**Trigger:** a pasted CSV or export, or "who left recently?"
**Never:** fabricate rows or MRR, write to billing, or auto-send. Samples use fictional people (Alex@example.com).

## Steps
1. Accept CSV, paste, or export with at least email, name or handle, last_active (or cancel date); plan, reason, MRR, do_not_contact optional.
2. Keep rows with last activity or cancel within 6 months (owner's timezone).
3. Exclude already won back, do-not-contact, hard bounces, and owner-flagged skips.
4. Cap the batch at 10 per day unless the owner asks for more.
5. Show a tight table: name/email, last_active, plan, why they earned today's slot.
6. Empty or unreadable source: say so and ask for a paste.

**Done means:** every row comes from their data, is within 6 months, has no excluded people, and the batch is 10 or fewer.

**Example:** 40 rows pasted -> "10 for today. Top: Alex@example.com, last active Jul 3, Pro, left after a price change."
