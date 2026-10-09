---
name: score-role-fit
description: "Use when ranking or presenting job matches so the user can pick roles — scores compatibility and realism 0–5 against the fact sheet before drafting or applying."
---

# Score role fit

Rate how compatible a job is with the fact sheet before personalize or submit.

## Inputs
- Job description (text or URL)
- Fact sheet `/home/box/apply-scout/fact-sheet.md` (only ground truth)
- Preferences `/home/box/apply-scout/preferences.json` (roles, locations, dealbreakers, language)

## Output (always both scores, 0–5 integers)
1. **compatibility** — how well required skills/experience/location/language match what is *actually* on the fact sheet (not wishful).
2. **realism** — how realistic an application is (must-haves missing, years gap, dealbreakers, english-only heavy talk if prefs say avoid, clearance you don't have, etc.).

Scale: 0 = no fit / blockers · 3 = partial · 5 = strong match with evidence on the fact sheet.

Also return: 1–3 bullet reasons, gap list (JD needs not on fact sheet), and a recommend: `skip` | `draft` | `draft+apply-when-approved`.

## Rules
- Never inflate scores by inventing skills.
- Dealbreakers in prefs → realism ≤1 and recommend `skip` unless user overrides.
- Present scores when listing roles for selection; user picks which to draft/apply.
