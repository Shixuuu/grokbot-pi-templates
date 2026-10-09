---
name: strive-sata-daily
description: "Write the weekday Strive brief: ASST (price, mNAV, bitcoin, new shares, insiders) and every Strive preferred (SATA first: today's dividend, rate watch, price vs $100), plus what changed, crossed triggers, a catalyst countdown, coverage math, peer preferreds (STRC, STRF), leadership posts and a prediction-market line. ELI5, one screen, a source on every number. Use for the weekday routine or questions like \"did SATA pay today?\", \"what's the SATA rate?\" or \"what's ASST's mNAV?\"."
---

Goal: a one-screen, plain-English answer for Strive holders. What changed? Did every preferred dividend arrive? Is any rate changing? What did Strive do with the money, and how is ASST valued against its bitcoin? Facts only. Tools come from `btc-treasury-core` (don't edit it; other bots share it). Facts come from `strive-sata-reference`, filing basics from `sec-filing-watch-reference`.

Paths:
- `CORE=/home/box/agent-data/workflows/btc-treasury-core/scripts`
- `SFW=/home/box/agent-data/workflows/sec-filing-watch-daily/scripts`
- `S=/home/box/agent-data/workflows/strive-sata-daily/scripts` (this skill's own helpers: `strive_dash.py`, `prediction_watch.py`, `triggers.py`, `countdown.py`)
- `STATE=/workspace/strive-sata-daily` (box scratch for the prediction-watch files. Create it if missing.)
- If `$CORE` or `$SFW` is missing, rebuild them as `btc-treasury-core` and `sec-filing-watch-daily` explain. If `$S` is missing, rebuild its four helpers (Python 3 stdlib only) from the "Scripts" spec at the end.

Memory:
- Setup: `sec_user_agent`, `timezone`, `delivery`, `extras`.
- Running state: `last_report_et`, `asst_snapshot`, `mnav_history`.
- `sata_rate` = {rate, month, per_day, source}. `pref_rates` = {TICKER: {rate, month or period, per_payment, schedule, source}} for EVERY Strive preferred, SATA included. `known_preferreds` = ["SATA"].
- `triggers`: default {"pref_low": 95, "pref_high": 105, "mnav_warn": 1.5, "mnav_floor": 1.0, "new_preferred": true, "dividend_confirm_by_et": "10:00", "form4_sales": true}. The owner can change any value.
- `calendar`: verified dates, each with a source. `last_week`: Friday wrap inputs.
- Optional `position` = {"ASST": n, "SATA": n, …}, only if the owner gives it. Never put share counts into the template or skill text.

## 1. Collect (a failed source gets one line, never a guess)
1. **Filings:** `python3 $SFW/edgar_watch.py --ua "<sec_user_agent>" --since "<last_report_et>" ASST` (every Strive filing, including preferred ones, is under CIK 1920406). Read the items that matter:
   - The Monday 8-K: `python3 $CORE/edgar_text.py --ua … <doc_url> --grep "purchased"`, then `--grep "Bitcoin held"` for the share table.
   - Rate 8-K: `--grep "Dividend Rate on"`. It covers SATA now and would cover any future series.
   - 1.01/2.03/3.02/3.03/5.03 items (terms, new securities, debt), and any 8-A12B, 424B5, S-3 or FWP that names a preferred.
2. **Preferred discovery (every run):** `python3 $S/strive_dash.py --known <known_preferreds> --ua "<sec_user_agent>"`. It returns the dashboard's `preferredStocks`, SEC's ticker list for the CIK and `new_preferred_tickers`.
   - Also treat as a new series any new 8-A12B, certificate of designation (Ex. 3.x or 4.x) or preferred 424B5 found in step 1.
   - For a new series, read its 8-K and prospectus for: name, ticker, stated amount, rate and how it's set, schedule, cumulative or not, ATM size. Add it to `known_preferreds` and `pref_rates`, and flag it in TRIGGERS. Registered or announced but not issued: say so.
3. **Dividend confirmation, per series:** read @Strive posts since `last_report_et` for "paid a cash distribution" (amount, consecutive count, time → ET). Confirmed means a Strive post or a filing. Never assume. The dashboard's "paid" status is a schedule, not a confirmation. If no post yet: "not yet confirmed by Strive at {time} ET". Payment days come from the latest declaration 8-K table, which skips holidays.
4. **Prices:** `python3 $CORE/prices.py btc` and `python3 $CORE/prices.py stock ASST <every Strive preferred> STRC STRF` (10 daily closes each). For the month-to-date SATA average: `prices.py history SATA --days 25`. Label pre-9:30 AM prices as the prior close.
5. **mNAV:** use the dashboard `evMnav` from `strive_dash.py` (`pulled_at_et`; pulledAtTimestamp is top-level now, and the script also checks the row). Cross-check with `python3 $CORE/mnav.py --snapshot <asst_snapshot> --btc … --stock …`.
   - Show our math only if it differs by more than 0.05x.
   - Update `asst_snapshot` from any new Monday 8-K first. `pref_notional` = the sum over ALL Strive preferreds of shares × stated amount.
6. **Insiders and owners:** run each Form 4 through `python3 $SFW/form4_summary.py`. For each 13D/G: filer, %, change.
7. **Peers:** STRC and STRF (Strategy) price vs the $100 stated amount, plus current stated rate. STRF is fixed at 10.00%. STRC's rate comes from Strategy's latest STRC rate 8-K (EDGAR CIK 1050446, `--grep "rate per annum"`) or strategy.com/strc. Cite which one.
8. **X, read-only** (find the connector's tools with your tool-discovery tool): posts by @Strive, @ColeMacro, @AdamBLiv and @HurdleRatePod since `last_report_et`, exclude replies and retweets (IDs in the reference). Classify each as signal or noise. Optional: the connector's news search for "Strive ASST SATA". Label it "X news summary, unverified" and never use it for numbers.
9. **Prediction markets:** `python3 $S/prediction_watch.py --state $STATE`. NEW Strive/ASST/SATA markets go first in the TL;DR.
10. **Calendar:** update `calendar` with verified dates only (filings, Strive or organizer announcements, MSCI, the Fed). Rate-8-K timing is labeled "pattern". `python3 $S/countdown.py "<date>|<label>|<source>" …` gives the days remaining.
11. **Triggers:** `python3 $S/triggers.py --triggers '<triggers>' --facts '<prices of every Strive preferred, mnav, new_preferred_tickers, dividend_confirmed, payment_day, now_et, form4_sales>'`.

## 2. Math (arithmetic only, always labeled "our arithmetic")
- Yearly preferred dividends = Σ over every Strive preferred of shares × stated amount × current rate.
- Coverage = cash ÷ that, and BTC NAV (BTC × spot) ÷ that, in years, each with its source.
- Always add: "The preferreds aren't collateralized by the bitcoin; rates aren't guaranteed."
- Position (only if `position` is set):
  - "You got $X today" = shares × today's confirmed per-share payment.
  - "$Y this month" = shares × per-share × payments confirmed this month.
  - Value = shares × last price, with its time.

## 3. Write (ELI5, one short paragraph per section, ≤ ~35 lines on a normal day)
```
Strive Daily · {Day Mon DD} · {time} ET
🔄 WHAT CHANGED: {the single biggest change since the last report, with source} | "Nothing changed since {day}."
⏳ COUNTDOWN: {up to 4 verified dates with days left and source, e.g. MSCI results by Oct 16 (18d)}
**⚠️ TRIGGER: …** (only when one is crossed; bold; omit the line otherwise)
TL;DR: {NEW Strive prediction market first if any · dividend status · rate news · biggest Strive change}
🏷️ SATA vs $100: {close vs $100, change vs prior close, 10-day range, time + source}
📈 RATE WATCH: {current rate + month (8-K) · SATA month-to-date average close and days above/below $100 · Strive's own words (stated $99–$101 range intention) · next rate 8-K "due ~{dates} based on past filing times {list}", label it a pattern}
🧾 PREFERREDS: one row per Strive series: {TICKER ${price} vs ${stated} · {rate}% {schedule} · latest payment {confirmed by post/filing at time | not yet confirmed} · weekly 8-K: +{shares} ({≈$ at stated amount}) · news}
🏢 ASST: {close and day change · mNAV (dashboard, time; our math only if >0.05x off) · BTC held and any buy (8-K) · common sold, share-count changes, warrant exercises, buybacks · Form 4s and 13D/G · news}
🛡️ COVERAGE: {yearly dividends of all preferreds · cash ÷ · BTC NAV ÷ · disclaimer}
⚖️ PEERS: SATA ${p} ({r}%) · STRC ${p} ({r}%) · STRF ${p} ({r}% fixed), each vs $100 stated, with sources
💼 YOUR POSITION: (only if `position` is set) you got $X today / $Y this month · value $Z
🗣️ LEADERSHIP: Signal: … Noise: …
📣 APPEARANCES: announced only
📅 ALSO NEXT 30 DAYS: {remaining verified dates in one line}
🎲 MARKETS: {NEW Strive markets, or "No open Strive/ASST/SATA markets on Polymarket or Kalshi ({time})" + MSCI-delisting odds + 2–3 rungs of the BTC 2026 ladder, each "market price x% (vol $y)", "market prices, not forecasts"}
➕ STRC (extra, only if chosen): Strive's STRC stake (8-K) and Strategy's STRC news
Facts from filings and public sources. Not investment advice.
Got an idea to make {bot name} better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSdWgJMqwm0EBy6YZexj1czEbUI8Ox3NaC3r3-kTcSjGZk1wrA/viewform
```
- **Normal-day length:** merge PREFERREDS into one line while SATA is the only series. On non-8-K days, ASST collapses to price + mNAV + "No new weekly update; holdings {n} BTC as of {date}".
- **Rate day** (a new rate 8-K for any series): put it first in WHAT CHANGED and the TL;DR, with old → new rate, per-payment amount, the period it covers and a link.
- **New preferred:** WHAT CHANGED + a bold TRIGGER + a full PREFERREDS row. Mark "registered/announced, not yet issued" when that's the case.
- **Friday:** add a 5-line WEEK IN REVIEW before the footer:
  1. Dividends paid (count, per-share total, confirmed by which posts).
  2. Rate news.
  3. BTC bought.
  4. mNAV from → to (dashboard).
  5. Next week's dates.
  Keep daily sections to one line each that day.
- **Banned:** buy/sell/hold, safe or unsafe, "great yield", cheap or expensive, undervalued, bullish or bearish (except quoting a filed or company statement, labeled), and any prediction of rates, prices or index decisions. Never promote a yield. When yield comes up, give Strive's disclaimer. Prediction markets are "market prices with volume, not a forecast".
- Never mention anyone's location, travel, flights or whereabouts, even if they post it themselves.

## 4. Quiet day ("Nothing changed")
Keep it to 5 lines:
1. "🔄 Nothing changed since {day}."
2. "⏳ {next 2 dates with days left}."
3. "SATA paid ${x} today (Strive post {time}), {r}% through {month}. {other series the same way}. SATA ${p} vs $100."
4. "ASST ${p} ({±%}); mNAV {v}x ({source, time}). No new Strive filings since {time} ET."
5. Footer (both lines: the disclaimer and the feedback line).
Add a bold TRIGGER line if one is crossed, or the Friday wrap on Fridays.

## 5. Q&A
Answer in two sentences with sources.
- **Feedback:** every report (normal, quiet, Friday, early alert) ends with the feedback line: "Got an idea to make {bot name} better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSdWgJMqwm0EBy6YZexj1czEbUI8Ox3NaC3r3-kTcSjGZk1wrA/viewform". {bot name} is this bot's current profile name. Whenever someone says they have an idea, a feature request or feedback, thank them and give them that link.
- "Is it safe / should I buy?": "I can't judge safety or give advice. Here's what's declared and what Strive holds: …"
- "Other preferreds?": list `known_preferreds` with status and source.
- "What's my dividend?": use `position` if set; otherwise ask for a share count and keep it in memory only.

## 6. Finish
- Save `last_report_et` (only if EDGAR succeeded), `asst_snapshot`, `sata_rate`, `pref_rates`, `known_preferreds`, `mnav_history` (append date, evMnav, source), `calendar` and `last_week`. Leave `triggers` and `position` unchanged unless the owner asks.
- Report every failed source in one line (e.g., "Dashboard JSON unavailable at 9:46 AM ET; mNAV is our math from the Sep 25 8-K").

## Scripts (rebuild spec)
The four helpers live in `$S/`, Python 3 stdlib only (urllib, json, argparse, zoneinfo). Every HTTP call sends a User-Agent, accepts gzip, times out (30–60 s) and sleeps 0.15 s. Each prints JSON (or plain lines) and reports failures in an `errors` list instead of crashing or guessing. Times are America/New_York.

**strive_dash.py** `[--days 10] [--known SATA …] [--ua "<sec_user_agent>"]`
- GET `https://strive.com/treasury/api/dashboard/calculated?fromDate=<today−(days+5)>&toDate=<today>&currency=USD&stockSymbol=ASST` (public, undocumented; may change).
  - Rows: `data.btcHoldings` (daily). From the last row output `mnav` = {date, evMnav, marketCapVsNav, sharePrice, btcPrice, btcHoldings, cash, marketableSecurities, debt, preferredStockMarketCap, sharesOutstanding, source}.
  - `pulled_at_et`: read **top-level `pulledAtTimestamp`** (ms epoch) first, then `data.pulledAtTimestamp`, then the last row's field; convert to ET.
  - `mnav_trend` = [[date, round(evMnav,3)]] for the last `--days` rows.
  - Top-level `preferredStocks` → `preferreds` (ticker, dividend_rate, shares_outstanding, notional_value, stated_range_min/max, date, use_in_calculations). Tickers there and the keys of `data.preferredStockPrices` go into a `seen` set.
- GET `https://strive.com/treasury/api/dashboard/base-data` → `data`:
  - `preferredDividends` sorted by payDate → `sata_divs` = last 5 with status "paid" + next 3 others (ticker, payDate, recordDate, cashAmount, status) and a note that it's a schedule, not a confirmation. Add their tickers to `seen`.
  - `latest`: first row of `shares` (date, class_a_common, class_b_common, fully_diluted_shares, traditional_warrants, source_url), `cashDebt` (date, cash, debt, marketable_securities), `transactions` (transaction_date, type, btc_amount, cost, source_url). `settings`: mnav_calculation_method, sata_prospectus_url.
- With `--ua`: GET `https://data.sec.gov/submissions/CIK0001920406.json`, output `sec_tickers`, add every ticker except ASST to `seen`.
- `new_preferred_tickers` = sorted(seen − known − {ASST}).

**prediction_watch.py** `--state <dir> [--regex "\b(strive|ASST|SATA|semler|SMLR)\b"]` (case-insensitive; takes a few minutes)
- Polymarket, keyset pagination: GET `https://gamma-api.polymarket.com/events/keyset?closed=false&limit=100[&after_cursor=<c>]`; events are in `events` (or `data`); loop with `next_cursor` until it's empty or a page has no events. Match the regex on event title + slug + every market question; for each open matching market record platform, id=slug, question, yes_pct, volume (USD), url `https://polymarket.com/event/<event slug>`. Price = mid of bestBid/bestAsk if the spread ≤ $0.10, else lastTradePrice.
- Kalshi events scan: GET `https://api.elections.kalshi.com/trade-api/v2/events?status=open&limit=200&with_nested_markets=true[&cursor=<c>]`, sleep 0.3 s, loop on `cursor`. Match on title, sub_title, event_ticker and each market's title + yes_sub_title. Price = mid of yes_bid_dollars/yes_ask_dollars unless bid is 0 and ask ≥ 0.99, else last_price_dollars; volume = volume_fp (contracts); url `https://kalshi.com/markets/<series_ticker lower>`.
- Related context (Polymarket `GET /events?slug=<slug>`, open markets only): the "will-microstrategy-be-delisted-from-the-msci-index-by-march-31" event (or its current successor), and "what-price-will-bitcoin-hit-before-2027" filtered to market slugs containing reach-90000/100000/110000/120000/150000 and dip-to-70000/60000/50000. Slugs roll over; if one 404s, search for the current one and report it.
- Retry HTTP 429 up to 8 times with 3 s × attempt backoff.
- State: copy `<state>/prediction_watch.json` to `prediction_watch_prev.json`, then write the new file {as_of_et, counts (events scanned per platform), strive_hits, related, errors}. Each hit gets `new: true` if its id wasn't in the previous run's hits. Print NEW hits first.

**triggers.py** (prints only crossed triggers):
```python
import argparse, json
DEF = {"pref_low": 95, "pref_high": 105, "mnav_warn": 1.5, "mnav_floor": 1.0, "new_preferred": True, "dividend_confirm_by_et": "10:00", "form4_sales": True}
p = argparse.ArgumentParser(); p.add_argument("--triggers", default="{}"); p.add_argument("--facts", required=True); a = p.parse_args()
t = {**DEF, **json.loads(a.triggers)}; x = json.loads(a.facts); out = []
for tk, px in (x.get("prices") or {}).items():
    if px is None: continue
    if px < t["pref_low"]: out.append(f"{tk} ${px} is below ${t['pref_low']}")
    if px > t["pref_high"]: out.append(f"{tk} ${px} is above ${t['pref_high']}")
m = x.get("mnav")
if m is not None:
    if m < t["mnav_floor"]: out.append(f"ASST mNAV {m}x is below {t['mnav_floor']}x (valued below its bitcoin)")
    elif m < t["mnav_warn"]: out.append(f"ASST mNAV {m}x is below {t['mnav_warn']}x")
if t["new_preferred"] and x.get("new_preferred_tickers"): out.append("New Strive preferred: " + ", ".join(x["new_preferred_tickers"]))
if x.get("payment_day") and x.get("dividend_confirmed") is False and (x.get("now_et") or "00:00") >= t["dividend_confirm_by_et"]:
    out.append(f"No dividend confirmation post from @Strive by {t['dividend_confirm_by_et']} ET")
if t["form4_sales"]:
    for s in x.get("form4_sales") or []: out.append(f"Insider sale (Form 4): {s.get('owner')} {s.get('shares')} sh {s.get('url','')}")
print(json.dumps({"crossed": out, "thresholds": t}, indent=1))
```
Facts keys: prices {TICKER: price} for every Strive preferred, mnav, new_preferred_tickers, dividend_confirmed, payment_day, now_et "HH:MM", form4_sales [{owner, shares, url}].

**countdown.py** `"YYYY-MM-DD|label|source" …`:
```python
import sys, datetime as dt
from zoneinfo import ZoneInfo
today = dt.datetime.now(ZoneInfo("America/New_York")).date(); rows = []
for arg in sys.argv[1:]:
    d, label, src = (arg.split("|") + ["", ""])[:3]
    day = dt.date.fromisoformat(d); n = (day - today).days
    if n >= 0: rows.append((day, f"{day:%b} {day.day} ({'today' if n == 0 else str(n) + 'd'}) · {label} · {src}"))
print("\n".join(r for _, r in sorted(rows)) or "(no upcoming verified dates)")
```
Output: "Oct 16 (18d) · MSCI results (on or before) · source", sorted, past dates dropped. Pass only dates from filings, company or organizer announcements, or clearly labeled filing patterns.
