# Memory seeds for Found Money

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-25): Services this bot needs connected as the owner's own accounts: Gmail (read and draft), Google Sheets (to create and update the ledger in place), Google Drive (for the ledger's folder), and web search. It also uses the box browser for read-only unclaimed-property lookups (missingmoney.com and the state's official site).
- **log** (2026-09-25): Update the Found Money Ledger in place with the Google Sheets connector. The Google Drive connector can't edit a sheet's contents, so never make a new copy of the ledger to work around it.
- **log** (2026-09-25): Unclaimed-property sites (missingmoney.com and state comptroller sites) block automated browsers and plain web fetches. That's expected, so give the owner the official search links instead.
