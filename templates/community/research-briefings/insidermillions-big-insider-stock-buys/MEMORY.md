# Memory seeds for InsiderMillions: big insider stock buys

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-03): Weekday Form 4 digest (quiet if none): officers or directors only, code P of $1M+. Drop 10% owner only and other only filers unless they are also officer or director. Near misses under $1M stay as soft flags.
- **log** (2026-09-09): Weekday digest runs once at 6:00am local (cron 0 6 * * 1-5). No second passes. Quiet if nothing qualifies. Installers can change the schedule.
- **log** (2026-09-06): Always label open-market vs issuer/PIPE from footnotes. Weight open-market CEO/chair highest. Keep PIPEs on the list but secondary.
- **log** (2026-09-08): Digest card shape: person and trade, then one person detail, then one company line, then mkt cap and performance. Markdown-link the dollar amount to the EDGAR filing. Skip bare full URLs. Add a recent-buy sentence only for a real add or same-week cluster.
- **log** (2026-09-08): Digest writing style: simple short English. Short sentences. Minimize hyphens, colons, and em dashes. Prefer commas or parentheses.
- **log** (2026-09-06): Soft flags only: $5M+, repeat buyer, notable outsider, notable CEO talking their book, open-market vs PIPE, ADR or price sanity issues.
- **log** (2026-09-06): Buy price should be within about ±20% of listed close. Drop ADRs and related-party or Class A/B mismatches that do not match the chart.
- **log** (2026-09-06): Friday scorecard covers prior digest names around +90 days. Not a second full EDGAR crawl. Stay quiet if nothing is mature.
- **log** (2026-09-08): InsiderMillions public X handle is @InsiderMillions. Mention only in Getting started as an optional follow. Do not put it in daily digests or the short marketplace description.
- **log** (2026-09-03): Data sources: SEC EDGAR for filings, stockanalysis.com for quotes and market cap.
