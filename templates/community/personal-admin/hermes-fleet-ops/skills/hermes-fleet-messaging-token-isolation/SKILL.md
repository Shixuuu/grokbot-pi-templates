---
name: hermes-fleet-messaging-token-isolation
description: "use this when documenting Hermes fleet Bitwarden secrets for messaging bots — never share one TELEGRAM_BOT_TOKEN across hosts; use TELEGRAM_BOT_TOKEN_<PROFILE> so Hermes auto-aliases per active profile"
---

# Hermes fleet messaging token isolation

Never store a single shared TELEGRAM_BOT_TOKEN (or other messaging bot token) in a fleet-wide vault project that every host pulls with override_existing true.

Correct pattern: vault keys TELEGRAM_BOT_TOKEN_<PROFILE> (profile uppercased, - → _). Hermes auto-aliases to TELEGRAM_BOT_TOKEN for the active profile. Only one process may poll a given bot token. Shared vault is fine for identical provider keys.
