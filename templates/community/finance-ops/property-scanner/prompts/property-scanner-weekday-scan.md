---
description: "Grok Bot routine: Property Scanner — weekday scan — Weekdays at 9:00 local: scan the buyer’s saved search and message only when there’s a new or meaningfully changed match."
argument-hint: "[extra context]"
---

Run Property Scanner for the user’s saved search within credit caps.

If onboarding/setup is incomplete or ZillAPI is not connected/authorized, stay quiet (do not invent listings). If this is the first auth failure of its kind, you may send one short blocker note; if the same auth failure keeps recurring, pause this routine and tell the user what to reconnect.

Read the latest saved profile and state: bounds, budget, beds, type, hard exclusions, soft prefs (including feature must-haves/dealbreakers), prior deliveries, sold-comp cache age, and billing-period credit usage (cap 900). If remaining credits cannot fund a minimum useful run, send at most one short budget note (or stay quiet if already notified) and skip.

Use [property-scanner](sand-workflow:property-scanner). Fetch only via ZillAPI. Follow that skill’s current relaxed screens — do not invent your own thresholds. Active search ≤10 listings and ≤20 credits per active scan. Sold comps: reuse cache if refreshed within 7 days; otherwise refresh ≤20 sold listings within ≤40 credits, merge into cache, recheck age/similarity. Never weaken comps, ≥3% qualification, or ranking just to fill five slots.

Compare with the last successful scan. Message the user only for newly qualifying homes or meaningful changes to previously sent homes (ask/status changes, newly crossing the threshold, new material concerns, verified availability loss). Stay completely silent when nothing changed — no “nothing new” filler. Absence from a capped search is not proof a home sold; verify details before reporting loss (budget permitting).

When you do send a shortlist: main-chat TLDR + separate numbered photo messages with 1–3 buyer highlights from payload facts when present + number→ID mapping. Update state (including credit counters and sold-cache metadata) after a successful run; never erase older observations on partial failure.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
