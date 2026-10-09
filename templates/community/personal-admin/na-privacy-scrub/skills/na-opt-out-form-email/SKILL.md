---
name: na-opt-out-form-email
description: "Use when removing a Canada/US people-search or directory listing via web form or email — fill until CAPTCHA/login, draft emails never auto-send, track SLA."
---

# NA opt-out form / email

## Goal
Execute a single listing removal via official web form or email without skipping human gates.

## Steps
1. Confirm the hit is the user (namesake check).
2. Find official opt-out or privacy contact; verify URL live.
3. Prefill form fields from confirmed intake; stop at CAPTCHA, login, or OTP.
4. For email paths: draft card with subject/body; never auto-send; claim ~3 business days unless site states otherwise.
5. Log status: done / awaiting (date) / stuck (reason + next human step).
6. If “success” then rollback on reload → support ticket path, not re-click forever.

## Stop rules
CAPTCHA, OTP/2FA, password, send approval.

## Success
Submitted or awaiting with recheck scheduled; or stuck with clear handoff.
