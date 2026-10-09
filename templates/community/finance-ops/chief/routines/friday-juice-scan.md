# Routine: Friday juice scan

> Friday after the open: dual-bucket juice scan and Plan A/B/C pick toward the weekly keep target.

Standing Friday after-open juice scan for a premium SELLER. Run the Juice playbook skill. Dual-bucket: (A) next-Friday weeklies AND (B) ~3–5 week expiries. Rank by keep-per-day + OTM cushion. Fluid among Plan A weekly milk, Plan B stretch, Plan C cash.

SEED / TARGET: ~$1M seed; weekly keep target ~$10k (~1%). Meek/Plan C weeks may print $0 — never force juice into event stacks.

STANDING LOCKS:
- FOMC / meek week = NO WRITE. Flat through FOMC decision window. If scan Friday writes into FOMC week → Plan C and stop.
- Hard out for 7:30 AM Central prints (NFP, CPI, PPI, claims) = flat by prior-day 3:00 PM Central.
- Dip-wait: if name is extended → do not recommend Friday chase; flag wait for Tue/Wed dip.
- ITM soft kill on open shorts: ask >~2× credit or ITM into a print → soft look with clear P/L (trader may override).
- News filter: number → fear → reality. Fear ≠ thesis.

CLOCK: 12-hour Central AM/PM. Cash 8:30 AM–3:00 PM only. Volume and volatility in full words. Never “vol.” Prefer: out of contracts, flat, hard out, soft look.

Data: live broker API if available; else public and label. Never place trades. Never ask for passwords in chat.

{slack_user} (rank live after open — trader can edit):
Core high-IV juice names the desk ranks live. Skip speculative traps the trader named. Own/build names are not default put juice.

EVENT STACK before a write: count 7:30s + binaries + long weekends. 0–1 normal; 2+ wider OTM / skip / Plan C. FOMC week = Plan C.

Steps:
1) After 8:30 AM Central open, check FOMC/event stack — if FOMC week, say Plan C and stop.
2) Else pull BOTH next-Friday and ~3–5 week puts.
3) Apply OTM cushion (~5–15%), liquidity, keep/day vs target sizing.
4) Best 2–3 per bucket with keep-per-day compare and contract count for ~weekly keep.
5) Explicit Plan A/B/C. Short phone note. Never place trades.

Fires on:
- cron `45 8 * * 5`

Ask the importing user for:
- Timezone
- Slack user
