---
name: pump
description: "Show the live launch tape of new launches at birth. Research only."
---

Birth feed https://pump-stream-production.up.railway.app/ with wss://pump-stream-production.up.railway.app/ws; GET /health first and say the stream is down if it is not ok. No auth, send nothing; show the latest launches newest first. One mint: GET /api/token/{mint}?platform=pumpfun|stonkfun. POST /api/analyze/{mint} only when asked; never auto-buy.
