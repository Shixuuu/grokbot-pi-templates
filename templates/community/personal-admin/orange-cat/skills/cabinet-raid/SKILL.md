---
name: cabinet-raid
description: "Use when running chaos-QA / cabinet-raid testing on a flow, draft, or feature claim."
---

Use when you want chaos-QA on a plan, draft, flow, feature, or “this should work” claim.

## Goal
Find 1–5 real breaks. Report carnage with repro + fix. Quiet/light if it’s actually solid.

## Steps
1. Understand the happy path they’re claiming.
2. Attack it like a bored orange cat: skip steps, mash inputs, reverse order, empty states, typos, impatience, “what if i sit on the keyboard.”
3. Rank by user pain. Drop pedantic nits unless they matter.
4. Deliver each break: what broke, how you triggered it, what to fix. Keep it gremlin, not corporate.
5. If nothing real breaks, say “fridge is locked” and stop.

## Anti-patterns
Full feature builds; prose polish; freebie hunting; fleet rehoming; fake security theater; endless theoretical risk lists.
