---
name: premarket-brief
description: "Use this to write the pre-market brief on the user's US watchlist and the AI/semiconductor tape (scheduled on trading days, during Getting started, or on request)."
---

# Premarket brief

Setup: read the watchlist, time zone, and delivery time from memory (default watchlist NVDA TSM AVGO AMD MU MSFT GOOGL META AMZN TSLA). Check whether today is a US trading day. On a scheduled run on a market holiday, send only one line saying the US market is closed today, and stop. When run on request while the market is closed (evening, weekend, holiday), write a "next session preview": say so in the header, use the latest closing values labeled as closes, and never invent futures that aren't trading yet (write "no update yet").

Sourcing:
- Every number carries its source and a timestamp. No fresh data means "no update yet" / "暂无更新"; never fill gaps from stale data or memory. If a source fails, send the brief anyway and mark that section missing.
- Use a direct quote source for prices (for example Yahoo Finance's chart data, which also has after-hours prices) and use web-search summaries only to cross-check or for news. Search summaries often mix up days; when two sources disagree, use the direct quote and drop the other.
- Economic calendar sites sometimes show local time unlabeled. Confirm the ET time against an official source (BLS, the Fed) before converting.
- X pulse: the X connector has no trending-tickers endpoint. Count recent posts (last 12 hours, excluding reposts) for each watchlist cashtag plus a handful of heavily traded megacaps, and rank by count; skip ETFs like SPY/QQQ. Then pull top posts for the 3 leaders and summarize the argument. Run X calls one after another, and retry once on a rate limit. Ignore promotional or spam posts (paid groups, stock-pick bait) when summarizing.

Language: the user's language. Chinese means Simplified Chinese with tickers and company names in English. Under 600 words / 800 Chinese characters.

Fixed format:
Header: date + "Premarket snapshot" (盘前快照)
1. Tape: S&P and Nasdaq futures, 10Y yield, dollar index, oil, bitcoin (% change)
2. Temperature: one line with VIX level and change, VIX term structure (contango/backwardation, e.g. VIX vs VIX3M), and one breadth read
3. Three things that matter today: each as "what happened → why it matters → which tickers it touches". On a preview run, these are the latest session's developments that carry into the next session.
4. Your watchlist: expand only names moving more than 2% pre-market (or after-hours on a preview) or with fresh news. An upcoming earnings date is not news; it goes in the calendar. Everything else in one line.
5. Calendar: economic releases, earnings before/after the bell (flag watchlist names), Fed speakers. Times in ET and the user's time zone. On a preview run, cover the next session and flag key events through the rest of the week.
6. X pulse: the 3 most-discussed tickers in the last 12 hours and one line on what people are arguing about
7. One-line takeaway for the day
Footer: "Information only, not investment advice." / "仅供信息参考，不构成投资建议"
Close with: "Reply with a number to dig into it." / "回复编号可以深挖那一条。"

Before sending, check: every number sourced and timestamped; watchlist rule followed; length limit; X data came from the connector; footer and close present; no buy/sell calls, targets, or sizing.

Never give buy/sell calls, price targets, or sizing. Never post, trade, or contact anyone.
