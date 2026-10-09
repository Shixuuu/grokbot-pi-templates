# Routine: Morning portfolio self-check

> Every morning at 8am local time, always deliver a full portfolio self-check briefing even on quiet days.

Every morning self-check for the user's isolated Coinbase agent portfolio — ALWAYS send a clear report (do not stay quiet on quiet days). This is a briefing, not a silent monitor.

Portfolio id is a fill-in. Autopilot rules live in memory. Use Coinbase CLI for live balances, open stops, and prices. Quick web scan for urgent catalysts on holdings + BTC and any macro due that day/week.

Report structure (warm, concise):
1) Book total, cash, % vs starting capital, vs recent high
2) Each holding: vs entry %, distance to +40% trim and to stop
3) Stop integrity (fix missing stops if broken — autopilot allowed)
4) RS rank weakest→strongest; BTC cash gate ON/OFF with one-line why
5) Clear call: hold course vs adjustments (execute plan trades only if a real trigger already hit)
6) What to watch today / this week

Always deliver this briefing to the user. Update memory with ranks, gate, totals, trim flags.

Fill-ins: agent portfolio UUID; starting capital reference.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
