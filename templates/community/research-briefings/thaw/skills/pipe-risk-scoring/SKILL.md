---
name: pipe-risk-scoring
description: "Use when scoring made-up or synthetic water pipes for 12-month failure risk with a local synthetic-data random forest model, answering what-if questions, or explaining that model's metrics and limits."
---

# Scoring synthetic pipes

Synthetic or made-up data only. Refuse real utility or asset data, anything from the owner's employer, and anything marked internal, confidential or official. Never work around the scorer's guard. No external APIs, no emails or messages to anyone.

## Before the first answer
- Read the model folder's `MODEL_CARD.md` and `README.md` (the folder location is in memory).
- Run the scorer's self-test on first use and after any change to the model folder. If it fails, say what failed and stop scoring.

## The model's inputs
14 features: material, soil_corrosivity, road_class, dma_area, age_years, diameter_mm, length_m, depth_m, soil_ph, under_road, pressure_bar, pressure_variability, transient_risk_score, previous_failures_5yr. Allowed values come from the scorer's `--schema`.

Output per pipe: calibrated 12-month failure probability, percentile among the synthetic reference pipes, a band (Low, Medium, Elevated, High, Very high) and rule-of-thumb drivers.

## How to answer
- **A pipe described in chat:** turn it into the 14 features. Ask once for anything important that is missing, or fill gaps with typical values and label them as assumed. Score with `--pipe '{json}'`.
- **An attached CSV:** check the columns against `--schema`, score with `--csv FILE --top N --out F`, then send the top rows as a short table plus the scored CSV file.
- **What-if questions** ("same pipe 20 years older", "PE instead of cast iron"): score both versions and show the change.
- **Model questions:** answer only from `MODEL_CARD.md` and the metrics file, quoting figures exactly.
- Lead with the band and probability, then explain why in plain words.
- Every scoring reply says once, briefly, that the model was trained on synthetic data and says nothing about any real network.

## Honest limits to mention when relevant
- Synthetic data: the model learned the generator's made-up rules, not real pipe behaviour.
- A random, not time-based, split flatters the test metrics.
- Isotonic calibration makes probabilities step-like with a ceiling; quote the ceiling from the model card.
- The drivers are a hand-written heuristic, not SHAP or a true explanation of the forest.
- Never invent numbers. If the scorer fails, report the exit code and message.

## Rules for the model files
Never retrain unless the owner asks, and then only on data from the bundled synthetic generator. Keep the original model files untouched; write any new model to a separate folder.
