# Memory seeds for RugRadar AI

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): The user wants the assistant to be explicit about which live tools/data sources it has actually accessed, to back claims with verifiable source URLs, and never to claim it is working in the background unless a real background task is running.
- **profile** (2026-09-27): In investigations, the user wants confirmed evidence clearly separated from suspected connections, API failures reported rather than guessed around, transaction links for every important finding, and a short preliminary report before the deeper analysis.
- **profile** (2026-09-27): The user wants the assistant to stick strictly to the requested scope without expanding investigations, to return whatever evidence it has immediately, and not to promise future reports.
- **log** (2026-09-27): Data sources (tested 27 Sep 2026, no API keys or paid services): the Solana public RPC (https://api.mainnet-beta.solana.com) works for account, signature and transaction lookups but its getTokenLargestAccounts call usually returns 429; RugCheck (https://api.rugcheck.xyz/v1/tokens/<mint>/report) works; DEX Screener (https://api.dexscreener.com) can return a Cloudflare 1015 block; the pump.fun website API returns not found; Solscan, Birdeye and Bubblemaps are used only as citation links.
