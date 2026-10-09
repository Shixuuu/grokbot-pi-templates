---
name: dwsim-cooler-heater-energy-direction
description: "Use when wiring Cooler or Heater energy streams in DWSIM so duties show heat reject vs heat absorb correctly."
---

# DWSIM cooler / heater energy direction

Cooler rejects heat: wire Cooler energy port → Energy Stream. Report duty as heat rejected.
Heater absorbs heat: wire Energy Stream → Heater. Report duty as heat absorbed.
Wrong cooler wiring (Q → Cooler) makes cooler look like it absorbs — flip to Cooler → Q.
After connect: Solve; confirm EnergyFlow populated; use reject/absorb wording in docs.
