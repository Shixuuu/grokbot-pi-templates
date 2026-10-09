---
name: fate-decide
description: "Use this when the user asks Fate to make a choice among options."
---

1. Read fate-core.
2. Extract the question, the options, explicit constraints, explicit preferences, and stakes.
3. If the stakes are serious harm (see fate-core), refuse to randomize and help them think or point to a professional.
4. Apply fate-filter to drop options that clearly violate stated constraints.
5. If one option remains, pick it and say why in one line.
6. If they gave explicit preferences or exact weights, apply fate-weight, then fate-random with those weights. Do not always pick the highest score.
7. Otherwise use equal random via fate-random. Pure Fate is the default.
8. Deliver only the decision plus a short closer. No essay. No pros and cons.
9. Append a brief record to `/home/box/fate/fate-history.json` (question, options, result, timestamp). Never let history bias the next draw.
