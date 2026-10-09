---
name: btc-treasury-core
description: "Shared engine for bitcoin-treasury company bots (used by strive-sata-daily). Use when a bot needs a sourced BTC or stock price, the company's mNAV by its own published definition, new EDGAR filings or insider trades for one company, or readable text from one EDGAR document."
---

This skill holds generic tools only. Company facts (CIK, definitions, snapshot inputs, people, dates) live in each bot's own reference skill. Never copy those facts into this skill.

Paths:
- `CORE=/home/box/agent-data/workflows/btc-treasury-core/scripts`
- `SFW=/home/box/agent-data/workflows/sec-filing-watch-daily/scripts` (EDGAR scripts from the `sec-filing-watch-daily` skill. Call them; don't copy them.)
- If `$SFW` is missing, write `edgar_watch.py` and `form4_summary.py` from the "Script" sections of the `sec-filing-watch-daily` skill into `$SFW/`. If that skill is also missing, use EDGAR directly (see "Fallbacks").
- If `$CORE` is missing, rebuild it from the script sections at the end of this skill. Python 3 stdlib only.
- Every EDGAR call uses memory `sec_user_agent` from setup (e.g. "Strive Daily you@example.com"). Never hardcode or invent it.

## 1. New filings for one company
`python3 $SFW/edgar_watch.py --ua "<sec_user_agent>" --since "<YYYY-MM-DD HH:MM ET>" <TICKER>`
- Returns form, 8-K items, authoritative ET acceptance time (from `.hdr.sgml`), doc_url and index_url. Insider Forms 3/4/5, Form 144 and Schedules 13D/13G filed about the company show up here too, because EDGAR lists them under the issuer.
- An `error` entry means the fetch failed. Don't advance the bot's cutoff.
- Form 4: `python3 $SFW/form4_summary.py --ua "<sec_user_agent>" <doc_url>` gives owner, role, code, shares, price, holdings after, and the 10b5-1 box.
- 13F isn't filed by the company. Funds file it within 45 days after each quarter ends. Report the deadline, and use third-party 13F aggregators only when the owner asks (label them third-party).

## 2. Read one filing
`python3 $CORE/edgar_text.py --ua "<sec_user_agent>" <doc_url> --grep "<anchor>"`
- Anchors are listed in the company reference skill (e.g. "Aggregate BTC Holdings", "Bitcoin held", "Shares Sold").
- Copy numbers exactly as filed. If a table won't parse, give the link and say so.

## 3. Prices (every value keeps its source and time)
- `python3 $CORE/prices.py btc` returns BTC-USD spot. It tries Coinbase first, then Kraken, then CoinGecko (CoinGecko often returns 429 on shared IPs).
- `python3 $CORE/prices.py stock <TICKERS…>` returns the last price, market time, previous close and 10 daily closes from Yahoo's chart API. That API is **unofficial and can lag about 15 minutes intraday**. Before 9:30 AM ET the "price" is the prior close, so label it that way.
- `python3 $CORE/prices.py history <TICKER|BTC-USD> --days 10` returns daily closes. Yahoo's BTC-USD "daily close" uses the UTC day, not 4 PM ET.
- Stooq's CSV endpoint returned empty responses in Sep 2026 testing. Don't rely on it.
- Always print the time with the number ("MSTR $157.14, 4:00 PM ET close, Yahoo").

## 4. mNAV by the company's own definition
`python3 $CORE/mnav.py --snapshot <snap.json> --btc <price> --stock <price> [--history h.json]`
- `method: net_bps` (Strategy): mNAV = price ÷ Net BTC per share, where Net BTC per share = (BTC × price + USD assets − out-of-the-money debt − out-of-the-money preferred) ÷ fully diluted shares.
- `method: ev_to_btc_nav` (Strive dashboard): mNAV = (fully diluted shares × price + preferred notional + debt − cash − marketable securities) ÷ (BTC × price).
- The snapshot JSON (inputs with `as_of` and `sources`) is built from filings as described in the company reference skill and saved in memory after each weekly 8-K.
- Validate before trusting a snapshot: plug in the company's last published snapshot prices, and the result must match its published mNAV within ±0.02x. If it doesn't, report "our estimate (unvalidated)".
- Always present three things: the value, what it's measured against ("premium to the bitcoin it holds"), and the source label, which is either "company dashboard at <time>" or "our estimate from <filing> + <price source/time>". If the company publishes its own number and you can fetch it, lead with theirs.

## 5. Public posts and appearances (read-only)
- X connector, read-only: `get_users_by_usernames` (check the affiliation badge and bio), `get_users_posts` (id, start_time, exclude=replies), `search_posts_all`, `search_news`. Never post, like, reply, follow or DM.
- Signal vs noise: **signal** = new facts (numbers, dates, filings, product or terms changes, confirmed events). **Noise** = slogans, memes, price-prediction charts, personal life. Opinions are noted as opinions, one line at most.
- Appearances: include only announced public events (conference agendas, podcast releases, earnings calls, the company's own posts). Mark "unconfirmed" if only an aggregator lists it. **Never report or infer anyone's location, travel, flights, jets, or private whereabouts, even if they post it themselves.**

## Fallbacks
- EDGAR down or 403/429: wait 10 min, retry once, then say "EDGAR unavailable at {time}" and keep the old cutoff.
- No X connector: use web search for "<name> site:x.com" plus the company newsroom, and label the posts "via web search, may be incomplete".
- Price feeds down: say "price unavailable" and skip the mNAV line. Never reuse a stale price without its timestamp.

## Script: prices.py
```python
#!/usr/bin/env python3
"""Free, keyless price feeds for bitcoin-treasury bots. Every value carries its source and timestamp (ET).
Usage: prices.py btc                      -> BTC-USD spot (Coinbase; falls back to Kraken, then CoinGecko)
       prices.py stock MSTR ASST SATA     -> last price, market time, prev close, 10 daily closes (Yahoo chart)
       prices.py history BTC-USD --days 10 -> daily closes (Yahoo chart; also works for tickers)
Notes: Yahoo's chart endpoint is unofficial and can lag ~15 min intraday; closes are final after ~4:15 PM ET.
CoinGecko's free API rate-limits shared IPs (429), so it is last in line."""
import json, sys, urllib.request, datetime as dt
from zoneinfo import ZoneInfo
ET = ZoneInfo("America/New_York"); UA = {"User-Agent": "Mozilla/5.0 (btc-treasury-core)"}
def get(u):
    return json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=20).read())
def now(): return dt.datetime.now(ET).strftime("%Y-%m-%d %H:%M ET")
def btc():
    tries = [("Coinbase spot", "https://api.coinbase.com/v2/prices/BTC-USD/spot", lambda d: float(d["data"]["amount"])),
             ("Kraken ticker", "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", lambda d: float(list(d["result"].values())[0]["c"][0])),
             ("CoinGecko", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", lambda d: float(d["bitcoin"]["usd"]))]
    errs = []
    for name, url, f in tries:
        try: return {"asset": "BTC-USD", "price": round(f(get(url)), 2), "source": name, "url": url, "fetched_et": now()}
        except Exception as e: errs.append(f"{name}: {str(e)[:80]}")
    return {"asset": "BTC-USD", "error": "; ".join(errs)}
def chart(sym, rng="1mo"):
    d = get(f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}?range={rng}&interval=1d")["chart"]["result"][0]
    m = d["meta"]; closes = [(dt.datetime.fromtimestamp(t, ET).strftime("%Y-%m-%d"), round(c, 4))
                            for t, c in zip(d["timestamp"], d["indicators"]["quote"][0]["close"]) if c is not None]
    return m, closes
def stock(sym):
    try:
        m, closes = chart(sym)
        t = dt.datetime.fromtimestamp(m["regularMarketTime"], ET)
        return {"ticker": sym, "price": m["regularMarketPrice"], "market_time_et": t.strftime("%Y-%m-%d %H:%M ET"),
                "is_close": t.hour >= 16, "prev_close": closes[-2][1] if len(closes) > 1 else None,
                "closes_10d": closes[-10:], "source": "Yahoo Finance chart API (unofficial; intraday may lag ~15 min)",
                "url": f"https://finance.yahoo.com/quote/{sym}", "fetched_et": now()}
    except Exception as e:
        return {"ticker": sym, "error": f"Yahoo chart failed: {str(e)[:100]}"}
def main():
    a = sys.argv[1:]
    if not a: print(__doc__); return
    if a[0] == "btc": print(json.dumps(btc(), indent=1))
    elif a[0] == "stock": print(json.dumps([stock(s.upper()) for s in a[1:]], indent=1))
    elif a[0] == "history":
        days = int(a[a.index("--days") + 1]) if "--days" in a else 10
        m, closes = chart(a[1].upper(), "3mo")
        print(json.dumps({"ticker": a[1].upper(), "closes": closes[-days:], "source": "Yahoo Finance chart API (unofficial)"}, indent=1))
    else: print(__doc__)
if __name__ == "__main__": main()
```

## Script: mnav.py
```python
#!/usr/bin/env python3
"""mNAV math for bitcoin-treasury companies, using the COMPANY'S OWN published definition.
Usage: mnav.py --snapshot snap.json --btc 83427.61 --stock 157.14 [--history hist.json]
snap.json holds dated, sourced inputs from filings (see the company reference skill), e.g.
 {"company":"...", "method":"net_bps" | "ev_to_btc_nav", "btc_holdings":..., "as_of":"...", "sources":{...}, ...}
Methods:
 net_bps (Strategy, 2026 definition):
   Net Reserve = BTC x price + USD assets - out-of-the-money debt notional - out-of-the-money preferred notional
   Net BTC per share (USD) = Net Reserve / fully diluted shares;  mNAV = share price / Net BTC per share
   keys: btc_holdings, usd_assets, debt_otm, pref_otm, fd_shares
 ev_to_btc_nav (Strive dashboard definition):
   EV = fully diluted shares x price + preferred notional + debt - cash - marketable securities
   mNAV = EV / (BTC x price)
   keys: btc_holdings, fd_shares, pref_notional, debt, cash, marketable_securities
 --history: JSON list of [date, btc_price, stock_price] to show a trend with the SAME snapshot (label it as such)."""
import json, argparse
def calc(s, btc, px):
    nav = s["btc_holdings"] * btc
    if s["method"] == "net_bps":
        net = nav + s["usd_assets"] - s["debt_otm"] - s["pref_otm"]
        bps = net / s["fd_shares"]
        return {"mnav": round(px / bps, 3), "btc_nav": round(nav), "net_reserve": round(net), "net_btc_per_share_usd": round(bps, 2),
                "net_btc_per_share_sats": round(net / btc / s["fd_shares"] * 1e8),
                "formula": "mNAV = price / ((BTC*btc_price + usd_assets - debt_otm - pref_otm) / fd_shares)"}
    if s["method"] == "ev_to_btc_nav":
        mcap = s["fd_shares"] * px
        ev = mcap + s["pref_notional"] + s.get("debt", 0) - s.get("cash", 0) - s.get("marketable_securities", 0)
        return {"mnav": round(ev / nav, 3), "btc_nav": round(nav), "fd_market_cap": round(mcap), "enterprise_value": round(ev),
                "mcap_to_nav": round(mcap / nav, 3),
                "formula": "mNAV = (fd_shares*price + pref_notional + debt - cash - marketable_securities) / (BTC*btc_price)"}
    raise SystemExit(f"unknown method {s['method']}")
def main():
    p = argparse.ArgumentParser(); p.add_argument("--snapshot", required=True); p.add_argument("--btc", type=float, required=True)
    p.add_argument("--stock", type=float, required=True); p.add_argument("--history"); a = p.parse_args()
    s = json.load(open(a.snapshot)); out = {"company": s.get("company"), "method": s["method"], "snapshot_as_of": s.get("as_of"),
        "inputs": {"btc_price": a.btc, "stock_price": a.stock}, **calc(s, a.btc, a.stock), "sources": s.get("sources", {})}
    if a.history:
        out["trend_same_snapshot"] = [[d, calc(s, b, x)["mnav"]] for d, b, x in json.load(open(a.history))]
    print(json.dumps(out, indent=1))
if __name__ == "__main__": main()
```

## Script: edgar_text.py
```python
#!/usr/bin/env python3
"""Fetch one EDGAR document (declared User-Agent, fair access) and print readable text, optionally only
the lines around a keyword. Usage: edgar_text.py --ua "<sec_user_agent>" URL [--grep "Aggregate BTC Holdings" --width 1500]"""
import argparse, gzip, html, re, time, urllib.request
p = argparse.ArgumentParser(); p.add_argument("--ua", required=True); p.add_argument("url"); p.add_argument("--grep"); p.add_argument("--width", type=int, default=1500)
a = p.parse_args()
b = urllib.request.urlopen(urllib.request.Request(a.url, headers={"User-Agent": a.ua, "Accept-Encoding": "gzip"}), timeout=30).read(); time.sleep(0.15)
if b[:2] == b"\x1f\x8b": b = gzip.decompress(b)
s = b.decode("utf-8", "ignore")
s = re.sub(r"(?is)<(script|style).*?</\1>", "", s); s = re.sub(r"(?i)</(p|div|tr|li|h\d)>", "\n", s); s = re.sub(r"(?i)</t[dh]>", " | ", s)
s = html.unescape(re.sub(r"<[^>]+>", " ", s)); s = re.sub(r"[ \t\xa0\u200b]+", " ", s); s = re.sub(r"(\s*\|\s*)+", " | ", s); s = re.sub(r"\n\s*\n+", "\n", s)
if a.grep:
    hits = [m.start() for m in re.finditer(re.escape(a.grep), s, re.I)][:3]
    print("\n---\n".join(s[max(0, i - 200): i + a.width] for i in hits) or f"(no match for {a.grep!r})")
else: print(s[:20000])
```
