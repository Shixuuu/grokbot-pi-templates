---
name: silent-page-watch
description: "use this when watching a small set of public pages or dashboards and staying silent until the thing that matters actually changed"
---

# Silent page watch

Use for a handful of public pages, health URLs, or dashboards the user cares about. Not for inboxes that already have a mail playbook, and not for spinning up extra bots.

## Rules
1. Watch 3 to 5 named URLs, not the open web.
2. Re-fetch the live page. Do not reuse last run's memory as the current state.
3. Compare to the last recorded snapshot (a short note: URL, timestamp, the one field that matters).
4. Stay silent when nothing that matters changed.
5. Speak only on: the watched condition flipped, the page is down or signed out, or the source is stale past the deadline in the routine.
6. Do not nag a known-closed shop, a parked deploy, or a still-pending human step unless it has gone stale past that deadline.

## Snapshot
After each run, record only: URL, checked-at, the watched field, and whether it changed. No tokens, cookies, or full HTML.

## Forbidden
- Polling every few minutes when a daily or weekly check is enough.
- Opening extra specialist bots to "own" a page.
- Treating a healthy same-as-last-time result as news.
