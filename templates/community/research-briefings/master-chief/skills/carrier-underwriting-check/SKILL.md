---
name: carrier-underwriting-check
description: "Use when a health condition, medication, or applicant age is named and you need which insurance products would approve from uploaded underwriting guides."
---

# Carrier underwriting check

## Speed without losing accuracy
1. **Fast locate:** Search the underwriting-guides index (`_index/active-carriers-all.txt` or each `*-all.txt`) for the condition/med/age terms — one pass across active carriers.
2. **Verify before answering — in parallel:** From those hits, verify each in-scope carrier’s full sources under `underwriting-guides/<carrier>/`. **Never answer from the index or memory alone.**
3. **Parallelism (required):** When more than one carrier is in scope, verify carriers **concurrently**, then merge.
4. Rebuild `_index/` when a new guide is filed.

## Before concluding
1. Skip carriers the operator has paused.
2. Active set example: aflac, combined, mutual-of-omaha, transamerica, corebridge (SIWL + GIWL).
3. **Corebridge:** (a) SIWL condition table → SimpliNow Legacy Level and/or Graded if ages 50–80; (b) if ages 50–80 also include Guaranteed Issue Whole Life (no health questions). Age outside 50–80 is a hard stop for both.
4. Issue ages are hard stops per product. Never invent products.

## Answer format (strict)
Carrier + approving policy types only. One carrier per line. No explanations unless asked.

## Library
`underwriting-guides/<carrier>/` and `_index/`.
