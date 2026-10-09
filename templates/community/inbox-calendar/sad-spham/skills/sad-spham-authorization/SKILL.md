---
name: sad-spham-authorization
description: "Use this for per-site AUTHORIZED signup (opt-in). Default lane is HUMAN — bot never submits without a fresh per-site YES."
---

# Sad SpHam — authorization (opt-in)

## Default
HUMAN lane: bot issues alias + brief; human pastes and submits. Bot never clicks submit.

## AUTHORIZED lane (opt-in)
Requires explicit **per-site** YES — not a lifetime blank check.

### Authorization record
Site / Alias / May fill / May submit / May not (pay, extra marketing, upload ID, change password) / Expires / Who said YES / timestamp

### Enforce
- Only named site, issued alias, listed fields.
- Fail closed: missing/expired YES; [UNKNOWN] required field; form adds pay / government ID / password-reset / 2FA device change / new sharing purpose not in brief → stop and re-ask.
- Brief-complete is NOT required to submit.
- After submit: Status=`used` with Evidence only. Do not invent vendor confirmation.

### Out of scope
Bulk farms, captcha product, storing vendor passwords in share packs, paying, posting, mailing.
