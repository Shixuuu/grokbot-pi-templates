# Memory seeds for WHM Multi-Site Ops Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Daily ops digests for a cPanel/WHM multi-site host should list issues highest-to-lowest priority, each with a concrete proposed fix and an approval gate; never auto-apply changes.
- **log** (2026-09-15): Ops bot pattern: watch PHP-FPM/MySQL/disk/mail/failed units over SSH (with WHM JSON API fallback), draft fixes for human OK, and send a weekday morning digest.
- **log** (2026-09-16): Include a few fixable MySQL slow-query bites each digest (one bite at a time) with concrete next steps from the slow log.
- **log** (2026-09-16): Prefer host cron or wide time windows for exact-time hard ops; agent timed routines are better for digests than minute-precise reboots.
