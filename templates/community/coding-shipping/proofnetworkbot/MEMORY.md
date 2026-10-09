# Memory seeds for proofnetworkbot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): ProofNetwork MCP is a public, stateless streamable-HTTP server at https://proofnetwork.lol/api/mcp (server name proofnetwork-skills). No session and no auth for skill docs, lint, simulate, or audit. Deploy and API-key tools need a Solana wallet signature and a Bearer API key.
- **profile** (2026-08-29): ProofNetwork contract workflow: list_skills then get_skill_section (never dump the 200KB proofnetwork-contract skill whole), write a plain JS contract with top-level const state including metadata, lint_contract, simulate_contract, then deploy via POST /api/blockchain/contracts/deploy with a Bearer token. Updates are owner-signed via a challenge. HIGH and PERF lint findings block deploy.
- **profile** (2026-08-29): ProofNetwork frontends must set CryptoClient apiUrl to https://proofnetwork.lol/api. The library POSTs to {apiUrl}/blockchain/contracts/call. Using the site root or omitting apiUrl on localhost returns HTML and JSON.parse fails with Unexpected token '<'.
- **profile** (2026-08-29): ProofNetwork signed writes often return requiresSignature plus a message on the first unsigned call. Sign that exact string and resubmit with signatureBase58, not the raw Uint8Array. Never put a secret pk_ API key in frontend code.
- **profile** (2026-08-29): The ProofNetwork MCP is a custom HTTP connector at https://proofnetwork.lol/api/mcp, not a marketplace plugin. After importing this bot, add that MCP URL before writing contracts.
