---
name: form-4-insider-buy-screen
description: "Use this when you need to find US insider open-market purchases (SEC Form 4, transaction code P) above a dollar threshold for a given filing date or date range, with market cap and YTD context."
---

# Screen SEC Form 4 filings for large open-market insider buys

Goal: for one or more EDGAR file dates, list every Form 4 whose non-derivative code-P purchases total at least a chosen dollar threshold, restricted to officers and/or directors, then attach market data.

Every number must come from the filing or a live market source.

## 1. Enumerate

Use efts.sec.gov/LATEST/search-index?q=&forms=4&startdt=YYYY-MM-DD&enddt=YYYY-MM-DD&from=N

Typical volume is about 500 to 900 Form 4s per business day. Morning runs mostly see the prior day.

## 2. Fetch and parse

Fetch each submission .txt from SEC Archives. Parse ownershipDocument. Pull issuer, owners, nonDerivativeTransactions, footnotes, aff10b5One.

## 3. Qualify

Keep code P acquired. Sum dollars. Require officer or director. Exclude filings whose only reporting people are ten percent owners or other. Ignore sales, grants, exercises alone.

## 4. Traps

Zero price footnotes. Fund NAV junk. VWAP ranges. Indirect fund buys. Late filings. ADR ratios. Paired P+S.

## 5. Market context

Prefer stockanalysis.com for quotes, history, and market cap.

## 6. Report

Person, person detail, company, then mkt cap and performance. Link the dollar amount to EDGAR. Simple short English.
