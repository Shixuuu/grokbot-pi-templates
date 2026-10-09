---
name: voltage-drop
description: "Use this when an electrician wants voltage-drop arithmetic from confirmed phase, voltage, length, load, conductor and model inputs, separate from ampacity or installation approval."
---

# Voltage Drop

**Review status:** `[needs-code-review]`. Arithmetic examples do not approve conductor size, protection or installation.

## Execution gate and required inputs
Apply the Calculation execution gate in the embedded Bot instructions profile memory. Confirm license/supervision, job edition/status, voltage and phase/topology, load current, **one-way** length, conductor material/size/area, applicable temperature/model constant, and target drop. For an AC model, confirm power-factor/impedance assumptions and suitability of a resistance approximation. Do not infer these from photos. Missing inputs remain **TBD**; ask for them together before executing the dependent formula.

A calculation on complete explicitly supplied numerical assumptions can be an arithmetic-only scenario when code/source checks are unavailable. Never describe assumed K, circular-mil area or a manufacturer's tolerance as source-checked unless actually inspected.

## Resistance-model formulas
With confirmed inputs and model applicability:
- Single phase: VD = 2 × K × I × L / CM.
- Balanced three-phase resistance approximation: VD = √3 × K × I × L / CM; voltage basis must be confirmed line-to-line.
- % VD = VD / confirmed system voltage × 100.
- Required arithmetic CM = (2 or √3) × K × I × L / allowed VD.
- L is one-way, not loop length. K and CM must use compatible units.
Inspect needed adopted NEC/manufacturer data and cite only the required value, not a copied table. Do not apply this approximation blindly to unbalanced or power-factor-sensitive AC systems; obtain a suitable verified impedance method or leave the result **TBD**.

## Guidance and output boundary
A voltage-drop target must be explicitly identified as a user/design/manufacturer/local requirement or a verified applicable recommendation. Do not turn an informational recommendation into a universal enforceable limit. Report whether the arithmetic is above/below the supplied target **only**. Do not say a conductor is adequate or recommended for the load.

Ampacity, continuous-load sizing, temperature/CCC adjustments, OCPD, terminal ratings/lug capacity and grounding/bonding requirements are separate, unresolved checks unless verified. A 30 A continuous-load example cannot establish a 30 A conductor or breaker choice.

## Worked arithmetic example `[needs-code-review]`
Explicit hypothetical assumptions: 240 V single phase, 30 A load, 150 ft one-way, copper model K = 12.9, resistance approximation, CM values 10,380 / 16,510 / 26,240 and a user-selected 3% arithmetic target.
- 10 AWG label, assumed 10,380 CM: 2 × 12.9 × 30 × 150 / 10,380 = **11.18 V → 4.66%**.
- 8 AWG label, assumed 16,510 CM: 116,100 / 16,510 = **7.03 V → 2.93%**.
- 6 AWG label, assumed 26,240 CM: 116,100 / 26,240 = **4.42 V → 1.84%**.
The latter two scenario results are below the supplied 3% target. This arithmetic does not recommend either conductor or establish ampacity, breaker size, continuous-load suitability or EGC sizing.

## Output
```
VOLTAGE-DROP ARITHMETIC · <job label>
<confirmed V/phase, A, one-way ft, material, K/model and CM; provenance/status>
VD: <V> · Drop: <%> · Supplied target: <% and source>
Comparison: <arithmetic above/below target only>
Separate ampacity/protection/terminal/continuous-load/grounding checks: <TBD/checked items>
Planning aid, not stamped engineering. Verify adopted NEC, manufacturer data and AHJ.
```
