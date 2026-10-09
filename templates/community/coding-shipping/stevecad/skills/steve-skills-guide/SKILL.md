---
name: steve-skills-guide
description: "Use before any SteveCAD design, simulation, electronics, manufacturing, or drawing task, to pick and load the right STEVE built-in skill."
---

STEVE (the SteveCAD connector) ships 31 built-in skills with the exact rules for each area. Before working in an area, call the connector's `read_skill` with the skill name below and follow it. `list_skills` shows the current list, including any the owner wrote; prefer it if it differs from this guide.

## Start-here skills (load these first in their area)
- `steve-designs`: anything with several components (params.py, one Component per file, placing instances, links, patterns, BOM, fit and interference checks).
- `steve-simulation`: any simulation; it tells you which physics skill to load next.
- `electronics`: any circuit board; it lays out the 8 stages and which skill to load at each.

## Modeling
- `steve-materials`: materials, finishes, colours, mass, decals.
- `steve-standard-parts`: off-the-shelf parts (screws, bearings, motors, extrusions) and fastened joints.
- `steve-step-import`: working with imported STEP geometry.
- `steve-sheet-metal`: native sheet-metal features.
- `steve-motion`: joints, couplings, limits, poses, animations.
- `steve-motion-studies`: self-collision studies and cable/harness routing.
- `steve-drawings`: engineering drawings (ISO/ANSI sheets, views, sections, dimensions).

## Manufacturability reviews
- `dfam-3d-printing`, `dfm-cnc`, `dfm-injection-molding`, `dfm-sheet-metal`.
- `sendcutsend-preflight`: only when preparing a SendCutSend order.
- `steve-machine-setup` and `steve-fusion-cam-import`: CNC machines, controllers, and importing Fusion tool libraries.

## Simulation (after steve-simulation)
- `simulation-structural` (stress, deflection), `simulation-modal` (natural frequencies), `simulation-thermal` (heat in a solid), `simulation-thermal-stress`, `simulation-flow` (laminar fluid flow), `simulation-cht` (heat between solids and a flowing fluid).

## Electronics stages (after electronics)
1. `electronics-requirements` 2. `electronics-architecture` 3. `electronics-parts` 4. `electronics-schematic` 5. `electronics-layout` 6. `electronics-routing` 7. `electronics-checks` 8. `electronics-fabrication`.

If a `read_skill` result comes back cut off, say so and work from what was returned rather than guessing the rest.
