---
name: portal-session-keep-alive
description: "Use for Kids school portals — durable session/Chrome password handoff; escalate multi-day expiry."
---

# Portal session keep-alive

Use for Kids Assistant (Skyward, Canvas, club sports portals, and similar school portals).

## Rule

1. Prefer durable session / Chrome autofill / saved password over asking the parent every morning.
2. When login is required: one clear sign-in gate (`request_box_help` / Chrome password save), then verify session works.
3. If the same portal expires across multiple days, escalate once to the parent (don’t silently fail each morning).
4. After claiming calendar updates, verify the write on the calendar before saying done.
