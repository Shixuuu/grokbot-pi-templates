---
name: sec-filing-watch-daily
description: "EDGAR tools for Strive Daily: edgar_watch.py (new filings since a cutoff, authoritative ET acceptance times) and form4_summary.py, with fair-access rules and how to read each form. Use when finding or summarizing Strive filings."
---

EDGAR tools and filing-reading rules for Strive Daily. Read `sec-filing-watch-reference` when classifying or summarizing a filing.
Scripts: `SFW=/home/box/agent-data/workflows/sec-filing-watch-daily/scripts` (other skills call them as `$SFW/edgar_watch.py` and `$SFW/form4_summary.py`). The `--ua` value is always memory `sec_user_agent` from setup; never hardcode or invent it.

## 0. Box setup (only if $SFW is missing)
Write the two script bodies at the end of this skill to `$SFW/`. Python 3 stdlib only.

## 1. Find new filings (edgar_watch.py behavior)
- `python3 $SFW/edgar_watch.py --ua "<sec_user_agent>" --since "<YYYY-MM-DD HH:MM ET>" ASST` → JSON list, one entry per filing accepted after the cutoff: ticker, company, form, 8-K items, `accepted_et`, accession, `doc_url`, `index_url`. Entries with `error` mean the fetch failed: keep the old cutoff.
- `--resolve ASST SATA` maps tickers → CIK → company name via `https://www.sec.gov/files/company_tickers.json` (should be Strive, Inc., CIK 1920406).
- How it works: loads the submissions JSON `https://data.sec.gov/submissions/CIK##########.json`, walks `filings.recent` newest-first until filingDate is more than a day before the cutoff, keeps only watched forms (8-K, 10-Q/K, NT, S-1/S-3/S-3ASR/S-8, 424B*, FWP, Forms 3/4/5, 144, SC/SCHEDULE 13D/G, proxies, 25-NSE, 15-12B/G, with /A), and reads each filing's `.hdr.sgml` `<ACCEPTANCE-DATETIME>` (authoritative Eastern time). Never convert the JSON `acceptanceDateTime`; same-day entries can show ET labeled "Z". For Forms 3/4/5 it strips the XSL prefix so `doc_url` is the raw XML. Warns if the User-Agent has no email. Insider forms and 13D/G filed about Strive appear under the issuer's CIK. Note: an 8-A12B or CERT isn't in the watched-form list; the daily skill's preferred-discovery step covers those via `strive_dash.py` and the submissions tickers, or add them to the regex.
- Fair access: declared User-Agent, sleep 0.15 s per call (<10 req/s). Fetch only the primary document plus at most one exhibit per filing, with the same User-Agent (`curl -s --compressed -A "<sec_user_agent>" <url>`).

## 2. Read each filing (facts only; if a document can't be read, say so and link it)
- **8-K:** item list first; one sentence per item with key numbers. 2.02 → Ex. 99.1 headline figures only. 1.01/2.03/3.02 → amount, security, coupon or rate, maturity, conversion price, use of proceeds. 3.03/5.03 → what changed in holders' rights or the charter (e.g. a new certificate of designation). 5.02 → who, role, effective date, stated reason. 8.01 at treasury companies → units bought, cost, average price, total held, funding source.
- **Form 4:** `python3 $SFW/form4_summary.py --ua "<sec_user_agent>" <doc_url>` → owner, role, code, shares, price, holdings after, 10b5-1 box. Put S sales that follow M exercises on one line.
- **Form 144:** planned sale size, broker, approximate date, prior 3-month sales. "Notice of intent, not a completed sale."
- **10-Q / 10-K:** search for "substantial doubt", "material weakness", "restatement", "subsequent event". Cover-page shares outstanding; 1–3 MD&A headline numbers.
- **S-3 / 424B* / FWP / 8-A12B:** security, max amount, ATM or underwritten, agents, use of proceeds. 424B5 ATM supplements: program size and which base prospectus it amends. Any that names a preferred matters for the preferred inventory.
- **13D / 13G (SC or SCHEDULE, and /A):** filer, % of class, 13D vs 13G, Item 4 purpose (13D), change from the prior amendment.
- **DEF 14A / PRE 14A / DEFA14A:** proposals (authorized-share increases, reverse splits, equity-plan increases, charter changes); meeting and record dates.
- **NT 10-K / NT 10-Q:** always a red flag; stated reason and expected filing window.
- Never use: buy, sell (except describing a filed sale), hold, bullish, bearish, undervalued, price target, good/bad news.

## 3. Failures
- EDGAR unreachable or 403/429: wait 10 min, retry once, then report "EDGAR unavailable at {time}; will include these filings next run" and don't advance the cutoff.

## Script: edgar_watch.py
```python
#!/usr/bin/env python3
"""List new EDGAR filings for a list of tickers since a cutoff (ET), or resolve tickers.
Usage: edgar_watch.py --ua "Strive Daily owner@example.com" --since "2026-09-25 08:30" ASST
       edgar_watch.py --ua "..." --resolve ASST SATA      (ticker -> CIK -> company name)
The --ua value comes from the owner's setup answer (memory: sec_user_agent). Never hardcode it.
Fair access: declared User-Agent, <=10 req/s (sleeps 0.15 s per call), only the files needed."""
import argparse, json, sys, time, urllib.request, urllib.error, gzip, re, datetime as dt
from zoneinfo import ZoneInfo
ET = ZoneInfo("America/New_York")
WATCH_FORMS = re.compile(r"^(8-K|8-K/A|10-Q|10-Q/A|10-K|10-K/A|NT 10-[KQ]|S-1|S-1/A|S-3|S-3/A|S-3ASR|S-8|424B[1-8]|FWP|4|4/A|3|5|144|SC 13[DG].*|SCHEDULE 13[DG].*|DEF 14A|PRE 14A|DEFA14A|DEFM14A|20-F|6-K|25-NSE|15-12[BG])$")
def get(url, ua):
    req = urllib.request.Request(url, headers={"User-Agent": ua, "Accept-Encoding": "gzip"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            b = r.read()
            if r.headers.get("Content-Encoding") == "gzip": b = gzip.decompress(b)
    finally:
        time.sleep(0.15)
    return b
def accept_et(cik, acc, ua):
    # The .hdr.sgml ACCEPTANCE-DATETIME is Eastern time and authoritative (the JSON field can mislabel ET as "Z").
    h = get(f"https://www.sec.gov/Archives/edgar/data/{cik}/{acc.replace('-','')}/{acc}.hdr.sgml", ua).decode("latin-1")
    m = re.search(r"<ACCEPTANCE-DATETIME>(\d{14})", h)
    return dt.datetime.strptime(m.group(1), "%Y%m%d%H%M%S").replace(tzinfo=ET) if m else None
def main():
    p = argparse.ArgumentParser(); p.add_argument("--ua", required=True); p.add_argument("--since")
    p.add_argument("--resolve", action="store_true"); p.add_argument("tickers", nargs="+"); a = p.parse_args()
    if "@" not in a.ua: print("warning: User-Agent has no contact email; SEC may throttle or block", file=sys.stderr)
    tmap = {v["ticker"].upper(): v for v in json.loads(get("https://www.sec.gov/files/company_tickers.json", a.ua)).values()}
    if a.resolve:
        print(json.dumps([{"ticker": t.upper(), "cik": tmap[t.upper()]["cik_str"], "name": tmap[t.upper()]["title"]} if t.upper() in tmap
                          else {"ticker": t.upper(), "error": "not in SEC ticker list (foreign/OTC/non-filer?)"} for t in a.tickers], indent=1)); return
    if not a.since: p.error("--since is required unless --resolve")
    since = dt.datetime.strptime(a.since, "%Y-%m-%d %H:%M").replace(tzinfo=ET)
    out = []
    for t in a.tickers:
        info = tmap.get(t.upper())
        if not info: out.append({"ticker": t.upper(), "error": "ticker not found in SEC list"}); continue
        try:
            cik = int(info["cik_str"]); sub = json.loads(get(f"https://data.sec.gov/submissions/CIK{cik:010d}.json", a.ua))
            r = sub["filings"]["recent"]
            for i in range(len(r["form"])):
                if r["filingDate"][i] < (since.date() - dt.timedelta(days=1)).isoformat(): break
                if not WATCH_FORMS.match(r["form"][i]): continue
                acc = r["accessionNumber"][i]; when = accept_et(cik, acc, a.ua)
                if when is None or when <= since: continue
                doc = r["primaryDocument"][i]
                if r["form"][i] in ("3", "4", "5", "4/A") and "/" in doc: doc = doc.split("/", 1)[1]  # raw XML, not XSL view
                base = f"https://www.sec.gov/Archives/edgar/data/{cik}/{acc.replace('-','')}"
                out.append({"ticker": t.upper(), "company": sub["name"], "form": r["form"][i], "items": r["items"][i],
                            "accepted_et": when.strftime("%a %b %d %I:%M %p ET"), "accession": acc,
                            "doc_url": f"{base}/{doc}", "index_url": f"{base}/{acc}-index.htm"})
        except (urllib.error.URLError, OSError, ValueError, KeyError) as e:
            out.append({"ticker": t.upper(), "error": f"fetch failed: {str(e)[:120]}"})  # caller keeps old cutoff
    print(json.dumps(out, indent=1))
if __name__ == "__main__": main()
```

## Script: form4_summary.py
```python
#!/usr/bin/env python3
"""Summarize a Form 4 raw XML (ownership.xml). Usage: form4_summary.py --ua "<sec_user_agent from setup>" URL"""
import urllib.request, gzip, time, xml.etree.ElementTree as ET, argparse
CODES = {"P":"open-market buy","S":"open-market sale","M":"option exercise","A":"grant/award","F":"shares withheld for tax",
         "G":"gift","D":"disposed to issuer","C":"conversion","X":"exercise (in/at money)","J":"other","W":"will/inheritance"}
p = argparse.ArgumentParser(); p.add_argument("--ua", required=True); p.add_argument("url"); a = p.parse_args()
url = a.url.replace("/xslF345X06/", "/").replace("/xslF345X05/", "/")  # XSL view -> raw XML
req = urllib.request.Request(url, headers={"User-Agent": a.ua, "Accept-Encoding": "gzip"})
b = urllib.request.urlopen(req, timeout=30).read(); time.sleep(0.15)
if b[:2] == b"\x1f\x8b": b = gzip.decompress(b)
t = ET.fromstring(b); g = lambda e, q: (e.findtext(q) or "").strip()
rel = t.find("reportingOwner/reportingOwnerRelationship")
role = [k for k in ("isDirector","isOfficer","isTenPercentOwner","isOther") if rel is not None and g(rel,k) in ("1","true")]
print(f"Owner: {g(t,'reportingOwner/reportingOwnerId/rptOwnerName')} | roles: {','.join(role)} {g(t,'reportingOwner/reportingOwnerRelationship/officerTitle')} | 10b5-1 box: {g(t,'aff10b5One') or 'n/a'}")
for tx in t.iter("nonDerivativeTransaction"):
    c = g(tx,"transactionCoding/transactionCode")
    print(f"- {g(tx,'transactionDate/value')} {c} ({CODES.get(c,'?')}) {g(tx,'transactionAmounts/transactionShares/value')} sh "
          f"{g(tx,'transactionAmounts/transactionAcquiredDisposedCode/value')} @ ${g(tx,'transactionAmounts/transactionPricePerShare/value') or '0'} "
          f"-> owns {g(tx,'postTransactionAmounts/sharesOwnedFollowingTransaction/value')} ({g(tx,'ownershipNature/directOrIndirectOwnership/value')})")
for f in t.iter("footnote"): print(f"  [{f.get('id')}] {(f.text or '').strip()[:240]}")
```
