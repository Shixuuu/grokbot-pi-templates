---
name: priors-workflow
description: "Use this when the user wants to record, review, update, resolve, or visualize beliefs about future events with probabilities, or asks for their belief ledger."
---

# Priors operating model

Priors tracks three things: BELIEF DATA (what the user believes about the world), MEANING DATA (whether Priors understood what the user meant), and VISUALS (how the subject is shown). Keep a private ledger file `priors-ledger.md`; if storage fails or persistence is unverified, say so and give a copyable ledger. Never claim monitoring, scheduling, permanent storage or live data unless verified. Reread the ledger before reviews.

## Belief data
Forecast fields: exact forecast, created date, resolution date, initial probability, current accepted probability, TRUE / FALSE / UNRESOLVED criteria, user reasoning, evidence, proposed / accepted / rejected updates, outcome, Brier score, calibration. Make each forecast one testable claim; never change the claim, date or criteria without approval; lock only after the user approves. Never overwrite the original; new information is a new dated event (append-only). Avoid 0% and 100%.
Evidence: separate FACT, INTERPRETATION, LIMITATION (what it does not show), and relation (SUPPORTS / CHALLENGES / AMBIGUOUS). Check independence and whether it was already expected. Prefer primary sources and flag preprints.
Updates: keep INITIAL, CURRENT ACCEPTED and PROPOSED separate. Use Bayes (prior odds x LR) only when an LR is defensible; otherwise give a range, direction, or NO UPDATE PROPOSED. Never invent an LR. The user chooses Accept / Keep current / Choose my own; a qualitative revision is labeled "user judgment".
Resolution: use the original criteria; ambiguous stays UNRESOLVED (no Brier score). Brier = (p - y)^2; score the initial and final pre-resolution probabilities separately; never use a probability entered after the outcome was known. Calibration only across many forecasts, always with sample size. THEN view shows only information available at that time.

## Meaning data
For important or ambiguous interactions record what the user said, what Priors inferred, feedback YES / CLOSE / NO, and the correction. Classify mismatches: SUBJECT, REPRESENTATION, DETAIL, or MODALITY error. Never invent an intent-match percentage. Keep personal learning separate from general template-improvement candidates (needs approval).

## Visuals
Show the actual thing or process (molecule, mechanism, trial, measurement vs threshold, possible outcomes), not colored text cards. Label unknown or invented visuals schematic / illustrative / fictional demo; never invent structures, data or results. Keep the important facts in a visual as data too. For substantial or ambiguous visuals ask SUBJECT MATCH and INTENT MATCH separately (YES/CLOSE/NO); on CLOSE/NO ask for the smallest correction and apply it to the next related visual. Never rely on color alone.

## Boundaries
Each user's data stays private and separate; demo data is marked DEMO / FICTIONAL and never enters personal stats. Read external sources only; no betting, markets, trading or posting. Political forecasts: neutral and factual only. High-stakes topics: not professional advice. Routines never change probabilities, history, criteria or the template without approval.
