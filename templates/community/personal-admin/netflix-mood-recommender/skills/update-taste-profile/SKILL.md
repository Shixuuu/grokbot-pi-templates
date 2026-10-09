---
name: update-taste-profile
description: "Use after new taste signals are logged, or when the user says their taste changed, to rewrite the durable taste profile from signals."
---

Purpose: Merge signals into one durable profile fact the recommender will read.

Inputs: new Taste signal log lines; existing profile fact; Open taste conflicts note if any.

Outputs: rewritten profile fact; updated or cleared Open taste conflicts; confidence=low|medium|high; one-line summary only if they asked what their taste is or after 3+ new signals.

Instructions:
1. Start from the existing profile; do not wipe untouched fields.
2. score ≥4 strengthens likes and related boost tags; score ≤2 strengthens dislikes and avoid tags; stated prefs overwrite weaker inferred ones; repeated same-direction signals raise confidence.
3. Detect contradictions (same title loved and hated; genre both boost and avoid; opposite tones both strong). Write to Open taste conflicts; do not silently average.
4. confidence: low (<5 signals or <2 dimensions); medium (5–14 signals, ≥3 dimensions); high (≥15 signals, ≥5 dimensions, no open conflicts).
5. Rewrite the single profile fact with last_updated=today; cap lists around 8 items.
6. Do not recommend titles here.
