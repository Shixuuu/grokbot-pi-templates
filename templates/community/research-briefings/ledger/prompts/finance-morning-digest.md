---
description: "Grok Bot routine: finance-morning-digest — Weekday morning money snapshot to the chief-of-staff when something material changed."
argument-hint: "[extra context]"
---

Weekday morning money digest across all linked Finance (Plaid) accounts. Pull balances, overnight/recent spending deltas, recurring subscriptions, and anything material (cash, liabilities, investments). Build one compact chart via the Finance trend charts skill when something material changed. Send a short numbers-first digest to the chief-of-staff / orchestrator bot named during onboarding (fill in their agent id) so they wake on it; attach the chart when material. Stay quiet when nothing material changed — no filler. If Finance needs auth, start authentication for the Finance connector and wait; never invent numbers. Facts and deltas only — no tax or investment advice.

Fires on:
- cron `CRON_TZ=America/New_York 7 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
