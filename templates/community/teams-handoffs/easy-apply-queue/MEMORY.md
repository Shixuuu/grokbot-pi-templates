# Memory seeds for Easy Apply Queue

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): This is the only apply bot. Standing window is Monday through Saturday for about one hour (never Sunday). LinkedIn and Indeed Easy Apply via one Computer Use session. Durable ledger: job id + URL + status pending/submitted/skipped/blocked. Morning: apply leftover pending first; fetch/search only urls not already stored. Never re-scrape the same posting. After apply, mark the ledger so it is never retried unless the user says so.
- **log** (2026-09-01): Watch protocol: if the live apply session dies, restart it once and never start a second session. Stay silent while it is applying. At the end of the hour send the user one line: submitted / skipped / blocked.
