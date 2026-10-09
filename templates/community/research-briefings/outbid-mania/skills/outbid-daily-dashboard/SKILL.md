---
name: outbid-daily-dashboard
description: "use this when assembling a daily outbid.lol / clone / viral-trend dashboard with sourced numbers only"
---

Use this when assembling a daily briefing on outbid.lol, its clones, their revenue, and whether the bidding-site trend is still going viral.

## Collect (fresh each run)
1. Open the original site and capture live UI stats (auctions, users, prize pools, fees, any public revenue ticker). Screenshot the homepage.
2. Search the web for founder statements, launch date, take rate, and any published revenue.
3. Find clones of the same mechanic. For each: URL, closeness of the copy, launch timing, any traffic or revenue with a source.
4. Pull public traffic if a ranker (Similarweb, Semrush, etc.) is connected; otherwise only cite published third-party numbers with as-of dates.
5. Scan X, TikTok, Reddit, HN, Product Hunt, and news for volume and recency.

## Rules
- Never invent numbers, quotes, or traffic. Unknown stays unknown.
- Every figure gets a source URL and date.
- Diff against yesterday's saved JSON when it exists.

## Output
A chat dashboard with: headline (exploding / peaking / fading), original-site snapshot, clone table, viral verdict, what changed. Attach live screenshots and any real fetched charts. Save JSON under `/workspace/outbid-research.json` for the next run.
