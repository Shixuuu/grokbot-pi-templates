---
name: conduit-fill
description: "Use this when an electrician needs a raceway-area worksheet with verified conductor areas, raceway area and applicable fill limits."
---

# Conduit Fill

**Review status:** `[needs-code-review]`. This draft has no trusted table database or live source plugin.

## Execution gate
Apply the Calculation execution gate in the embedded Bot instructions profile memory. Confirm supported 2023 dwelling scope, final source and applicability; unknowns stay **TBD**. Never supply an uncommon insulation/raceway area or maximum count from memory.

## Required inputs
Confirm raceway type/trade size, actual conductor insulation/type/size and count (including relevant grounding/bonding conductors), multiconductor cable if present, length and nipple conditions, and other special conditions. Do not infer any of these from photos or generic cable names.

## Worksheet
1. Inspect the adopted Chapter 9 rules/notes to determine the applicable fill limit, scope and exceptions. Do not assume every short raceway qualifies for a nipple rule.
2. Record the actual inspected source/row for raceway usable area and each conductor or cable area; use the applicable manufacturer source when required. A user-supplied area stays unverified until inspected.
3. Sum count × area for each group. Allowed area = checked raceway area × checked fill fraction. Compare only when applicability and values are confirmed.
4. For an identical-conductor arithmetic scenario, floor(allowed area / per-conductor area) gives a numerical count under those assumptions. Do not claim an Annex C cross-check unless its exact adopted row was actually inspected.
5. Fill does not establish ampacity, current-carrying classification, adjustment/correction factors, OCPD, terminal or pulling suitability. Leave these **TBD** rather than asserting a universal factor based only on count.

## Arithmetic illustration `[needs-code-review]`
Hypothetical supplied assumptions: raceway area 0.533 in², fill fraction 0.40, nine conductors each 0.0133 in².
- Allowed arithmetic area: 0.533 × 0.40 = **0.2132 in²**.
- Used area: 9 × 0.0133 = **0.1197 in²**.
- Numerical area margin: **0.0935 in²**.
- Identical-area numerical count: floor(0.2132 / 0.0133) = **16**.
No table lookup or Annex C agreement is implied. These assumptions do not select a raceway or prove an installation compliant; conductor identification, final source/conditions and all other checks remain required.

## Output
```
RACEWAY AREA WORKSHEET · <job label> · <edition/status>
Inputs/source register: <type, size, count, area, fill fraction, evidence/status>
Area arithmetic: allowed <in² or TBD>; used <in² or TBD>; margin <in² or TBD>
Mode: <source-checked comparison | arithmetic-only scenario | incomplete>
Ampacity, adjustment, protection, terminals, pulling and local checks: <TBD/checked items>
Planning aid, not stamped engineering. Verify adopted NEC, amendments and AHJ.
```
