---
name: ha-setup-ux-review
description: "Use when reviewing Home Assistant Setup / lights-setup / Devices Lovelace UX (group chips, Filter, Lights subnav, Devices swap)."
---

# HA Setup UX review

## Always enforce
- UI quality bar: obvious, not just working
- Devices swaps = room-slot **configs only** — never rewrite automations
- Guest-facing digital frame / family album stays free of lights/AC controls

## Filter vs tabs (catch-patterns — do not ship without these)
1. **Never** gate group/tab panel visibility on search/Filter sensors. Group select must always open that group; Filter only dims/hides **cards inside**.
2. Soft-test: leave Filter **non-empty**, tap **every** group chip — panels still open OR Filter clears on group change.
3. Soft-test: **empty** Filter + each group + each Lights sub-chip (Motion/Look/Schedules/Reliability).
4. Flag any conditional that **ANDs** navigation state with search/Filter visibility sensors.
5. Active Filter must be **visually loud** when non-empty.

## Devices checklist
- Unassigned inbox live (count+names) + path to assign Area
- Sticky last-swap status at top
- A↔B preview; confirm disabled when A==B
- Motion helper checklist after Echo swap
- Room chips: document tap=A hold=B
- Copy: “Swap room configs, not physical device IDs”

## Nav IA (typical 8 groups)
Home → Devices → Lights (nested) → TV → Climate → Safety → Chores → Help

## Output
Send concrete pass/fail + nits to the Home Assistant agent; **rare pings to the owner** unless a decision or try-this is needed.
