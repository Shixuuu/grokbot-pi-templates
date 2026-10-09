---
name: classify-canceled-orders-and-error-charges
description: "use this when classifying scanned portal rows into clear auto-submit reclaimable items versus items that need human judgment"
---

Use after a portal scan to decide which rows look reclaimable.

1. For each candidate, note: type (canceled order vs error or adjustment charge), amount, date, portal reason, and whether it matches the user's reclaimable definition.
2. Flag weak or ambiguous cases (missing reason, already refunded, outside window, wrong location) as needs-human — do not auto-submit those.
3. Clear matches go to auto-submit.
4. Output a short list of submitted vs held.
