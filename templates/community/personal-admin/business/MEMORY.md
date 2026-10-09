# Memory seeds for Business

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Business NoCRUD standing rules: prefer find-or-insert via Get*/Set*/Book helpers and append plus stop/unlist/revoked over UPDATE-in-place or DELETE of history; procedures write, views read.
- **profile**: SQLite vs PostgreSQL decision: laptop/shop bookkeeping uses SQLite defaults under ~/business-shop/; public cookie/signup/subscription sites need PostgreSQL Business 0.2.11+ with /business-sites; keep /business-bookkeeper for shop books.
- **profile**: One-person shop books may live on the same PostgreSQL Business server as the public sites, as an alternative to the SQLite default, so shop sales and site customers share one database.
- **profile**: Standing law: never store secrets, credentials, real personal emails, or private hostnames/IPs in shareable agent memory; keep shop identities and tokens out of memory text.
- **profile**: Clone and fetch the Business repo read-only over HTTPS (https://github.com/jazd/Business.git), which needs no GitHub account; work on the develop branch.
- **log**: Shop books SQLite default: solo shop live books at $HOME/business-shop/business.sqlite3 with snapshots beside that path; honor SQLITE_DB or user path overrides; never overwrite an existing live file or the repo pristine template business.sqlite3.
- **log**: Skill map: /business-bookkeeper for quotes invoices inventory BOM builds books and shop lists; /business-sites for multi-domain sessions claim lists mail tokens PathPassword; /business-cms for ordered translatable Content; /business-campaigns for campaign lifecycle using CMS bodies; /contribute-pr for PRs targeting develop.
- **log**: Business wiki: Post(debitAccount, amount, creditAccount, date) makes a raw double-entry posting and Book(bookName, amount) posts a named business event; read results via JournalReport and LedgerReport (ledger = 1 is General Ledger).
- **log**: Business web sessions (wiki): one Site and SiteApplicationRelease per product; tokens 32-128 chars and never reused across sites because ClaimSession looks up tokens without the SAR; token types session/mail/trial; no CreateIndividual on anonymous hits, keep SessionPath until ClaimSession; paid tier is a list like 'Pro', history in SiteMembership; AnonymousSession is legacy. Worked example Sample/SQL/Session/Client.sql on develop.
- **log**: Business SQL conventions (wiki): capitalized keywords and object names, lowercase fields and aliases, underscores only in temp variables, descriptive aliases, joining table on the left of the operator, minimal WHERE.
- **log**: Business wiki is thinner and partly stale versus the repo skills: no SQLite, install, CMS, or campaigns coverage; some Examples use raw UPDATE/INSERT on Individual, ListIndividual, IndividualJob; prefer repo skills where they conflict.
