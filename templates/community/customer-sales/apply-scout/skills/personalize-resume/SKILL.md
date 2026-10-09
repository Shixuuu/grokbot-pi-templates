---
name: personalize-resume
description: "Use when drafting a job-specific resume PDF from a fact sheet and a job description, after scoring fit 0–5, without inventing experience."
---

Build a truthful, JD-tailored PDF from the user's fact sheet using Typst `basic-resume`.

## Before drafting
Run **score-role-fit** (compatibility + realism, each 0–5 vs fact sheet). Show scores when the user is selecting roles. Only draft if they pick the role (or recommend was `draft` / `draft+apply-when-approved` and they confirm).

## Inputs
- Fact sheet `/home/box/apply-scout/fact-sheet.md` — only source of truth
- Preferences `/home/box/apply-scout/preferences.json` — use `linkedin_url` when present
- References under `/home/box/apply-scout/references/` if fact sheet needs refresh
- Job description text or URL
- Template `/home/box/apply-scout/template/` (`typst init @preview/basic-resume:0.2.9`)

## Steps
1. Score the role (see score-role-fit); present scores + gaps; wait for selection if listing many.
2. Read the fact sheet. If missing, stop and ask for reference uploads / setup.
3. Parse the JD for required skills, keywords, must-haves.
4. Select and reorder **only** fact-sheet bullets that are true and relevant. Never invent.
5. Copy template into `/home/box/apply-scout/drafts/<slug>/`, fill, `typst compile` → `resume.pdf`.
   - **Header contact:** always include LinkedIn near the top with email/site when the fact sheet Contact or `preferences.linkedin_url` has a profile URL/username. Pass it to basic-resume's `linkedin:` field (strip `https://` if the template expects bare path). Do not invent a LinkedIn if none was collected.
6. Hand PDF path + changelog + the 0–5 scores to the user. Do not submit. Next: verify-resume.

## Rules
- No lying / stretch claims / fake metrics.
- Gaps stay gaps — note them, do not fabricate.
