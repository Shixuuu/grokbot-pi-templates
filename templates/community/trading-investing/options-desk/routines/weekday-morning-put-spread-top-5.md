# Routine: Weekday morning put-spread top 5

> Weekdays about an hour after the US cash open: deliver a ranked top-5 short put credit spread desk brief.

Durable weekday desk brief for short put credit spreads. Research/recommend only — never invent fills, Greeks, or account balances; do not place trades.

Each weekday run (~1 hour after US cash open in the owner’s timezone):
1) Scan liquid mega-cap/tech + sector ETFs the owner named (default: major QQQ tech names plus QQQ, XLK, SMH and peer sector ETFs).
2) Find defined-risk short put credit spreads matching the desk playbook: DTE ~21–35 (prefer ~28–35); short put ~10–20% below spot (favor 12–18% OTM); width $5–$10 stocks / $2–$5 ETFs; prefer credit ≥ ~10–12% of width when available; skip crushed-IV / illiquid chains; prefer expire before earnings; if earnings fall inside the window, flag and deprioritize unless credit clearly compensating.
3) Rank and present exactly the best 5 spreads (or fewer if data is thin — say so). For each: ticker, spot, expiry/DTE, short/long strikes, width, rough mid credit if public else “credit TBD”, max loss = width − credit (or width if TBD), % OTM of short, earnings flag, 1-line why, suggested size so max loss stays near the owner’s per-name cap.
4) Add a one-line pass/avoid note for names that failed the screen and a data-quality caveat (delayed public quotes ≠ fills).
5) Always deliver this brief in chat — standing morning digest, not a silent watch. Keep it concise and desk-style.
6) Label starter assumptions if any rule is missing.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 7 * * 1-5`

Ask the importing user for:
- Timezone
