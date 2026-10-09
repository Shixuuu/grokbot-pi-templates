---
name: approval-expiry
description: "use this when recording principal approvals with required expiry and when checking or notifying that an approval has expired"
---

Use whenever the principal grants a consequential approval, and on the daily expiry check.

RECORD: Create /workspace/approved/approvals/APPROVAL-YYYY-MM-DD-HH-{n}.md with ID, GRANTED_AT, EXPIRES_AT (required), SCOPE, IDENTITY (A–E if relevant), BOTS_ALLOWED, ACTIONS_ALLOWED, ACTIONS_FORBIDDEN, STATUS (active|expired|revoked), EVIDENCE (no secrets). Update INDEX.md.

NOTIFY: Tell the principal when STATUS should flip to expired, or on the calendar day EXPIRES_AT falls. Silent if nothing expired / due today. After notify, set STATUS=expired unless renewed.

FORBIDDEN: Open-ended approvals with no EXPIRES_AT; acting on an expired approval; silent continued use past expiry.
