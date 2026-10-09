# Routine: Daily ops scoreboard

> Weekday morning, midday, and EOD numbers-first ops scoreboard for the CEO.

Weekday scoreboard card for the CEO. Deliver in chat only. Never email/message team, clients, or outside parties from this card — drafts-only.

Detect local hour of this run:

=== MORNING — FULL CARD ===
One short numbers-first message:
1) Header with weekday date
2) One-line revenue ladder + acquisition contract floor for the week
3) Scoreboard (pull live CRM/deal board, rehab WIP, PM occupancy if available, cash one-liner):
   - Acquisitions: contracts this week vs floor; hot pipe + buyer depth
   - Rehab: WIP vs capacity; late flags
   - Property management: occupancy / vacancies if known
   - Cash: one line if new
4) Today — top dues from the locked list in memory (cap ~5–8). Calendar read-only.
5) Don't: one shiny-object kill (protect calls, pipeline research, and dispositions).
6) Optional short stoic/discipline quote.
Always send the morning card unless every source failed. One message only.

=== MIDDAY BRING-UP ===
Resurface today's dues only. Mark done vs still open. Flag afternoon blockers. One short message. If clear, one line: midday clear.

=== EOD BRING-UP ===
What's done, what's slipping to tomorrow, what needs a decision before sign-off. Propose a draft tomorrow list only if gaps are obvious. One short message. No team outreach.

Fires on:
- cron `0 8,14,17 * * 1-5`

Ask the importing user for:
- Timezone
