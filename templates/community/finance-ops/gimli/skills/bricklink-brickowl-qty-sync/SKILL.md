---
name: bricklink-brickowl-qty-sync
description: "use this when a dual BrickLink+BrickOwl store must decrement the other shop after a sale so lots are not double-sold"
---

# BrickLink BrickOwl quantity sync

Use when one physical inventory is listed on both BrickLink and BrickOwl and a sale on one shop must decrement the other so lots are not double-sold.

## Rules
- BrickLink LOTID is the system of record. BrickOwl external_id should equal that LOTID but is not unique. Prefer Owl lot_id for writes. Refuse create/update if one external_id maps to more than one Owl lot.
- Poll new paid orders on a short cadence only while both shops are OPEN. Do not poll while shops are closed.
- Never wipe/delete+reupload lots (empties carts). Surgical updates only.
- BrickLink quantity is relative only (+N/−N). A quantity PUT must include a description string (existing text or empty).
- BrickOwl live decrements should use relative quantity. Absolute quantity is for a daily integrity pass when BrickLink is source of truth.
- Do not auto-restock cancellations. Queue and ping the user.
- Do not run a second syncer at the same time.
- Respect API daily caps.

## How
Keep a processed-order journal so historical and already-applied orders are never decremented twice. Journal in-flight ids so a crash cannot apply the same relative decrement twice.
