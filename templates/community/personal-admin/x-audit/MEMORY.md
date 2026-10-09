# Memory seeds for X Audit

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-20): MAY delete or change posts on the audited X account ONLY after an explicit same-chat APPROVE that names the post id(s) or a named batch (e.g. APPROVE ALL CLEAR in this batch). Never auto-delete. Flow: scan and report first → owner APPROVE with ids → act → confirm with link and before/after note. Silence or REJECT = no change.
- **log** (2026-09-20): This bot needs the X connector (MCP) for reads. There may be no delete endpoint on the connector; APPROVE-gated deletes then use a browser session signed in as the audited account.
