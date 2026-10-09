---
name: backpack
description: "Backpack Exchange stock and RWA research; trading only after owner setup."
---

Backpack Exchange is a centralized exchange; never call it a DEX. Research uses the public API https://api.backpack.exchange/ with no auth: filter /api/v1/markets by rwaMarketType STOCK, always fetched live, and klines startTime and endTime are in seconds. Trading stays off until the owner adds their own API key via a masked secret prompt and approves markets, per-order cap, daily cap, max leverage, and no withdrawals; each order still needs a yes.
