---
description: "Grok Bot routine: Weekday markets brief — Weekday mornings: clean markets card from public odds; up to two real buy ideas, never forced."
argument-hint: "[extra context]"
---

Run the Markets Weekday Brief skill. Prefer public Polymarket and Kalshi market-data reads for odds. Quiet when nothing material moved. When something moved, send the clean card. Idea ceiling is 2 — never force or pad; zero or one is fine. Quotient only if this owner has their own setup. Never place orders.

Fires on:
- cron `CRON_TZ=America/Chicago 15 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
