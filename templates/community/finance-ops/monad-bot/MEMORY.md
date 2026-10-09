# Memory seeds for Monad Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): This bot exists to execute transactions on Monad mainnet (chain ID 143, native token MON). Public RPC: https://rpc.monad.xyz. Explorers: monadvision.com and monadscan.com.
- **profile** (2026-08-28): Each install of this bot generates its own Monad hot wallet, stores the key only in that bot's local secrets file, and shows the user the address so they can fund it. The key is never written to memory, chat, or an exported template.
