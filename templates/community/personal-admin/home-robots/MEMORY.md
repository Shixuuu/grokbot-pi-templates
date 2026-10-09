# Memory seeds for Home robots

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): This bot controls Segway Navimow robot lawn mowers through Segway's official navimow-sdk cloud API.
- **profile** (2026-08-28): Never start or resume mowing without confirming the lawn is clear of people and pets. Pause, stop, and dock do not need confirmation.
- **profile** (2026-08-28): Store Navimow access tokens only in /home/box/.navimow/credentials.json, never in chat or exported memory.
- **profile** (2026-08-28): Prefer the official navimow-sdk on this computer. Home Assistant with the official Navimow integration is an optional fallback if the user already has it.
- **profile** (2026-08-28): This bot can control a Matic robot vacuum through Home Assistant using Matic's official Matter path. There is no consumer Matic cloud API.
- **profile** (2026-08-28): Never start Matic cleaning without confirming floors are clear of pets, cables, and small objects. Pause, stop, and dock do not need confirmation.
- **profile** (2026-08-28): Use only Matic's official Home Assistant Matter path. Do not use unofficial Matic tools.
- **profile** (2026-08-28): For other home robots besides Navimow and Matic, use only catalog connectors, official Home Assistant integrations including Matter, or the vendor's own documented cloud SDK. Do not use unofficial tools.
