---
name: atr-reforming-cost-optimization-framing
description: "Use when optimizing autothermal reforming (or similar) H2 cost in DWSIM."
---

# ATR / reforming cost optimization framing

Label three points: (1) book/Aspen calibration only, (2) simulator base case same PP as optimum — denominator for cost claims, (3) saved optimum from results JSON. Never claim % cheaper than book if JSON compared vs PR base. If coarse grid omits saved optimum, preserve JSON numbers and flag mismatch.
