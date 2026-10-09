---
name: load-calc-220
description: "Use this when an electrician needs a 2023 dwelling standard-method load worksheet with confirmed inputs, final-source checks and the arithmetic shown."
---

# Standard Dwelling Load Worksheet

**Review status:** `[needs-code-review]`. This workflow does not supply an approved factor database or establish equipment ratings.

## Execution gate
Apply the Calculation execution gate in the embedded Bot instructions profile memory. Confirm license, the job's adopted edition/amendments, occupancy, scope, voltage and phase. Supported code scope is 2023 dwelling work only with verified final sources. Non-dwelling, unconfirmed, unsupported-edition or unsupported-system requests get an input/source worksheet; do not apply dwelling factors to them.

## Inputs
Obtain the applicable area and basis, small-appliance/laundry counts, each fixed appliance's category and nameplate, cooking/dryer/HVAC/motor details, EVSE and other continuous/noncontinuous loads, voltage and phase. Distinguish VA from watts and verify power factor if needed. Never infer absent loads, motor input VA from horsepower, simultaneous operation or nameplate values.

## Worksheet
1. Inspect the adopted lighting/general receptacle basis for this dwelling, small-appliance/laundry loads and demand treatment.
2. Classify fixed appliances before selecting demand factors. Check cooking/dryer table rows, conditions, notes and exceptions separately. Do not reproduce tables.
3. Establish noncoincident HVAC operation from actual equipment and controls; do not assume all HVAC is mutually exclusive.
4. Identify motor additions without double counting. Check EVSE load basis and continuous-load/energy-management treatment independently.
5. Record the final source and edition/section/table/row for each factor. Do not hardcode a 2017/2020/2023 citation map. Unknown factors stay **TBD**.
6. Sum only confirmed contributions. For an explicitly confirmed single-phase apparent-power conversion, current = VA / applicable voltage. Never use VA/V as universal three-phase line current. The present code worksheet does not cover commercial or three-phase service design.
7. Keep calculated demand separate from conductor/protection/terminal sizing. Do not round draft current into a minimum service-size or compliant equipment verdict.

## Arithmetic illustration `[needs-code-review]`
Assumed contributions supplied for a demonstration, not verified code requirements: 5,625 VA lighting/small-appliance demand; 6,000 VA fixed appliances; 5,000 VA dryer; 8,000 VA cooking; 10,000 VA HVAC; 200 VA motor addition; EVSE explicitly absent.

5,625 + 6,000 + 5,000 + 8,000 + 10,000 + 200 = **34,825 VA**. With a confirmed 240 V single-phase conversion: 34,825 / 240 = **145.10 A**. The inventory, factors and applicability are **TBD** until checked. This is not a 150 A service recommendation.

## Output
```
STANDARD DWELLING WORKSHEET · <job label> · <edition/status>
Mode: <source-checked calculation | arithmetic-only scenario | incomplete worksheet>
Inputs/source register: <confirmed values, provenance, rule/factor locator/status>
Contributions and sum: <VA or incomplete>
Voltage/phase conversion: <confirmed basis/arithmetic | TBD>
Remaining inventory, demand, ampacity, protection, terminal and local checks: <list>
Service/conductor/protection selection: not established.
Planning aid, not stamped engineering. Verify adopted NEC, amendments and AHJ.
```
