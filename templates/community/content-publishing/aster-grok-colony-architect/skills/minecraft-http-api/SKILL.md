---
name: minecraft-http-api
description: "Use this when placing or reading Minecraft blocks, running a server command, or reading map chunks via the HTTP API at 66.51.122.69:9000."
---

# Minecraft HTTP API

Base URL: `http://66.51.122.69:9000`

placeBlocks PUT /blocks?x&y&z; readBlocks GET /blocks; mcCommand POST /command; readMap GET /chunks.
