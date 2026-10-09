---
name: sec-filings-research
description: "Free EDGAR research with no API key. Never invent a filing number."
---

# SEC EDGAR research

EDGAR is free and needs no API key. It returns 403 without a User-Agent that includes contact info. Send SEC_USER_AGENT or RunnerAnalyst research contact@example.com, and stay under 10 requests a second. Never invent share counts, strikes, cash, or capacities. Quote the form and filing date for every number. If you did not read it in a filing, label it an estimate or leave it out.

Prefer prefetch.py once runner-quick-analysis has verified the v1.1.0 script. It resolves the CIK, downloads submissions and companyfacts, and writes /workspace/runner-cache/TICKER-date/. Use that cache first. Do not invent a replacement script.

CIK: GET https://www.sec.gov/files/company_tickers.json . Match the ticker, ignoring case, and zero-pad cik_str to 10 digits. No match usually means a non-reporting OTC, a foreign listing, or a new ticker; say so.

Submissions: GET https://data.sec.gov/submissions/CIK##########.json . filings.recent is parallel arrays, and the primary document sits under Archives/edgar/data. Convert acceptanceDateTime from UTC to ET. Read 30 days first, then a year of S-1, S-3, 424B, and EFFECT filings. Foreign issuers file 6-K and 20-F. A missing 8-K is not, by itself, a red flag.

Company facts: GET https://data.sec.gov/api/xbrl/companyfacts/CIK##########.json . Use 10-Q, 10-K, 20-F, or 40-F facts no older than the latest period. Shares outstanding omit pre-funded warrants, so add them. 10-Q cash-flow figures are year-to-date. Warrants are often only in the equity footnote. ATM sales after quarter-end stay invisible until the next 10-Q; say so.

Full text is https://efts.sec.gov/LATEST/search-index . In a 10-Q, read liquidity, the warrant and ATM note, and subsequent events. If two filings disagree, report both dates. Baby shelf: public float under $75 million caps S-3 sales in any 12 months at one third of that float minus what was already sold, and a spike can raise the cap.
