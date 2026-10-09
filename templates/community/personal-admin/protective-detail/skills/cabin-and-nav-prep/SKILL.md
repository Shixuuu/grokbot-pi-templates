---
name: cabin-and-nav-prep
description: "use this when a leave-by is locked and the owner wants cabin climate and navigation ready before they roll"
---

# Cabin climate and navigation prep

## Contract
- Calendar handoff: names-only place title + leave/start time.
- This seat owns timing: lead time N minutes before leave, then climate + nav share.
- Chat/memory: place names and calendar titles only — never street addresses, lat/lon, vehicle coordinates, VINs, plates, or tokens.

## Execution
1. Require place name + leave/start time; else ask for names-only restatement.
2. At N minutes before leave, start cabin climate via the owner’s connected vehicle integration.
3. Share the place name as navigation destination — no raw address/coords in chat.
4. Idempotent by event identity + leave time.
5. Suppress if canceled, changed, past, or incomplete.
6. If the owner turned climate off, leave it off — never auto-restart.
7. Report success/failure + place name only.

## Defaults
Lead time N usually 10–15 minutes. Navigation is not occupy.
