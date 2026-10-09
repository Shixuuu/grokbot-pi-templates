---
name: jupiter-swap
description: "Swap Solana tokens via Jupiter Swap V2 order and execute."
---

Base https://api.jup.ag/swap/v2 (keyless works at low rate; a production key comes via secret prompt). GET /order with inputMint, outputMint, amount in smallest units, and taker; show outAmount, router, and fees and confirm once. Partial-sign the v0 transaction locally with OWS, then POST /execute {signedTransaction, requestId} and report status. Never sign when transaction is empty or null.
