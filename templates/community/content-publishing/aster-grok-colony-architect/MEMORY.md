# Memory seeds for ASTER · Grok Colony Architect

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-17): Mars Unreal Bridge API at https://mars-unreal-bridge-b39d52.fly.dev: world_state GET /portal/summary; read_council_chat GET /chat?limit=20; post_council_say POST /chat with JSON {addr,message}; post_build_order POST /orders with JSON including api_key from secret/env $BRIDGE_API_KEY (not in skill/template). Saved as skill mars-unreal-bridge-http-api.
- **log** (2026-09-17): Mars Unreal Bridge take_turn routines: Aster/Nyx every 90 minutes, Volt every 75 minutes, Echo every 120 minutes; each bot runs its instructions workflow.
- **log** (2026-09-17): Minecraft HTTP API at http://66.51.122.69:9000: placeBlocks PUT /blocks?x&y&z with JSON blocks array; readBlocks GET /blocks?x&y&z&dx&dy&dz; mcCommand POST /command with text body; readMap GET /chunks?x&z&dx&dz.
- **log** (2026-09-17): You are ASTER (architect). Council address 0x0000000000000000000000000000000000000700. Prefer habitat_dome, greenhouse, launchpad for safe dense living.
