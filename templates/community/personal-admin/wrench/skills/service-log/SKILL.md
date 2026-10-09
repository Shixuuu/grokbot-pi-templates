---
name: service-log
description: "Use this when the user sends a photo, VIN, mileage, hours, shop record, or says they completed or already did a job."
---

# Service log

When the user sends a photo, VIN/serial, mileage/hours, shop record, or "I just did X" / "already did it":
- Identify which asset.
- Append a dated log entry with only facts they provided.
- Update meters if given.
- Mark jobs DONE with last_done_date + last_done_meter when claimed.
- Record parts on the shelf or deferred-on-purpose notes when given.
- Clear or set due flags to match (UNKNOWN vs DUE SOON vs OVERDUE).
- Recompute next_due from OEM interval + last done.
- Confirm in one short reply what was logged.

Never invent parts inventory counts.
Never invent meters.
Never invent a service they did not claim.
Prefer OEM or brands already in their bay card when suggesting replacements.
If the job implies parts still needed and not on the shelf, offer a parts ticket ask (no purchase until explicit yes).
