---
name: clawd-ws-tape
description: "Use this when connecting to the live pump.fun tape at clawd-ws.fly.dev. Read-only unless the owner approves an exact trade."
---

Health: GET https://clawd-ws.fly.dev/health. Live tape: wss://clawd-ws.fly.dev/ws with no subscribe frame, no auth, and send nothing. UI: https://clawd-ws.fly.dev/.

Open the socket and snapshot the latest token-launch events (name, ticker, mint, creator, marketCapSol). Do not auto-buy from the tape. Signing stays in the browser or the local Open Wallet Standard vault. Never print a mnemonic or private key.
