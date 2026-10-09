---
name: create-coin
description: "Launch a new token only after the owner approves the exact terms."
---

Gather name, symbol, metadata uri, initial buy, quote mint, and options from the owner; never invent them. Build via the official pump agent API or @pump-fun/pump-sdk, which return a partially signed transaction. Show the exact terms and cost, and sign and send only after the owner's yes.
