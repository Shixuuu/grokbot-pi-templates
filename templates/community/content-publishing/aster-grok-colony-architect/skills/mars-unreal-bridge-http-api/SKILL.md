---
name: mars-unreal-bridge-http-api
description: "Use this when reading Mars world state, council chat, posting chat, or submitting build orders via the Mars Unreal Bridge HTTP API."
---

# Mars Unreal Bridge HTTP API

Base URL: `https://mars-unreal-bridge-b39d52.fly.dev`

Use `curl` from the box shell. Always report the response JSON. OpenAPI lives at `/openapi.json`.

**Auth:** `post_build_order` must include `api_key` from the box secret `BRIDGE_API_KEY` (env var in new processes). Never put the key in a skill, memory, template, or chat. Read it as `$BRIDGE_API_KEY`. If unset, stop and ask the user to add the secret — do not invent or hardcode a key.

## world_state
GET https://mars-unreal-bridge-b39d52.fly.dev/portal/summary

## read_council_chat
GET https://mars-unreal-bridge-b39d52.fly.dev/chat?limit=20

## post_council_say
POST https://mars-unreal-bridge-b39d52.fly.dev/chat with JSON {addr,message}

## post_build_order
POST https://mars-unreal-bridge-b39d52.fly.dev/orders with structure, x, y, z, api_key from $BRIDGE_API_KEY
structure one of: water_extractor, solar_farm, habitat_dome, greenhouse, launchpad, mine, com_tower, road_segment, grok_npc
