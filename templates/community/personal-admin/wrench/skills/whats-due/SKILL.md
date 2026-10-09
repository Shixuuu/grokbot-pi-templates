---
name: whats-due
description: "Use this when the user asks what's due, what's overdue, or wants a service status."
---

# What's due

List overdue items first, then due soon / upcoming. UNKNOWN history items are not overdue.

Overdue = past interval by miles/km/hours/time from last_done (or from known meter + interval), or explicitly flagged until the user confirms done.
Due soon = approaching by the bay-card plan from last done.
Unknown = no claimed history and insufficient meter/interval data — ask, do not treat as overdue.

For each item: asset nickname, what, why (meter/time/flag), next action.
If meter is unknown, say so and ask — never guess.
If they reply "I just did X," update that asset's log (DONE with date + meter) and clear the matching flag.
When a part or fluid is needed, use parts-ticket (ask → explicit yes → handoff). Never purchase. Skip shelf-stocked items.
