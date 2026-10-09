---
name: load-calc-optional
description: "Use this when an electrician wants an optional dwelling load worksheet with adopted-edition eligibility, HVAC and EVSE treatment checked before a code-based result."
---

# Optional Dwelling Load Worksheet

**Review status:** `[needs-code-review]`. The illustrations are arithmetic assumptions, not approved methods, equipment ratings or installation advice.

## Execution gate
Apply the Calculation execution gate in the embedded Bot instructions profile memory: supported code scope is 2023 dwelling work with final source checks. Confirm license, adopted edition/amendments, supply, method eligibility and input provenance. Unknowns are **TBD** in the source register. Section identifiers below are lookup leads, not an edition-independent mapping.

## Inventory and method
Ask for existing/proposed service or feeder, voltage/phase, conductor/service details, area basis, circuit counts, all appliance/motor nameplates, existing/proposed HVAC, EVSE and other loads. Distinguish nameplate input from an already adjusted demand.

- Candidate 220.82: inspect the exact eligibility, general-load categories, demand thresholds, HVAC alternatives and conditions.
- Candidate 220.83(A): inspect existing-dwelling eligibility, actual proposed scope, included categories and factors.
- Candidate 220.83(B): inspect whether the proposed HVAC work triggers it, then equipment type, controls, simultaneous operation and the applicable HVAC alternatives.

Do not automatically force 220.82 for a replacement service, forbid it for every existing dwelling, or assume the candidates are exhaustive. Do not simplify 220.83(B) to “larger HVAC at 100%.” A factor from 220.82 is not interchangeable with 220.83. Without the final adopted source, HVAC demand stays **TBD**.

For EVSE, independently check load basis, method placement, continuous-load treatment and accepted energy-management provisions. Record each factor's application; prevent double counting. A commercial product is not source authority. Do not label an unresolved interpretation “literal,” “conservative,” accepted or approved. A 99.5 A arithmetic result does not approve a 48 A charger on a 100 A service.

## Arithmetic illustration A `[needs-code-review]`
Hypothetical confirmed assumptions only: existing inventory 36,200 VA; proposed load 11,520 VA; threshold 8,000 VA; remainder factor 40%; 240 V single-phase conversion. None establishes code eligibility or treatment.

- Existing assumed demand: 8,000 + (36,200 − 8,000) × 0.40 = **19,280 VA**.
- Scenario A excludes the proposed load from that assumed group: 19,280 + 11,520 = **30,800 VA**, or **128.3 A**.
- Scenario B includes it: 8,000 + (36,200 + 11,520 − 8,000) × 0.40 = **23,888 VA**, or **99.5 A**.
- Difference: **6,912 VA / 28.8 A**. Method, EVSE and continuous-load treatment are **TBD**. Neither scenario selects a service rating or establishes capacity.

## Arithmetic illustration B `[needs-code-review]`
Separate hypothetical assumptions: 34,900 VA inventory; 10,000 VA threshold; 40% remainder; compare 6,000 VA with 10,000 VA × 65%; 240 V single phase.

General arithmetic = 10,000 + 24,900 × 0.40 = **19,960 VA**. Assumed comparison = max(6,000, 6,500) = **6,500 VA**. Sum = **26,460 VA**, or **110.25 A**. Factors and applicability remain **TBD** until final source-checked. No equipment rating is selected.

## Output
```
OPTIONAL LOAD WORKSHEET · <job label> · <edition/status>
Mode: <source-checked calculation | arithmetic-only scenario | incomplete worksheet>
Method/applicability: <checked scope/source | TBD>
Inputs and source register: <values, units, provenance, factor/row/status>
Arithmetic: <steps and VA>; conversion <confirmed voltage/phase | TBD>
HVAC/EVSE/continuous-load treatment: <checked specifics | TBD>
Unresolved design checks: <list>
Installation/service-size verdict: not established by this worksheet.
Planning aid, not stamped engineering. Verify adopted NEC, amendments and AHJ.
```
