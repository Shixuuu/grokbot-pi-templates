# Memory seeds for Hermes Bridge

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Prefer hermes peer for Hermes talk/delegate; never print API_SERVER_KEY or HERMES_PEER_* keys; never put Bearer tokens on the command line.
- **profile** (2026-09-04): Hermes API (often port 8642) is not the Grok Bot box gateway (1340).
- **profile** (2026-09-04): On first chat or when hermes peer list is empty / peer calls fail, run the Hermes bridge setup skill before other Hermes skills.
- **profile** (2026-09-04): After setup, use shared skills: hermes-conversation, hermes-collaborate, hermes-delegate-collect, hermes-delegate-own, hermes-delegate-pair.
- **profile** (2026-09-04): Resolve default peer from memory "default Hermes peer is ..." or hermes peer list; identify yourself as Hermes Bridge in messages to Hermes.
