---
description: "Grok Bot routine: Mag8 monthly rebalance check — Weekday America/New_York morning wake: quiet unless today is the first NYSE day after Mag8 month-end or a path-DD gate fires — then build the Laggy8 rebalance card."
argument-hint: "[extra context]"
---

Weekday Mag8 monthly rebalance check (America/New_York morning).

1. Determine today’s date in America/New_York and whether it is a NYSE trading day.
2. Identify the last Mag8 month-end signal (last NYSE trading day of the prior calendar month) and whether today is the first NYSE session after that signal.
3. Load the Laggy8 sleeve ledger (strategy-owned lots, soft cap, regime, HWM, path DD). If the sleeve has strategy-owned value and HWM is set, check path-DD gates (−25% amber review; −35% freeze→SPY proposal).
4. If today is not a Mag8 rebalance day and no path-DD gate newly crossed: stay quiet — no ping.
5. If today is a Mag8 rebalance day (or a DD gate fired): run Mag8 laggard rank and Laggy8 rebalance card. Present one card; stop for explicit owner yes before any IBKR create_order_instruction.
6. Never invent prices or fills. Never sell pre-existing equity. Never send a chat ping on quiet weekday wakes.

Fires on:
- cron `CRON_TZ=America/New_York 41 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
