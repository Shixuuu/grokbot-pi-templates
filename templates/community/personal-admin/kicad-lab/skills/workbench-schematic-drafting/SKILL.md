---
name: workbench-schematic-drafting
description: "use this when creating or redrawing LTspice, KiCad, or other schematics for pedal/circuit work that will be printed for the workbench"
---

# Workbench schematic drafting

## Non-negotiable bar
**First-pass readable every time.** Bench-printable and breadboard-followable on the *first* delivery — never a crowded draft that needs a cleanup pass. Treat every refinement the user names as permanent.

**Canonical style lock:** stock KiCad symbols (GND triangle, +9V, VCOM-class Vb), large readable op-amp pins clear of labels, soft-clip feedback drawn closed to the stage inverting input, series path to the next stage labeled.

## Tool split (locked)
- **Printable breadboard / PCB schematic → KiCad**
- **Simulation → LTspice** — never the primary bench print
- No LTspice FLAG/net-label spaghetti as a wiring map

## Visual reference
Generous whitespace; orthogonal wires; **T-junctions with dots** (no ambiguous 4-ways); L→R signal; power high; **GND triangles pointing down**; designator above value, **horizontal only**, dead space; clear IN/OUT flags. Match a known-good readability reference for spacing/label clarity only — not topology.

## Locked user preferences
1. **Protection + buffers in the main L→R flow** — section titles OK; orphan POWER/BUFFER islands not OK.
2. **Visible GND triangles** on every true ground; midrail bias `Vb` is not GND.
3. Prefer **TL072 DIP-8** duals for op-amp pedal builds; pin numbers on every amp connection; power unit = pins only.
4. **Op-amp pin numbers must be readable at print zoom** — never cover them with net labels. Place net labels on the wire away from the pin stub.
5. **Stock KiCad power glyphs only.** True ground → official `power:GND` triangle pointing down. +rails from the official power lib. Midrail **Vb = VCOM-class open chevron** (Value/net = `Vb`) — never a rotated +9V barb. No bare hanging rail text.
6. **All schematic symbols = stock KiCad libs** — Device R/C/C_Polarized/D/LED/R_Potentiometer, Amplifier_Operational:TL072, Switch rotary, power:GND/+9V/Vb. No homemade polylines posing as parts.
7. **Soft-clip feedback must read closed.** When clip diodes sit in an op-amp feedback loop, draw the return to the inverting input so a reader cannot mistake the bank for a series path. Label series coupling vs soft-clip feedback.

## Rules
1. Printable landscape; complete title block (name, rev, sheet, date).
2. Even spacing — no bunched guts + long empty wires; prefer ≥2 grid steps of wire before bends.
3. Drawn wires on signal path L→R; dry tap drawn when present; short wires inside a block; labels when a wire would cross the sheet — but not on top of pin numbers.
4. Functional blocks with gaps/titles, but keep protection/buffer in the path.
5. IC pins by function (+/−/out) with package pin numbers for breadboard + pinout legend. Pin number glyphs: high contrast, outside the triangle body, clear of wires and labels.
6. No overlapping / vertical / upside-down text.
7. Real switch symbols; no sim scaffolding on the print.
8. High-Z input buffer in the signal path unless omitted.
9. Decoupling drawn next to the IC power pins it serves; clear polarity.
10. Notes next to the *why*; use `100n`/`10n` style over `0.01u` on prints.
11. Stay on the default schematic grid for symbols/wires.
12. LTspice verify when sim is in scope (separate files / separate sim specialist).
13. Deliver printable packs to the user’s project folder; accumulate refinements same session.
14. Pause heavy study/redraw if weekly usage approaches ~80%.

## Anti-patterns
- Crowded clusters + long empty spans
- Missing / upside-down / invisible grounds
- Bare Vb / rail text stubs instead of power symbols
- Rotated +9V barbs used as midrail Vb
- Homemade polylines instead of stock KiCad symbols
- Net labels overlapping op-amp pin numbers
- Tiny unreadable pin numbers “saved” by a text legend alone
- Buffer or protection in a disconnected side section
- Soft-clip diode bank that looks cut off / series into the next stage
- Net-label islands hiding local topology
- Ambiguous 4-way wire crosses
- Title/notes through components; vertical text
- Shipping a rough sheet expecting a cleanup pass
