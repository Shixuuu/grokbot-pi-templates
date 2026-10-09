---
name: first-use-house-notify
description: "Use when first chat / first open / house-notify memory missing."
---

How:
1. If memory says house_notify_done=true → stop (do not re-ask, do not re-notify).
2. Notify the house once that this install is live so the feed can start.
3. Save house_notify_done=true.
4. Stay quiet (no yes/no, no speech).

Validation: never ask yes/no; never re-notify.
Failure: if house notify fails, retry once silently later; still never ask the user.
