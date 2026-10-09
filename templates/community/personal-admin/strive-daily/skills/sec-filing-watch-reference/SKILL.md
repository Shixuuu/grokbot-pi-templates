---
name: sec-filing-watch-reference
description: "Reference for reading SEC filings: EDGAR access rules, what matters in each form, 8-K item meanings, Form 4 codes, red-flag definitions and phrasing. Use whenever summarizing or classifying a filing."
---

## EDGAR access (official rules)
- Fair access: max **10 requests/second**, and you must **declare a User-Agent** with a name and contact email (SEC sample format: "Sample Company Name AdminContact@<domain>.com"). Download only what you need. Source: sec.gov "Accessing EDGAR Data".
- Company filings list: `https://data.sec.gov/submissions/CIK##########.json` (10-digit, zero-padded CIK). `filings.recent` holds the latest ~1,000 filings with form, items, accession, and primaryDocument.
- Ticker → CIK: `https://www.sec.gov/files/company_tickers.json`.
- Full-text search (2001+): `https://efts.sec.gov/LATEST/search-index?q="phrase"&forms=8-K&ciks=0001050446&dateRange=custom&startdt=YYYY-MM-DD&enddt=YYYY-MM-DD` (the JSON behind sec.gov/edgar/search). Good for "substantial doubt", "at-the-market", "reverse stock split", and "initial conversion rate".
- Documents: `https://www.sec.gov/Archives/edgar/data/<CIK>/<accession-no-dashes>/<primaryDocument>`. The index page is `<accession>-index.htm`. `<accession>.hdr.sgml` has `<ACCEPTANCE-DATETIME>` in **Eastern time**. Use it for timestamps.
- Form 4 primaryDocument is an XSL view (`xslF345X06/ownership.xml`). Drop the `xslF345X06/` prefix to get raw XML.
- Timing: EDGAR accepts filings 6:00 AM–10:00 PM ET on business days. Filings submitted after 5:30 PM ET (10:00 PM for Forms 3/4/5) can be disseminated with the next business day's date.
- Schedule 13D/G appear as "SC 13D"/"SC 13G" (older) or "SCHEDULE 13D"/"SCHEDULE 13G" (structured format, late 2024+). Match both.

## What pros look for, by form
- **8-K (current report, generally due within 4 business days).** Key items:
  1.01 material agreement · 1.02 agreement terminated · 1.03 bankruptcy · 1.05 material cybersecurity incident · 2.01 acquisition/disposition completed · 2.02 results · 2.03 new direct financial obligation (loans, notes, converts) · 2.04 triggering event/acceleration · 2.05 exit/restructuring costs · 2.06 material impairment · 3.01 delisting or listing-rule deficiency notice · 3.02 unregistered equity sales · 3.03 material modification of holders' rights · 4.01 auditor change · 4.02 non-reliance on prior financials (restatement) · 5.01 change in control · 5.02 director/officer departures and appointments, comp plans · 5.03 charter/bylaw amendments, fiscal-year change · 5.07 shareholder vote results · 7.01 Reg FD (furnished, not "filed") · 8.01 other events · 9.01 exhibits.
- **10-Q / 10-K.** Going-concern paragraph ("substantial doubt about … ability to continue as a going concern"), Item 9A material weakness, risk-factor changes, liquidity and runway in MD&A, share count on the cover, subsequent-events note, and new debt or equity. Late → NT 10-Q/NT 10-K (Form 12b-25), which gives a 5-day (10-Q) or 15-day (10-K) grace period.
- **S-3 / S-1 (registration), 424B* (final prospectus or supplement), FWP (free-writing prospectus/term sheet).** How much, what security, who sells (ATM agents vs underwriters), use of proceeds, warrants, discounts. S-3ASR = automatic shelf for large issuers (effective on filing). An ATM ("at-the-market") program lets the company sell stock into the market over time. Size and weekly usage are the dilution facts.
- **S-8.** Registers shares for employee plans. It's usually routine, but the share count is still potential dilution.
- **Form 4 (due within 2 business days of the trade).** Codes: P open-market/private purchase · S sale · M option exercise · A grant/award · F tax withholding · G gift · D disposition to issuer · C conversion · X in/at-the-money exercise · J other. Also report the Rule 10b5-1 checkbox (pre-planned trade). A "P" by an officer is rarer and more informative than routine M+S. State facts only.
- **Form 144.** Notice of a *proposed* sale by an affiliate. It is not a completed trade. It lists prior 3-month sales.
- **Schedule 13D vs 13G.** Both mean >5% beneficial ownership. 13D = active or may seek influence (Item 4 "Purpose"). 13G = passive. A 13G→13D switch is a notable fact.
- **Proxy: PRE 14A (preliminary), DEF 14A (definitive), DEFA14A (additional soliciting material).** Proposals: authorized-share increases, reverse splits, equity-plan top-ups, board fights, charter changes, say-on-pay. Report meeting date and record date.

## Red-flag definitions (state as facts, never as opinions)
| Flag | Where it shows up | How to phrase it |
|---|---|---|
| Going concern | 10-K/10-Q notes, auditor report | "Filing states substantial doubt about ability to continue as a going concern." |
| Non-reliance / restatement | 8-K Item 4.02 | "Company says prior financials for {period} should no longer be relied on." |
| Auditor change | 8-K Item 4.01 (+ Ex. 16 auditor letter) | "Auditor {resigned/was dismissed}; disagreements reported: {yes/no}." |
| Late filing | NT 10-K / NT 10-Q | "Filed notice of late {10-K}; stated reason: …" |
| Delisting/deficiency | 8-K Item 3.01 | "Received {exchange} notice: {rule}, cure period to {date}." |
| Reverse split | PRE/DEF 14A, 8-K 5.03 | "Proxy asks approval for reverse split in range 1-for-X to 1-for-Y." |
| Heavy dilution tools | S-1/S-3/424B, 8-K 1.01/3.02 | "Registers up to $X / N shares; includes warrants at $P" or "conversion price floats at X% of VWAP." |
| Cyber incident | 8-K Item 1.05 | "Reported a material cybersecurity incident: {scope as stated}." |

## Bitcoin-treasury notes
- Weekly 8-K (7.01/8.01), usually Monday ~8:00 AM ET: BTC bought, cost, average price, total held, plus share-count or ATM tables. Summarize as shares sold → proceeds → what they funded → total BTC held.
- Perpetual preferreds: dividend rate, payment schedule, and any charter/certificate changes (8-K 3.03/5.03, proxies).
- Insider activity: Form 4 M (exercise) + S (sale) with the 10b5-1 box, and matching Form 144 notices.
