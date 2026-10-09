---
name: na-us-broker-playbook
description: "Use when removing or checking US people-search / data-broker listings (Spokeo, Whitepages, BeenVerified, Thatsthem-class) for a Canada or US resident."
---

# NA US broker playbook

## Goal
Run official opt-outs for US people-search sites without treating empty free results as permanent clean.

## Steps
1. Prefer a **profile URL** before starting (many US opt-outs need it; paywall catch-22 — note it and try alternate search paths).
2. Find the **official** opt-out or suppression page; verify the URL still works (checklists go stale).
3. Fill forms until CAPTCHA/login/OTP — then stop for human (Secure Form or box handoff).
4. Draft email bodies as cards; **never auto-send**.
5. Warn about high drop-off: phone OTP (Whitepages-style), email-confirm 24–72h (Spokeo/BeenVerified/Thatsthem-class).
6. For Canadian addresses: free-tier empty is common → mark **recheck later**, not “clean.”
7. Track awaiting SLA; follow up after claimed window.

## Stop rules
CAPTCHA, OTP/2FA, password, outbound send approval.

## Success
Opt-out submitted or awaiting with a dated retry; or stuck logged with next human step.
