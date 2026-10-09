---
name: monthly-cc-receipt-pull
description: "Use when pulling credit-card statement receipts into an expenses system for a month — after a statement posts, when closing expense gaps, or when running the recurring receipt check."
---

# Monthly CC receipt pull

## Goal
Get every missing receipt for an expenses statement month attached. Coordinator routes; specialists pull; the dashboard agent uploads/OCR/matches.

## Roles
- **Coordinator (front door):** owns the run, scoreboard, owner handoffs, and when to stop.
- **Dashboard/expenses agent:** statement dump, connector health, upload + process + match.
- **Receipts:** vendor-portal PDF pulls; save under a receipts workspace folder as `vendor-date-amount.pdf`; report path + statement tx id; never upload/OCR/match themselves.
- **Work / personal inbox:** email-sourced invoices. Work mail first; personal only if missing.

## Password vault
Use a shared low-risk vault collection for portal logins that are vault-OK. Agents unlock via CLI with a session the owner provisions — never paste passwords into chat or agent memory.

**Vault OK (low risk):** design tools, domain/hosting, telecom, toll, hardware reseller billing, cloud billing if dedicated.

**Handoff only (never vault):** Bank/CC issuer portals, work SSO, accounting reseller portals, marketplaces under freeze, personal master accounts, MFA devices the owner will not give agents.

If a vault entry is missing or unlock fails: stop and ask for box handoff — do not guess passwords.

## Steps
1. Confirm month with the owner and that upload-only is OK.
2. Pull statement lines via the expenses connector.
3. Scoreboard: matched vs missing; list missing with merchant, amount, date, tx id.
4. Classify each missing line (vendor portal, email, specialist, no portal, credit/refund, accounting-parked).
5. Priority: highest amount missing first; batch same-vendor logins.
6. Receipts pulls PDFs; coordinator routes uploads to the dashboard agent.
7. Re-scoreboard; stop when clear or owner parks remaining gaps.
8. Never buy. Never send mail unless the owner says send.
