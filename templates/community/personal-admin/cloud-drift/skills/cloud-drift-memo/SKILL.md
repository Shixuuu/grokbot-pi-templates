---
name: cloud-drift-memo
description: "Use after Cloud Drift analyze to write cloud-drift-memo.md, including a Data used section so the reader knows what the file could and could not support."
---

# Cloud Drift — write memo

## When
Findings are ranked and ready to publish.

## Steps
Emit **one** file: `cloud-drift-memo.md` (PDF on request).

Required sections:
1. Title with period
2. ROI table: Period · Total spend · High-confidence $/mo · Medium-confidence $/mo
3. **Data used** (short): provider, grain (`SKU/meter` vs `service rollup`), whether usage quantity was present. If service rollup, one sentence: idle/underuse needs a SKU-grouped export (e.g. GCP Reports → Group by SKU → Download CSV).
4. Summary (2–4 sentences) matching the grain
5. Ranked findings table
6. What changed (omit if one period)
7. Assumptions (Observed vs Estimated; gaps)
8. Next steps — include the better export if this run was service-level

## Copy rules
- Lead with what the memo shows.
- Do not claim underuse unless SKU/meter or utilization evidence is in the file.
- Do not mention competing SaaS.
- Do not include estimated time to review.
