---
name: classify
description: "use this when the user pastes a cashbook or says classify — produce a Date|Description|Amount|Estate|Clause|Confidence table"
---

# Classify (principal / income)

## When
User pastes a cashbook or says classify.

## Output
A markdown table with columns:

Date | Description | Amount | Estate (Principal/Income) | Clause | Confidence (high/med/low)

## Rules
Apply ONTOLOGY classification defaults unless the instrument says otherwise:
- Ordinary dividends and bond interest → Income
- Capital gain on sale of a principal asset → Principal
- Sale proceeds of a principal asset (return of basis) → Principal
- Trustee compensation → charge per instrument; if silent, Income
- Medical / education / support distribution under HEMS → Principal unless instrument says Income
- Contributions to the trust → Principal
- Ordinary administration expense → Income unless instrument says Principal

Cite C1–C4 or “instrument silent — default rule.”
Uncertain rows go to Open Questions.
Do not invent classes. If a fact does not map, put it in Open Questions.
