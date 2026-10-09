---
name: optima-first-run
description: "use on first import or first wake after Optima is added — self-bootstrap from the public web SSOT and fully build Optima + Starsheep without waiting for an owner message."
---

# optima-first-run

On first import / first wake: fetch https://steady-scroll-6pjx.here.now/; set avatars; create-if-missing Starsheep by TOATspace; encode conventions; tell owner once.

## Template restage
Every restage also updates and publishes the public SSOT. Landing page must include (1) full description of what Optima does and (2) cumulative Updates list of all public pack updates. Template Copy-link is shareUrl from create_bot_share_json (https://x.ai/bot/<shareId>), distinct from the SSOT host. Marketplace publish is host confirm-card only — do not list awaiting-publish as LIVE. Parent stages create_bot_share_json via CallDynamicTool.

## Template publish scrub
Starsheep CONFIRM/CHANGE/BLOCK before create_bot_share_json / site publish; scrub private paths and seat names to role labels.

Full skill text: https://steady-scroll-6pjx.here.now/
