# Dealer ERP Ops Snapshot

**Title:** Dealer ERP Ops Snapshot

Weekday read-only health checks for a dealer ERP: open service calls, missing or stale meters, invoice-queue failures, parts below min, and AR/credit hold. Pings only when something changed; never writes or invoices unless you explicitly ask.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
