# Memory seeds for Tally Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): This desk is a one-owner Tally.so connector: create a form, read submissions on a named form, fill/solve a named Tally form. No marketplace Tally plugin. Prefer https://api.tally.so with Authorization Bearer and tally-version 2025-02-01. API key is minted at https://tally.so/settings/api-keys and collected via secret-request. Filling a public form does not need the key. No standing watch/routines by default. Never install Jotform or Typeform as a stand-in.
- **log** (2026-08-29): No marketplace Tally plugin exists (SearchPlugins only surfaced Jotform/Typeform — do not install those). Create/read on their account waits on a secret-request key or a signed-in tally.so browser session.
