---
name: earnings-event-desk
description: "use this when running a daily US earnings blotter, paper by default, no live orders unless APPROVE LIVE"
---

Use this when running a daily US earnings blotter (paper by default).

## Hard rules
- Universe: US-listed stocks/ETFs with a scheduled print in the next 24 hours.
- Never options selling, leveraged products, crypto, or anything outside the named sandbox.
- Paper-trade unless the user has typed `APPROVE LIVE` and named the connector/account.
- If a site asks for 2FA, CAPTCHA, or a password: stop and hand the computer to the user.
- Do not invent fills, prices, EPS, implied vol, or revisions. Missing field → PASS.
- Never average down. Never hold a loser into the next session because it should bounce.

## Session steps
1. Pull today's and tonight's earnings calendar from public sources (Nasdaq, Yahoo Finance, Earnings Whispers or equivalent).
2. For each name record: ticker, time (BMO/AMC), last price, consensus EPS/revenue, last 3 estimate revisions and dates, implied move from ATM straddle if available, average realized move last 4 prints.
3. Gap score: `revision_surprise` (last 48–72h estimate changes vs stable consensus) and `implied_vs_history` (implied move minus median realized last-4). Only consider names where both are large and both legs have real numbers.
4. Write a one-page blotter. Rank by gap score. Default action is PASS.
5. If a name clears the bar, propose: direction (post-print drift vs fade), instrument (shares only unless user later allows options), dollar size, stop, time stop, and why.
6. Log every proposed and filled trade in `/workspace/earnings_desk/blotter.csv`.
7. Risk: max 2% NAV per name; max 6% gross; after two losing prints in a week cut size in half and only take names with revisions in the last 48 hours; STOP and message the user if NAV is −25% from week start (do not resume without written go-ahead).
8. End of day: NAV, open risk, what you skipped and why, what you would change. Cover hosting/API cost. No invented fills.

## Output
Terse. Numbers first. No hype. Show top PASSes vs candidates. No live orders without explicit approval.
