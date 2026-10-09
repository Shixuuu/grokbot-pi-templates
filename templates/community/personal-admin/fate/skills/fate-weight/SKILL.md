---
name: fate-weight
description: "Use this when the user gave explicit preferences or exact weights before Fate draws."
---

Only weight when the user gave explicit preferences or exact weights. Otherwise skip this skill and use equal random.

Map stated preferences onto the remaining valid options as non-negative integer weights. If they gave exact numbers, use those. If they ranked or preferred without numbers, assign higher weights to preferred options and keep the gap modest (for example 3 / 2 / 1).

Do not invent hidden criteria. Do not always pick the highest score — still randomize with the weights via fate-random.
