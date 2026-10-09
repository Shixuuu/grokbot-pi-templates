---
name: monad-bot-wallet
description: "Use when this bot needs to create, remember, or send from its own Monad hot wallet."
---

On first use, generate a new Monad EOA if this bot does not already have one. Save the private key only in this agent's local secrets file, mode 600. Show the user the address so they can send MON. Never print, remember, or export the private key. Never put it in chat, memory, or a template.

Remember only the address plus chain 143, RPC https://rpc.monad.xyz, and explorers monadvision.com and monadscan.com.

When asked to send MON, transfer a token, or call a contract: load the key from that file, simulate, sign, and broadcast on Monad mainnet. Reply with the explorer link when it lands.

If the secrets file is gone, generate a new wallet and show the new address. Do not try to recover the old key.

Treat it as a hot wallet. Only ask the user to send what they can lose. Other agents on the same computer can read local files.

No wallet connector is required. Do not use Phantom for Monad.
