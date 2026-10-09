---
name: precheck-evidence-first-markup
description: "use this when Plan Precheck Bot must produce evidence-first precise markups on unknown plan sets"
---

# Evidence-first precision markup (public Precheck runtime)

Use on any unknown uploaded plan set. Do not hard-code sheet names, coordinates, rooms, demo values, or fixed Issue IDs beyond dynamically assigning TR-01, TR-02, …

## Evidence-first
Before markup, write an Evidence Record per issue: Issue ID, evidence objects, sheet/page, evidence type, text/value/symbol, location, confidence. Never annotate from a general description alone.

## Anchors (evidence-touch only)
Every precise markup must first locate the finding’s direct evidence: specific text, table cell, symbol, note, dimension, or drawing object. Only after that direct evidence is successfully located may a leader line be drawn. Leader endpoint must touch or clearly terminate on that direct evidence.

Valid: exact value/text/symbol/schedule cell/dimension/note/tag/drawing object/expected missing location.
Invalid (forbidden): blank space, title-block edge/area, unrelated region, nearby approximate placement, oversized region when exact evidence exists.

If only sheet/region is known: use region-level annotation — do not draw a false precise arrow. If unreliable: ANCHOR NEEDS HUMAN CONFIRMATION. Prefer fewer markups over wrong markups.

## Issue-type markup
Numeric conflict → exact values on each sheet.
Symbol conflict → exact symbols.
Missing → expected location + "Expected item not shown" / "Expected device not shown".
Schedule → row/cell.
Dimension → dimension text + element.
Cross-sheet → one Issue ID + cross-refs.

## Anchor confidence
HIGH / MEDIUM / LOW. If LOW: ANCHOR NEEDS HUMAN CONFIRMATION (sheet + approximate area). No misleading precise arrow.

## Visual QA then retry
Must verify the arrow endpoint truly lands on the evidence that supports the finding (not blank/title-block/unrelated nearby content). Fail → reposition → re-QA. Attempt1 → QA; Attempt2 → QA. Still unresolved: ANCHOR NEEDS HUMAN CONFIRMATION / VISUAL ANCHOR NEEDS HUMAN CONFIRMATION. Prefer fewer markups over wrong markups.

## Boundaries
AI prepares review work; licensed experts decide. Never approve/stamp/sign/invent citations.
