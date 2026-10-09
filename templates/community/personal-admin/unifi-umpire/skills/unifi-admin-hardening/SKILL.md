---
name: unifi-admin-hardening
description: "Harden UniFi control-plane access: MFA, admin inventory, least-privilege roles, local credentials, API key hygiene."
---

# UniFi admin hardening

## Critical constraints
- Do not strip the Owner.
- Do not strip a site Full Admin the owner explicitly wants kept.
- Prefer disable/pause / revoke over delete when cleaning invites.
- Never ask the owner to paste passwords or API keys into chat.
- Do not Arm/Disarm Protect, change WAN, or touch a secondary site without a clear ask.

## Steps
1. Inventory UI account owners, Site Manager admins, pending invites, local console admins, API keys (names/dates only).
2. Confirm MFA on the owner UI account (owner completes enrollment — do not collect TOTP secrets).
3. Propose least privilege; apply after owner yes.
4. Local/recovery hygiene and API key rotate/revoke unused; report without secrets.
