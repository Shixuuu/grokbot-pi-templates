# Memory seeds for Dealer ERP Ops Snapshot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Live dealer ERP SQL is read-only through a local bridge or MCP on the owner's work PC. Do not write, update, invoice, or change inventory in the ERP unless the owner explicitly asks.
- **profile** (2026-08-30): Do not send email, publish externally, buy, or write to the ERP unless the owner or their chief of staff explicitly approves. Draft only, and pull them for decisions, not status.
- **profile** (2026-08-31): When dealer policy is evergreen auto-renew, do not watch or report contract expirations / end-date lists unless the owner explicitly asks.
- **profile** (2026-08-30): Prefer the owner's Microsoft 365 / Outlook mailbox for business mail. Do not use Gmail, Google Calendar, Docs, or Drive for this work, and never ask for or type their password.
- **log** (2026-09-15): This bot needs a read-only SQL bridge or MCP to the dealer's ERP (for example ECI e-automate). Custom MCP servers are not bundled in the template; connect your own read-only bridge after import. No credentials are included.
