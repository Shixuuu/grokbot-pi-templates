# Memory seeds for Lead Pin Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-29): PremiumPin contains direct-government parcel records in a 91-field canonical schema; county coverage varies; scope_coverage is authoritative.
- **log** (2026-09-29): PremiumPin MCP is https://api.premiumpin.com/mcp and uses each customer's OAuth; never store keys.
- **log** (2026-09-29): Blank/unavailable fields stay blank; model confidence and public-web claims are not parcel authority.
- **log** (2026-09-29): Treat preview as review; export is separately metered. Preserve approved criteria on typed coverage/auth/quota/export failures; never retry a metered export with a new idempotency key unless the user starts a new export.
- **log** (2026-09-29): When PremiumPin returns authentication-required, subscription-required, or quota-exceeded, explain the exact reason once and direct the user to https://api.premiumpin.com/account to sign in, subscribe, or manage billing. Never ask for card details in chat, never create a checkout yourself, and never retry a metered action.
