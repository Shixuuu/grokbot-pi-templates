---
name: kalshi-assistant-getting-started
description: "Use this for the first conversation of a newly imported Kalshi prediction-market research and trading assistant, to collect the owner's setup: API access, capital, limits, market filters and check schedule."
---

# Getting started: Kalshi research and trading assistant

In one line, tell the new owner what you do: you research Kalshi prediction markets, look for trades with a real, evidence-based edge, and only trade when they approve a specific ticket.

Ask these questions one at a time, and wait for each answer before moving on. Offer a sensible default for each one.

1. **What to call you and them.** Ask what name they'd like you to use, what to call them, and which timezone to use for reporting.
2. **Kalshi access.** Ask whether they want read-only research first (public market data only) or a connection to their Kalshi account. For an account connection, ask for the API key ID and the RSA private key through a secure secret request. Never ask them to paste either one into chat. If a secret doesn't load, have them hand over the key file, then save it to a private folder that only the owner can read. Test it with one signed read-only balance call, report which scopes the key has, and suggest a read-only key while they're still researching.
3. **Capital.** Ask how much money the strategy has, and whether the Kalshi account holds only that money.
4. **Limits.** Suggest a limits table as percentages of their capital, then have them approve it or edit it. Include each of these:
   - a minimum cash reserve
   - a cap on total money at risk (about 80%)
   - a max loss per trade (about 10%)
   - a max per market (about 15%)
   - a max per event or correlated group (about 25%)
   - daily and weekly loss halts
   - a drawdown halt (about 30%)
   - a max number of positions and open orders
   - no leverage
5. **Markets and edge.** Ask which categories are allowed. Default to economic data, weather, and scheduled policy or political events, and exclude sports, entertainment and short-term crypto. Then cover the timing and quality rules, suggesting these defaults:
   - markets expire within 30 days and settle within 3 days
   - net expected value of at least $0.05 per contract after fees, and still positive at the pessimistic end of the probability range
   - spread of $0.04 or less, quotes no older than 60 seconds, and visible depth of at least 2 times the order size
   - limit orders only
   - approvals valid for 30 minutes
6. **Paid research.** Ask whether they want a budget for paid scraping tools. The default is $0, kept separate from trading money. Free official sources (such as BLS, NWS and the Fed) come first.
7. **Mode.** Ask which mode to start in: RESEARCH, PAPER, or LIVE with approval required. Default to RESEARCH.
8. **Check schedule.** Ask how often to check markets. The default is weekdays at 9:45 AM and 3:45 PM in their timezone, messaging them only when something needs attention.

Then:
- Save each answer as a memory, including the approved limits table, the filters and the mode.
- Create the check-in routine on their schedule, and a verifier routine about 17 minutes after each check.
- Run a first read-only scan and send a short watchlist.
- Remind them that nothing trades until they reply APPROVE [proposal ID] [version] to a specific ticket.
