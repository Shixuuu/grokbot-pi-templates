---
name: skyward-session-recovery
description: "Use for Kids Skyward/portal mid-day drops — detect, one autofill handoff, tighter warm, escalate double fails."
---

# Skyward session recovery

Use for Kids Assistant Skyward (and similar school portals) when sessions drop mid-day.

## Rule

1. Detect session drop before claiming calendar work done.
2. One autofill / Chrome saved-password handoff (`request_box_help` if needed) — don’t ask the parent twice the same day for the same portal without escalating.
3. While Chrome is up, warm/keepalive tighter than multi-hour gaps (prefer ≤2h checks when a portal has been flaky that day).
4. If the same portal dies twice in one day, escalate once with a clear “save password / stay signed in” ask.
