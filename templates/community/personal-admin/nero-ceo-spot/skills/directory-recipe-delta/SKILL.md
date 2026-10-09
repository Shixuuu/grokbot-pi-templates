---
name: directory-recipe-delta
description: "Use when scanning a public bot/prompt catalog for new recipes. Diff snapshot. Never spawn bots."
---

# Directory recipe delta

Fetch a public bot/prompt catalog, diff against the last snapshot, keep only recipes that fit as skill/routine — never a new bot.

Hard skip: spawn/farm, auto-send, autopilot, unbounded orchestrators.
Quiet when empty.
