---
name: stellar-a-b-c-layer-prompting-guide
description: "Use when writing or running Stellar plate prompts with the A/B/C lettered layer method (additive one-family steps; wait for user/HIL OK between letters). Space/orbital ladder is default; do not merge with the maritime plate-assembly ladder in one prompt. No easter-egg step."
---

# Stellar A/B/C layer prompting guide

Use this when writing or running plate prompts for Stellar Cartography (assistant extension or in-chat). Goal: easy, repeatable assembly — one lettered step at a time.

## Core idea

Build the still **additive**: clean base → one overlay **family** per prompt → glare/check → **HIL (human-in-the-loop) / user OK** → next letter. Do **not** erase-surgery or bundle families.

Letters are **families**, not a fixed forever alphabet. Rename families to fit the plate, but keep **one family per step**.

**Letter ladders are local to the plate.** This A/B/C guide ladder (A–G + W + Q) is the default **space/orbital** map. The [Stellar plate assembly prompts](sand-workflow:stellar-plate-assembly-prompts) ladder (A–H) is the default **chart/maritime** map. Do **not** merge families across ladders in one prompt.

## Standard letter ladder (typical space/orbital plate)

| Step | Family | What goes down | What stays out |
| --- | --- | --- | --- |
| **A** | View / base | Empty field or locked basemap; title; fine print (VIEW / REF / SCALE); footer reserve; watermark zone | No Earth geometry yet (orbital) · no track · no ship |
| **B** | Primary geometry | Earth disk + EQUATOR **or** chart crop lock · projection honesty | No orbit ring · no pad · no course |
| **C** | Path / plane | One tilted orbit ring **or** one track family | No nodes/labels beyond what’s required to place the path |
| **D** | Nodes / measures | AN/DN, inclination mark, dims that claim a number | No pad · no ship icon · no mission-string block |
| **E** | Hardware marks | Pad tick, tiny ship, booster **type** callout (not a second ring) | No full mission-string block |
| **F** | Mission strings | Official / sourced strings + editorial footnotes clearly marked | No new geometry |
| **G** | Photo / texture (optional) | Real Earth/photo underlay; recolor type for contrast; **same math** | No sliding geography to “fix” labels · no new claims |
| **W** | Watermark | Operator / project mark, lower-right, standing opacity/margin | Never skip on generated stills if the project requires a mark |
| **Q** | Self-check / glare | Crops that prove every claim on the still | No new ink |

Adapt letters when the plate differs (maritime corridor often follows the plate-assembly ladder). Keep the **ladder discipline**.

### Easter eggs — out of scope

**Do not** include an easter-egg letter in this method or in template prompts. Jokes and decorative asides are **optional creative input from the user (HIL)** — not a shared pipeline step and not a template default.

### Companion / carousel aspect

If this still will post with another plate, lock **one shared aspect ratio** before letter A (e.g. both 9:16 or both 1:1). Mixed pairs (9:16 + 1:1) fail handoff — fine type and eggs die when the taller frame is crushed. Drawing preflight also checks this ([Graphics preflight QC](sand-workflow:graphics-preflight-qc)).

## How to write each step prompt

Every lettered prompt must include:

1. **PLATE** — short name
2. **STEP** — letter + family name
3. **BASE** — exact prior still to load (path or “last approved”)
4. **DO** — only this family’s ink
5. **DO NOT** — explicit bans (wipe, second ring, moving pad, etc.)
6. **SUCCESS CHECK** — what must read true on the still
7. **KNOWN FAILS** — past mistakes for this family
8. **STOP** — “This step only.”

### Prompt skeleton

```text
PLATE: <name>
STEP: <Letter> — <family>
BASE: <prior approved still>
DO:
- …
DO NOT:
- …
SUCCESS CHECK:
- …
KNOWN FAILS:
- …
STOP: This step only.
```

## Gate between letters

After each letter:

1. Glare-check (full + tight crops on new ink).
2. Verify **every claim** this step added is illustrated.
3. Hand drawing preflight to a reviewer when the project requires it.
4. **Wait for user / HIL OK** before starting the next letter.
5. If Fail: fix **this** letter only — do not “also” start the next.

## Hard bans (all letters)

- Rectangular wipe / paste edge (blue or land-fill).
- Bundling two families in one prompt (e.g. ring + nodes + pad).
- Second orbit ring for booster splash — booster is **type**, not geometry.
- Moving the basemap so a wrong label looks right — fix the label/math, or declare schematic.
- Photo underlay without saying whether ticks are **schematic** vs **georeferenced**.
- Adding easter eggs as a pipeline step or template default.
- Mixing companion aspects in a pair meant to post together.

## Ease-of-use tips

- One sentence goal at the top of DO.
- Name the BASE file every time — never “the current one.”
- Prefer kit overlays (scale, north, dims) as their own letter when they carry claims.
- Put “assumed” / “editorial” on any number not on the primary source.
- Short STOP line prevents runaway multi-step prompts.

## Handoff

Assistant runs letter → [Step-gate QC](sand-workflow:annex-step-gate-qc) → drawing preflight (if required) → **user / HIL**. Keep science review separate from drawing QC when both apply.

## Method note

Additive A→B→C… beats bundled erase loops. Companion skills: [Stellar plate assembly prompts](sand-workflow:stellar-plate-assembly-prompts), [Step-gate QC](sand-workflow:annex-step-gate-qc), [Stellar space orbital plate prompts](sand-workflow:stellar-space-orbital-plate-prompts).
