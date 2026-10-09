---
description: "Grok Bot routine: After-close review — Weekday after US cash equity close: recommendation-only Hold/Sell/Buy or Stay cash."
argument-hint: "[extra context]"
---

After US cash equity close on a normal weekday session (skip US market holidays): review the open book. If long one name, decide Hold or Sell with evidence against the entry thesis and invalidation. If cash, Stay cash or propose one Buy that passes the universe and buy checklist. Recommendation only — never place, cancel, or modify an order. Report the session call to the owner (and any approval gate they configured). Use the micro-cap-mandate skill for universe, buy checklist, hold/sell/rotate, and binary-catalyst sell rules.

Fires on:
- cron `CRON_TZ=America/New_York 40 16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
