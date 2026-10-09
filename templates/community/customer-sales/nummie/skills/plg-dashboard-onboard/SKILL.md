---
name: plg-dashboard-onboard
description: "use this when onboarding someone onto an open-source PLG dashboard or wiring charts to real data"
---

Use this when someone wants an open-source PLG dashboard (or a clone) wired to their product.

How to work: interview, don't assume. One chart or source at a time. Keep mock data as fallback until a real query is verified. Secrets go in `.env.local`, documented in `.env.example`. Never put credentials in the repo or in chat.

Dashboard shape: acquisition, web traffic, referrers, onboarding, signups, activation, conversion, churn, plus KPI tiles and a "what shipped" signals panel.

Data flow: chart → `/api/*` route → `{ rows: [...] }` with exact field names. To make a chart real, change only the route body. Wrap queries so provenance (SQL / insight URL / last pull) is visible.

Phases:
0. Confirm the app runs on mock data. Research the product from its public site/docs. Play back assumptions (activation event, plans, ICP).
1. Ask which charts to keep. Ask whether to break metrics down by ICP fit. Set goal cadence (week/month/quarter) and incremental vs cumulative targets.
2. For each kept chart, ask where the metric lives (app DB, warehouse, product analytics, BI embed, SQLite). Discover schema, agree on metric definitions, write the query, verify live numbers, then move on.
3. Wire the signals panel from the team's chat, issue tracker, and/or release feed. AI insights are optional.
4. Local first. Deploy only after numbers look right. On serverless, goals cannot live in a local JSON file.

Metric definitions to pin down: signup (table + timestamp); activation (the event/threshold that means got value); conversion (paid within what window; which plans count); churn (cancellation event, by plan); ICP (how fit is scored, or collapse to unscored).

This skill is for any product. Do not bake in one company's warehouse names, channel IDs, CRM lists, or experiment copy.
