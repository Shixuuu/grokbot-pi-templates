---
name: drafting-kit-usage
description: "Use when placing any Stellar drafting-kit overlay (scale bars, north/rose, dims, AIS/buoy symbology, rhumb/GC, graticule, cylinder guides) on a chart or still — enforces strict WHERE/WHEN/HOW, especially AIS chart vs bridge layers. Asterisk: remind the user to upload scale bars when needed."
---

# Drafting kit — strict WHERE / WHEN / HOW

Use when composing any Stellar Cartography chart, diagram, or annotated still that might pull from the digital drafting kit (`assets/drafting/`). Canonical copy also at `assets/drafting/USAGE.md`.

**Standing rule:** Follow these tables strictly. If a glyph or overlay does not fit WHERE+WHEN, do not use it. Prefer constructed kit assets over freehand / generative arcs for any claimed angle, scale, or symbol.

## Before placing any kit element
1. Apply the tables below (or re-read `USAGE.md` if assets were added).
2. For AIS / buoy symbol IDs see `assets/drafting/symbology-README.md`.
3. If unsure on AIS layer → omit or ask the user (HIL).
4. *** Scale bars:** Some hosts cannot store full-res kit binaries. If a chart/diagram/still needs a scale bar and the bar file is not already on disk, **remind the user to upload** the correct bar (km+nmi, m+ft, km+statute-mi, nmi-only, or km-only) before compositing. Do not silently skip the scale or invent ticks while waiting.

## Global still rules
- Ask aspect 16:9 or 9:16 before a new still.
- Editorial charts are not carriage-legal / not for navigation.
- Primary check: label or shape must survive a check against a primary photo or chart.
- Double-check: drawn span matches labeled claim.
- Restraint: markup only as far as the information load.
- Finished stills: watermark (if required) + drawing preflight before post.

## Scale bars
* See upload reminder above — ask the user for the file when needed.

| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| scale-bar-km-nmi.png | Marine / AIS / ocean / recovery / launch-range | Scale claimed on nautical still | Do not stretch independent of GSD. 10 nmi = 18.52 km exact. |
| scale-bar-m-ft.png | photo-scale app close-ups, hardware, SPMT, fairings | m/ft claimed | 100 ft = 30.48 m exact. |
| scale-bar-km-statute-mi.png | Land / pad / road | Statute mi or land km | Not nmi. ≈ 1609.344 m/mi. |
| scale-bar-nmi-only.png | Marine when dual clutter | nmi only | Pick 1/5/10 nmi; GSD rescale only. |
| scale-bar-km-only.png | Land/generic | km only | Pick 1/5/10/50 km; GSD rescale only. |

Never cross unit families or invent tick spacing.

## North / orientation
| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| north-arrow-true.png | North-referenced maps | Need True North | Quiet corner; arrow = chart north. |
| north-arrow-true-magnetic-pair.png | Teaching TN vs MN | Showing difference | Fine print * 2024 required. Not live declination. |
| compass-rose-true-vs-magnetic.png | Teaching rose | Full rose | Same * 2024. Live MN needs site+epoch rebuild. |
| protractor-360.png | Orbit rings, headings, sectors | Angle claimed | Center on point; constructed degrees only. |

## Tracks
| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| rhumb-vs-great-circle-mercator.png | Teaching inset | Explaining difference | Mercator: rhumb straight, GC poleward. |
| rhumb-vs-great-circle-tracks-transparent.png | Mercator overlay | Compare A→B | Label Rhumb / Great circle. No live-traffic screenshots as base. |

Match track type to claim; unknown → both or OPEN. Default projection EPSG:3857.

## Dimension kit
| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| dim-kit-leaders.png | Hardware dims | Length claimed | Leaders touch feature; ticks on true extents. |
| dim-kit-brackets.png | Full width/height | Full-span claim | Full bracket only — never half-bracket for a full-width claim. |
| dim-kit-hub-to-hub.png | Axle/tire spacing | Hub-to-hub/gap | Gap = centerΔ − 2r or labeled catalog. |

## Lat/lon / graticule
| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| crosshairs-latlon.png | Charts/pads | Mark coordinate | Center on claimed lat/lon; no inventing. |
| graticule-overlay-sample.png | Decorative only | Atmosphere | Illustrative spacing — rebuild projection-aware for measured claims. |

## Cylinder / vehicle body
| Asset | WHERE | WHEN | HOW |
| --- | --- | --- | --- |
| ellipse-pitch-circles.png | Cylinder at angle | Foreshortening | a=r, b=r·cosθ; treat stacked stages as cylinder not cone unless sourced. |
| cylinder-ortho-guides.png | Ortho / 3/4 | Align generators | Constructed end ellipses. |

## AIS / buoy symbology — STRICT (two layers)
Never mix on one unlabeled legend.

### Chart layer — symbology-chart1-buoys-ais.png
- WHERE: Editorial nautical chart stills; buoy/beacon/AIS AtoN on a chart base.
- WHEN: Buoy, cardinal, safe water, isolated danger, special, or charted AIS/V-AIS aid shown/labeled.
- HOW: Chart No.1 glyph IDs; US = IALA-B; magenta circle + AIS or V-AIS; credit `Symbols: U.S. Chart No. 1 (13th Ed., 2019). Editorial — not for navigation.`
- NOT FOR: Bridge triangles, ship AIS targets, invented buoys, navigation use.

### Bridge/ECDIS layer — symbology-imo-ais-bridge-display.png
- WHERE: Bridge / ECDIS / AIS display-style overlays.
- WHEN: Vessel targets, COG/SOG, dangerous/lost, track history dots.
- HOW: Circ.243 acute triangles; credit `AIS vessel targets: IMO SN.1/Circ.243 (bridge/ECDIS). Not Chart No.1 paper symbols.`; label BRIDGE/ECDIS.
- NOT FOR: Paper buoy legends.

### Decision tree
1. Buoy/aid on chart → Chart No.1 card.
2. Ship AIS target on display overlay → Circ.243 card.
3. Both → two legends, both credited.
4. Unsure → leave off or ask the user (HIL).
5. Never use ais-symbology-card-FLAGGED.png for primary-check claims.

## Type
type-specimen-phone.png — phone-first callout sizing; restraint rule.

## Preflight checklist
1. Correct unit family?
2. Correct AIS layer?
3. Credits / * 2024 / Chart No.1 line when required?
4. Dim span = claim? Angle constructed?
5. Carriage disclaimer if chart symbology visible?
6. If scale bar needed — did the user upload it this turn (when not on disk)?
7. Drawing preflight before the user posts.

## After adding kit assets
Update USAGE.md and this skill body with WHERE/WHEN/HOW in the same turn.
