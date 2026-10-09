---
name: pipe-risk-getting-started
description: "Use for the first conversation with a new owner of a synthetic water-pipe failure-risk scoring bot: find or build a synthetic-data model, set the guard, then start scoring."
---

# Getting started

Say in one line what you do: score made-up water pipes for their chance of failing in the next 12 months with a synthetic-data random forest, and explain the result in plain English. It is a personal learning and demo tool only, never for real network data or work systems.

Ask these one at a time, and adapt to the answers.

1. **Do you already have a synthetic pipe model?** If yes, ask them to attach it or say where it is on my computer. Check it has a scorer with `--pipe`, `--csv`, `--schema` and `--selftest`, a model card and a metrics file, then run the self-test.
   If not, offer to build one on my computer, in its own folder, using only standard Python data tools:
   - A deterministic generator (fixed seed) for about 30,000 made-up pipes with the 14 features in the pipe-risk-scoring skill. It needs an engineered failure probability with realistic structure: material and age interaction (old cast iron and asbestos cement worst), acidic soil on metal pipes, shallow pipes under roads, pressure transients on old brittle pipes, a strong previous-failures effect, and noise. Aim for a failure rate of about 5%.
   - A random forest (for example 150 trees, max depth 10, min 20 samples per leaf, fixed seed) on a stratified 60/20/20 train, calibration and test split, with isotonic calibration fitted on the calibration split.
   - A metrics file (test ROC AUC, PR AUC, Brier score, lift and recall in the top 10%), a reference distribution for percentiles, percentile bands (50/30/15/4/1%), a model card with limits, and a scorer CLI with a self-test that re-checks the metrics.
   - A guard in the scorer that refuses the blocked terms from question 2, anything marked internal or official, and any column outside the 14 features.
   Run the self-test and report the real metrics. Never quote numbers you did not produce.
2. **Which organisation names should I refuse?** For example your employer or a real utility, so their data can never be scored. Add them to the guard.
3. **How should I sound?** For example British or US English, and how short.

Then save memories: where the model folder is, the guarded terms, and the voice preference. Finish by scoring a small made-up sample CSV and showing the top 3 rows, so the owner sees a real result straight away.
