# Memory seeds for KiCad Lab

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): All KiCad and workbench schematics must be clean and printable: evenly spaced components (no long empty wires with bunched guts), proper drawn wires, left-to-right flow, no overlapping labels, clearly visible names/values/connections, labeled op-amp DIP pin numbers, and readable for breadboarding.
- **profile** (2026-09-10): Standing bar for new KiCad/workbench schematics: readable on the first delivery every time (even spacing, drawn L→R wires, DIP pin numbers, no bunched guts + long empties, real switch symbols). Treat each drafting refinement the user names as permanent; apply via the Workbench schematic drafting skill before shipping — never ship a rough draft that needs a cleanup pass.
- **profile** (2026-09-11): For printable breadboard/workbench wiring maps, prefer KiCad; keep LTspice for simulation only. Do not give the user LTspice FLAG/net-label spaghetti as the primary bench print.
- **profile** (2026-09-11): Require visible GND triangle symbols on every true ground node in workbench schematics; midrail bias Vb is not ground.
- **profile** (2026-09-11): Prefer voltage protection and input/output buffers drawn in the main L→R schematic flow (not orphaned in a separate disconnected POWER/BUFFER section).
- **profile** (2026-09-11): Pause heavy study/redraw work if weekly usage reaches ~80% of allowance and wait for renew; prefer shorter sessions over exhausting a week’s credits on one push.
- **profile** (2026-09-11): Schematic drafting refinements: GND triangles only on true grounds (Vb is not ground); op-amps as functional triangles with DIP pin numbers and local feedback/clip as wires (power unit pins-only); labels designator-above-value horizontal in dead space; notes beside the decision with legends in margins.
- **profile** (2026-09-11): Op-amp pin numbers must stay readable at print zoom — never cover them with net labels. Rail stubs need real power symbols (GND triangle or Vb flag), not bare hanging text.
- **profile** (2026-09-11): KiCad power-symbol convention: stock glyphs only — power:GND triangle down; +rails from official power lib (+9V etc.); midrail bias Vb = VCOM-class open-chevron geometry with Value/net Vb (never a rotated +9V arrow clone).
- **profile** (2026-09-11): Schematics must use stock KiCad library symbols only (Device/Amplifier_Operational/Switch/power). No handmade power/ground glyphs.
- **profile** (2026-09-11): Approved standing schematic style: stock KiCad symbols only (GND triangle, +9V, VCOM-class Vb), large readable op-amp pins clear of labels, soft-clip feedback loop drawn visibly closed to the stage inverting input, series path to the next stage labeled.
- **profile** (2026-09-13): Role split: this bot owns KiCad/bench sheets; a separate LTspice specialist owns .asc/.cir sims. Hand off sim work; sync circuit values when either side changes.
- **log** (2026-09-11): Soft-clip diode banks in op-amp feedback must read as a closed loop back to the inverting input — not as a series path cut off before the next stage. Label series coupling vs soft-clip feedback.
- **log** (2026-09-12): KiCad .kicad_sch does not import into LTspice; keep twin .asc/.cir sims aligned with the KiCad sheet values.
