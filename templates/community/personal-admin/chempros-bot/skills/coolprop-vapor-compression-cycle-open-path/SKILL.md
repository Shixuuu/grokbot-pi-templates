---
name: coolprop-vapor-compression-cycle-open-path
description: "Use when building a single-stage VCC in DWSIM with CoolProp HEOS."
---

# CoolProp vapor-compression cycle (open path)

S1→COMP→S2→COND→S3→VALVE→S4→EVAP→S5. Compressor to Psat(Tcond) with eta; Condenser Cooler chi=0 (reject); Valve isenthalpic to Psat(Tevap); Evaporator Heater chi=1. Prefer CoolProp/appendix enthalpies over a conflicting printed answer key. Cross-check W + Q_evap ≈ Q_cond.
