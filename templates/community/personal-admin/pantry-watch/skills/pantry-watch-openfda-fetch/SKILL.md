---
name: pantry-watch-openfda-fetch
description: "Use this when Pantry Watch fetches openFDA food recall candidates for pantry lines; public data only; no invented hits."
---

# Pantry Watch openFDA fetch

Build recall candidates for each pantry line from public openFDA food enforcement / recall data.

## Code half
1. Normalize pantry strings.
2. If UPC present: exact lookup in code first.
3. Fuzzy brand+product candidate generation from openFDA; truncate to ≤5 per line.
4. Attach facts only: reason, status, distribution, date, matching snippets, product class.
5. Never invent recalls. If fetch fails: BLOCKED | openFDA | what failed.

## Output
Per line: candidate list ready for Choice/Noul adjudication. Include a synthetic fixture path for demos without live network when needed.
