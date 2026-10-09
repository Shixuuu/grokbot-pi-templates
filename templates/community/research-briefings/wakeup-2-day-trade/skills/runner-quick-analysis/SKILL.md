---
name: runner-quick-analysis
description: "Analyze, Dig, or qa $TICKER, a bare ticker, layout, desktop or mobile mode, or a bare 0."
---

# Small-cap runner quick analysis

A three-minute first pass on a sharply moving small cap. Deeper work is runner-deep-dives. No buy/sell/hold. Never invent prices, float, short interest, filings, clinical results, partnerships, or contracts. Cite source and date. Recent filings and news first. Drop anything unreliable. Tag Confirmed, Company claim, Speculation, or Estimate. Remember the active ticker.

## Scripts
Before any helper, the five files in /workspace/runner-watch/ must match this SHA-256 for v1.1.0 of derekshi/wakeup-2-day-trade-scripts: prefetch.py 39863ef0548b314224a4bf632c9090065cc473a573ac34fd1653a515ee1f3a9d; snapshot.py e7f3ecfd0008674560d9f544f16927e9bb4a51bb12d0f43505f7c3803770dd4c; chart.py 244bd3ddeef6b1d79245906fed3c49e61bc8e50a3d2ac6c2c915a8d0a1871389; scorecard.py d665a95d05ad2955332539bf38a81f2681e28896731a26050c14c1006175dfb6; price_range.py 13168c277adf677e2e4af2de0eb71578348b86368099488597af0c6772f027d6. Check once per conversation. Download from https://raw.githubusercontent.com/derekshi/wakeup-2-day-trade-scripts/v1.1.0/<file> only if the hash fails. Do not pin any other prefetch hash. Do not invent scripts. If download or verify fails, stop and say so; do not run an unverified file. Chart, scorecard, and price_range need matplotlib, mplfinance, and pandas; if install fails, continue without images. prefetch.py uses SEC_USER_AGENT or else RunnerAnalyst research contact@example.com.

## Triggers and layout
Analyze, Dig, or qa $TICKER (optional slash, any case) or a bare ticker runs this skill. Menu numbers are 1–10. A bare 0 toggles layout and is never a deep dive. desktop mode or mobile mode writes that word to /workspace/runner-watch/layout-mode.txt and confirms in one line. layout sends a two-button widget (Desktop layout, Mobile layout) and ends the turn. Read the file at the start of every report. Missing or invalid means mobile, the default. Mobile: no table wider than 2 columns; stacked blocks; Bear, Base, Bull, and Momentum separated by ---. Desktop: tables, with valuation columns Scenario, Rough Price Range, Implied Market Cap, and What Gets It There (share count in that last column) and Momentum last; snapshot Metric | Value; dilution instruments; catalyst calendar; Compare as Metric | Ticker A | Ticker B.

## Delivery
Live chat: ack ("Researching $TICKER — first look in a few seconds, full report in a few minutes"), then you run prefetch.py and snapshot.py yourself, not in the background, so the first look lands in about 15 seconds, a Quick Read at about 60 seconds, then three messages. A routine or scan sends only the full report.

prefetch.py writes summary.json for that ticker and date. If it fails, say the snapshot is unavailable. The 15-second message is snapshot.py markdown verbatim: one latest filing (skip Form 4; flag financing forms and reverse splits) and one headline. Strip the CHART: line and attach that PNG. The Quick Read, about 60 seconds, has no image: why it is moving, with source and time, the dilution flag, and a catalyst first read. Do not value the stock there. If those calls later change, message 1 adds one Update vs Quick Read line.

Three back-to-back messages. Attach images in order. No markdown image syntax.
Message 1: freshness stamp, headline, optional update, what the company does, and the scorecard.
Message 2: valuation (Bear, Base, Bull, and required Momentum), footnote, optional dilution note, peers. Price-range PNG first, then the chart. If the price-range render fails, send the chart only and no note. If the chart fails, write Chart unavailable and still attach the price-range PNG.
Message 3: Key risk quote through Bottom Line quote. Live chat: disclaimer at the end, no typed menu, then the layout line as its own message, then the widget last. Routine menu is one typed line before the disclaimer, and no widget. Desktop: 🖥️ Layout: desktop · type 0 to switch to mobile. Mobile: 📱 Layout: mobile · type 0 to switch to desktop. Not a button. The same line precedes the More… widget. Routine, scan, and saved files skip it.

## Research and valuation
If filings show a token or digital asset as a main treasury holding, check that token's move today and cite the source and date before calling the catalyst unclear. Call it a record high only when the source says so. Do not invent the token price. Start from today's summary.json. Recent filings and news before older history. Reconcile shares, cash, burn, and debt with later offerings. StockAnalysis.com first (may be delayed), then Finviz; Yahoo only for 5-minute bars. A pasted price wins. If the market is closed, say Last Session Move. Red flags only when sourced. If sources conflict, say so.
Short interest needs a settlement date that still matters; otherwise omit it or mark it stale. Adjust for a later split and say so. Never guess float or the date.
Fully diluted shares are cover-page basic plus pre-funded warrants, warrants struck up to about 1.5x price, convertibles at their conversion price, and a realistic ATM or shelf draw over 12–18 months. Exclude employee options by default and say so. Each of Bear, Base, and Bull has a per-share range and a market cap, or "Not reliably estimable". Never fabricate. Pending merger: value the post-deal company; Bear is a failed deal.
Momentum is required. It is temporary, not value, and it stays out of the dilution math. Base it only on sourced prior spike highs and dates, run size, and float versus relative volume. If it is not a low-float runner, write ⚡ Momentum · n/a · not a low-float runner. Prices are on today's split-adjusted basis. Mention a reverse split only when one happened in the last 12 months. Two to four sourced peers, or say none were sourced.

## Cards and sections
Color only dilution (Low to Very High), catalyst (Strong to Unclear), and runway (over 24 months down to under 6), on those words, the scorecard, and the Key risk panel.
Write card.json and run scorecard.py --json with the same facts; unsourced fields are n/a. A failed render means message 1 has no image and no note.
Write price_range.json and run price_range.py --json. Do not draw it yourself. Bear, Base, and Bull are scenario cards. Momentum is a thin orange track above the price bar, with a gap, not overlapping the bar. If momentum is n/a, omit lo/hi so the track is hidden. Each case has lo, hi, optional cap, and a driver that is not buy or sell language. A failed render means message 2 gets the chart only.
Stamp time in PT, the price source, and the latest filing. Headline: the move, the reason, and the single biggest risk. Mobile valuation uses --- between Bear, Base, Bull, and Momentum (temporary, not value). Desktop uses the table, including Momentum. Footnote: speculative scenarios, not price targets; momentum is not a forecast.
Message 3 opens with one Key risk quote, then snapshot, why it is running, catalyst strength, dilution and cash (only items that exist), red flags, what could kill or keep the move, and the Bottom Line quote (why it is moving, upside, immediate risk, next watch, and no buy/sell/hold). Only those two sections are quotes. Disclaimer: Speculative research, not investment advice.

## Menu
Live-chat widget last, end_turn true, at most six options: 1 Dilution, 2 Catalyst, 3 Valuation, 4 Runner Setup, 8 Upcoming Catalysts, and More… (Show the full deep-dive menu for $TICKER). More… prints the typed 1–10 menu, the layout line, then 5 Financial Survival, 6 Business/Pipeline, 7 Previous Runs, 9 Compare, and 10 Full Report. Routine line: 🔍 Reply: 1 Dilution · 2 Catalyst · 3 Valuation · 4 Setup · 8 Upcoming · 10 Full Report. A saved file keeps the typed 1–10 list.
