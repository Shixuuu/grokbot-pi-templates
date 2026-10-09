---
name: strive-sata-reference
description: "Reference for the Strive brief: verified Strive, Inc. (ASST) facts, the full Strive preferred inventory (SATA only as of Sep 2026) with terms, rate rules and schedule, the weekly 8-K layout, Strive's mNAV definition and dashboard feed, peers (STRC, STRF), accounts, calendar sources, signal-vs-noise rules and a glossary. Use whenever writing or checking any line of the brief."
---

Facts below were verified on Sep 28, 2026 from SEC EDGAR (CIK 1920406), Strive's dashboard and IR site, and official X accounts. **All numbers are as of Sep 2026: re-verify before relying on them.** For how to read filings in general, use `sec-filing-watch-reference`.

## Company (EDGAR)
- **Strive, Inc.**, formerly Asset Entities Inc. Nevada corporation, **CIK 1920406**, emerging growth and smaller reporting company.
- Merged with private Strive Enterprises on Sep 12, 2025; acquired Semler Scientific on Jan 16, 2026 (now a subsidiary; paid 21.05 ASST per Semler share, common only).
- Nasdaq: Class A common **ASST** and **SATA** preferred. Class B common isn't listed. 1-for-20 reverse split, Feb 2026.
- Filing signers: Matthew Cole, CEO (Chairman per his X bio), and Benjamin Pham, CFO. Other public roles (not SEC-reporting officers): Ben Werkman, CIO · Jeff Walton, Chief Risk Officer (@PunterJeff) · Adam Livingston, VP Investments (@AdamBLiv; in no SEC filing, so expect no Form 4s).
- Known >5% holder: Vivek Ramaswamy (13D/A Aug 26, 2026: 6.6% of Class A).
- Capital programs (as of Sep 2026): ASST ATM up to $2.55B (8-K Jun 8, 2026) · buyback authorization up to $500M (Sep 15, 2025; none used through Jun 30, 2026) · traditional (PIPE) warrants at $27.00 split-adjusted (exercises bring in $27.00/share).

## Strive preferred stock inventory (check every run)
As of Sep 2026 Strive has designated, registered and issued exactly **one** preferred series, SATA. The charter authorizes 21.0 billion preferred shares; only SATA (40,000,000) is designated (10-Q Q2 2026). One preferred 8-A12B (Nov 2025); every certificate of designation and preferred 424B5 is for SATA; EDGAR full-text search on the CIK finds no "Series B Perpetual Preferred" or "SATB". Shelf S-3ASR No. 333-290252 (Sep 15, 2025) has only SATA preferred supplements. Dashboard `preferredStocks` and the IR Dividend History page (investors.strive.com/stock-information/dividend-history) list SATA only.

| Field | SATA (as of Sep 2026, re-verify) |
|---|---|
| Name | Variable Rate Series A Perpetual Preferred Stock, $0.001 par; Nasdaq |
| 8-A12B | Nov 2025: https://www.sec.gov/Archives/edgar/data/1920406/000114036125041210/ny20056805x9_8a12b.htm |
| Stated amount | $100 (the amount the dividend is calculated on) |
| Liquidation pref. | $100 at Jun 30, 2026; resets each business day to the greatest of $100, Strive's same-day sale prices and the trading price |
| Cumulative | Yes; unpaid dividends compound monthly (none unpaid at Jun 30, 2026) |
| Rate history | 12.00% at the Nov 2025 IPO (https://www.sec.gov/Archives/edgar/data/1920406/000114036125041295/ny20056805x8_8k.htm) → 12.25% (Dec 31, 2025) → 13.00% (Jun 30, 2026; 10-Q https://www.sec.gov/Archives/edgar/data/1920406/000162828026054985/asst-20260630.htm) → held 13.00% for Aug, Sep and Oct 2026 (Oct: $0.0516 per business day × 21 = $1.0836; https://www.sec.gov/Archives/edgar/data/1920406/000162828026061949/0001628280-26-061949-index.htm) |
| Schedule | Every business day since Jun 16, 2026 (A&R certificate effective Jun 15, 2026: https://www.sec.gov/Archives/edgar/data/1920406/000162828026034802/certi1.htm). Record date = prior business day; each month's total split equally across its business days when declared. Before that, monthly on the 15th from Dec 15, 2025. The Oct 2026 table skips Oct 12 |
| Authorized | 40,000,000 (Jun 5, 2026 amendment) |
| Issuance | IPO 2,000,000 at $80 (Nov 10, 2025) · follow-on 1,320,000 at $90 (Jan 27, 2026) · ~930,000 in exchange for $90M of Semler 4.25% 2030 converts (Jan 2026) · ATM since |
| ATM | $500M (Dec 9, 2025) → $2.6B (Jun 5, 2026). Weekly 8-Ks give share counts only, no dollars or remaining capacity (next check: 10-Q) |
| Redemption | Optional at $110 + accrued (partial only if ≥ $50.0M stated amount stays out); clean-up call under 25%; tax redemption. Fundamental change: holders can require repurchase at $100 + accrued |
| Ranking | Junior to all debt; structurally junior to subsidiaries' liabilities. Director-election rights after missed dividends |
| Reserve | ~12-month Dividend Payment Account set at the IPO, topped up Jan 2026; not escrowed, creditors could claim it (10-K). The dashboard's `dividend_reserve_months` is undocumented: don't report it |
| Tax | Strive says it has no E&P, so payouts are generally return of capital up to basis (8-K Sep 15, 2026). Quote as Strive's statement, not tax advice |

- **Rate rules (10-Q):** the board may change the rate monthly at its discretion. A cut is capped at 25 bps plus the drop in 1-month term SOFR over the prior period, can't go below 1-month SOFR, and needs all dividends paid and a prior-period average SATA price ≥ $99. Strive's stated, non-binding intention: adjust the rate so SATA trades in its **long-term range of $99–$101**. Quote as Strive's words, never as a forecast.
- **Rate 8-K timing (pattern, not a promise):** next month's rate plus the daily declaration table is filed mid-month in the evening (accepted Jul 14 9:29 PM, Aug 13 9:05 PM, Sep 14 8:55 PM ET).
- **Strive's disclaimer (dashboard `settings.page_disclaimers`):** preferred dividends are subject to board declaration and aren't guaranteed; SATA isn't collateralized by the bitcoin, and its rate may be significantly lower. Repeat it whenever yield comes up.
- **Confirmation:** @Strive posts each payment about 9:30 AM ET ("Today, Strive paid a cash distribution of $0.0516 per $SATA share … Nth consecutive dividend").
- **Historical, not current:** the private predecessor's Series A-1, A-2 and B preferred all converted to Class B common on Sep 12, 2025; none outstanding.
- **Not Strive preferreds:** STRC (Strategy's; Strive holds a stake shown in the Monday 8-K), DCAP (Tuttle ETF; Strive Asset Management is sub-adviser), SATA listed options (Mar 2026).
- **How a new series would show up:** a 3.03/5.03 8-K with a certificate of designation (Ex. 3.x/4.x), an 8-A12B, a 424B5 or FWP naming it, a new ticker in SEC's list for the CIK, or a new dashboard `preferredStocks` entry. Verify it, then add it to `known_preferreds` and `pref_rates`.

## The Monday 8-K (accepted ~7:59–8:00 AM ET, covering the prior Mon–Fri)
- Sentence: "Strive purchased N bitcoin at an average price of approximately $X per bitcoin, inclusive of fees".
- Table anchors for `edgar_text.py --grep`: "Bitcoin held", "Cash and cash equivalents", "Fair value of STRC Stock", "Class A common stock", "Assumed Fully Diluted Shares", "Shares Underlying Traditional Warrants", "SATA Stock". A new preferred would add a row.
- Share counts include shares sold through 4:00 PM that settle next business day. The 8-K doesn't split ATM sales from warrant exercises; warrant-share decrease × $27.00 ≈ exercise proceeds (our arithmetic).
- Earnings 8-Ks (Item 2.02) in 2026: Mar 19 (FY), May 14 (Q1), Aug 10 (Q2). Q3 2025 came Nov 14, 2025. Only report an earnings date once Strive announces it.

## mNAV: Strive's own definition (dashboard `mnav_calculation_method = ev_to_btc_nav`)
- **mNAV = EV ÷ BTC NAV.** EV = assumed fully diluted shares × ASST price + preferred notional (shares × $100, every Strive preferred) + debt − cash − marketable securities (the STRC stake). BTC NAV = BTC held × BTC price. Fully diluted shares exclude traditional warrants.
- Debt: none as of Sep 2026 (Semler converts discharged May 12, 2026; Coinbase loan repaid). Re-check any 2.03 item.
- **Dashboard (Reg FD channel per the 10-K); public JSON is undocumented and may change:**
  - `https://strive.com/treasury/api/dashboard/calculated?fromDate=…&toDate=…&currency=USD&stockSymbol=ASST`: `data.btcHoldings[-1]` has `evMnav`, `sharePrice`, `btcPrice`, `cash`, `marketableSecurities`, `preferredStockMarketCap`. **`pulledAtTimestamp` (ms) is top-level** (it moved out of the rows in Sep 2026; check both). Top-level `preferredStocks`; `data.preferredStockPrices`.
  - `https://strive.com/treasury/api/dashboard/base-data`: transactions and share rows (each with an 8-K `source_url`), `cashDebt`, `preferredDividends` (a pay/record schedule; "paid" isn't a confirmation) and `settings`.
- Third-party sites use other formulas. Don't mix them in.

## Peers (both Strategy Inc., CIK 1050446; as of Sep 2026, re-verify)
- **STRC** Variable Rate Series A Perpetual Stretch Preferred: $100 stated, semi-monthly; 12.00% for periods from Sep 16, 2026 (Strategy 8-K Sep 1, 2026: https://www.sec.gov/Archives/edgar/data/1050446/000119312526377583/mstr-20260831.htm). A Strategy special meeting on Oct 28, 2026 votes on daily STRC dividends from Nov 2 (8-K Sep 25, 2026).
- **STRF** 10.00% Series A Perpetual Strife Preferred: fixed 10.00% (Strategy 10-Q Q2 2026: https://www.sec.gov/Archives/edgar/data/1050446/000105044626000044/mstr-20260630.htm).
- strategy.com returns 403 to scripts; use EDGAR.

## Accounts (X, read-only)
@Strive 5926562 · @ColeMacro 1455383636614647812 · @AdamBLiv 1881193918206758912 · @HurdleRatePod 1902433275462717440 (weekly show).

## Calendar sources (verified dates only; label patterns)
- SATA pays every business day per the declaration 8-K table; next month's rate comes mid-month (pattern).
- MSCI non-operating companies consultation (as of Sep 2026): feedback through Sep 30, 2026, results on or before Oct 16, 2026, any changes in the November 2026 Index Review (MSCI consultation PDF on msci.com). Strive's Sep 25, 2026 comment letter says it "would currently be excluded" under the revised proposal (https://strive.com/documents/2026-09-25-strive-msci-consultation-comments.pdf).
- Earnings and shareholder votes: only once announced. Macro: FOMC Oct 27–28 and Dec 8–9, 2026. Q3 13F deadline: Nov 16, 2026.

## Appearances and signal vs noise
- Appearances: conference agendas, podcast releases, @Strive/@ColeMacro/@AdamBLiv posts, earnings-call notices. Never repeat location, travel or flight posts, homes or family, even when self-posted.
- **Signal:** buys, holdings, capital-raise numbers, preferred rate or terms changes, new series, dividend declarations or confirmations, index or regulatory letters, confirmed appearances, new filings.
- **Noise:** BTC backtests, prediction charts, "number go up" posts, memes, merch, personal posts. Livingston's research charts: label "his analysis", one line at most.
- X news summaries are "unverified". Never take numbers from them.

## Q&A patterns (two sentences, cite sources)
- "Is SATA's dividend safe?" → what's declared (rate, dates), cash and BTC vs the yearly preferred dividend bill, and that the rate isn't guaranteed and SATA isn't collateralized. No judgment.
- "Why is ASST down today?" → ASST's move vs BTC's move, with times and sources, plus any same-day filing fact. Never guess motives.
- **Jargon:** SATA = Strive's preferred that pays a variable dividend every business day, figured on $100 · stated amount = the $100 the dividend is calculated on · record date = the day you must own it to get that payment · mNAV = company value vs the bitcoin it owns · ATM = selling new shares into the market bit by bit · warrants = rights to buy new shares at a set price ($27) · return of capital = a payout treated, for tax, as giving back part of what you paid · cumulative = skipped dividends are still owed later.
