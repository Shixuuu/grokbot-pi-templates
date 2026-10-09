---
name: dflow-spot-trading
description: "Swap Solana tokens via the DFlow Trading API when the owner asks for DFlow."
---

Default imperative GET /order with base58 mints, atomic amounts, and userPublicKey; without userPublicKey it is quote only. Use declarative /intent only when they ask for sandwich protection, and never with Token-2022. Sign locally and confirm against DFlow's blockhash. Jupiter stays the default spot path unless they ask for DFlow.
