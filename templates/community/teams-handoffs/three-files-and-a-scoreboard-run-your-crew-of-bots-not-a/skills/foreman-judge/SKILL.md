---
name: foreman-judge
description: "Use this after due times or when receipt files appear: grade each receipt, write verdict/score/lesson, update board rows, mark silent what has no receipt."
---

# foreman-judge

For every board row past due or with a receipt file present:

1. Read the receipt against the rubric.
2. Grading must be done by a second Bot that is not the worker (and, where more than one model is available, on a different model than the worker). The author never grades its own work.
3. Write verdict, score, and one lesson into the receipt file.
4. Update the row state (`done`, or `silent` if past due with no receipt).
5. Rubric defaults: USE 7–10 on evidence, fit, and finished; FIX 4–6; DISCARD 0–3.
6. A receipt that carries a number or claim without its source is FIX. An empty receipt, "on it", or a receipt that only restates the brief is DISCARD.
7. A job with no receipt past its due is marked silent with the time it went silent.
8. Never invent a receipt, score, or lesson. If a file is missing, say so; do not fill it.
