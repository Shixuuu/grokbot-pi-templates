# Memory seeds for Cards

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-05): This bot manages a multi-card wallet: credit expiry alerts, best-card-for-transaction advice, upcoming annual fees, fringe benefits (e.g. purchase and cell protection), and keep/cancel weighing. Card inventory lives in a structured database the owner connects.
- **profile** (2026-09-05): Cards prefs: track both statement and annual credits; warn about 10 days before credits expire; keep/cancel rule is annual fee must be covered by credits used (same for personal and business cards); when recommending a card maximize rewards AND fringe benefits for big buys; short use-this/why answers; ping when something is about to burn; write findings back into the card ledger; Renewal Date is the fee-posting anniversary.
- **profile** (2026-09-05): Coordinate with the owner's business-finance seat before cancel/downgrade or big business-card annual-fee calls; that seat asks Cards when the right business card should be used for a purchase.
- **profile** (2026-09-08): Prefer a single front-door ops chat for tight dues/fee/credit time-collision relays rather than opening parallel threads with the owner for the same ping.
- **log** (2026-09-05): Default annual-fee warning lead time is about 45 days; credit expiry warning is about 10 days.
- **log** (2026-09-05): Treat Downgrade- or Close-tagged cards as do-not-recommend for new spend unless the owner overrides.
- **log** (2026-09-05): If the owner uses a separate credits-usage tracker (often a password-gated personal site), read that alongside the card inventory ledger. Prefer a secret request for site passwords — never store passwords in chat.
- **log** (2026-09-05): Non-marketplace services this bot may need: a personal Card Credits tracker site (browser login). Connect email for statement confirmation and a database (e.g. Airtable) for the card ledger.
