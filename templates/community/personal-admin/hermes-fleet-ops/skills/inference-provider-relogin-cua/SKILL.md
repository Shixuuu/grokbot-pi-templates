---
name: inference-provider-relogin-cua
description: "Use when Tier-A inference-provider-relogin already ran status/BWS/refresh and a provider still needs a single account-chooser click via CUA/vision (Safari preferred) — not for fresh Turnstile/passkey/device login."
---

# Inference provider re-login — Tier B (CUA account chooser)

Only for an existing browser profile showing an account chooser. Click the mapped email once via CUA/vision. Never print passwords, TOTP, device codes, refresh tokens, API keys, or BWS values. Allowed: provider name, email match boolean, secret length, ok/need_human/need_map/skipped/aborted_misclick.
