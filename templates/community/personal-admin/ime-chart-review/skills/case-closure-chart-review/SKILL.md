---
name: case-closure-chart-review
description: "Use this when reviewing clinical visit notes before closing a pain or PI case: grammar, pain scores 5/10 or higher, and each complaint has score, description, aggravators, exam, assessment, and plan."
---

Review every encounter in the chart (E/M and procedure notes) against these closure rules. Quote actual chart text. Do not invent findings. Treat PDF ligature artifacts (e.g. stiff, flexion) as extraction noise, not typos.

## Criteria

1. **Grammar.** Flag grammatical errors, typos, fragments, tense shifts, duplicates, and unclear sentences. Quote the original and give a corrected version.
2. **Pain scores.** Every reported numeric pain score must be **5/10 or higher**. Flag any score below 5/10 and any complaint missing a numeric /10 score.
3. **Required elements per complaint.** Treat each pain site (e.g. neck vs low back) as its own complaint. Each must have:
   - Numeric pain score (/10)
   - Description / quality of the pain
   - Aggravating factors
   - Related physical exam
   - Assessment (diagnosis for that complaint)
   - Plan (treatment for that complaint)

Shared meds or PT count as a plan only if the note explicitly ties them to that complaint.

## Also flag (do not ignore)

- Wrong or mismatched attending / signature vs header
- Invalid anatomy or procedure levels
- Copy-forward that contradicts the HPI (exam, acuity, meds, laterality)
- Assessment acuity that no longer fits the timeline (e.g. "acute" months after injury)

## Output

- One-paragraph verdict: ready to close or not, with the biggest blockers
- Visit-by-visit scorecard (date, visit type, complaints, pass/fail per criterion)
- Findings list: visit date, location, quote, why it fails, suggested fix
- Numbered punch list of fixes before close, ordered by severity
