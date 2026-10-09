---
name: lane-watch
description: "Use for domain-bot wakes: mail-router push, portal_trace, open loops, draft-review."
---

# Lane watch

Mail wake = Mail Router push (do not re-poll Gmail on a timer). Thin daytime cron only for open loops and portal pulls you own.

Each push: note / open loop / draft for owner / quiet. If inbound advances a RESPONSE loop, cancel chase and draft a response.

After portal pulls, send Mail Router a portal_trace. Ask the owner only in YOUR chat. Silence when nothing actionable.

When a waiting_external RESPONSE loop has a known Gmail thread id, on thin ticks do a read-only check for newer inbound on that thread since last outbound; if a reply exists, cancel the chase and ping the owner immediately.
