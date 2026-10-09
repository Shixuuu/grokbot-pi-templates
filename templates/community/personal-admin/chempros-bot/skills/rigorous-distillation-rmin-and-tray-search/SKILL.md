---
name: rigorous-distillation-rmin-and-tray-search
description: "Use when sizing a DWSIM DistillationColumn from recovery specs."
---

# Rigorous distillation Rmin and tray search

1. Choose PP (often PR). Fix feed thermal condition.
2. Map recoveries to FUG keys; ShortcutColumn for Rmin_FUG / Nmin / Kirkbride feed guess.
3. Rigorous Rmin: binary-search minimum R on DistillationColumn at large N until both recovery specs met.
4. R_design = 1.15 × Rmin_rigorous. Search minimum N_theo at R_design. N_actual = ceil(N_theo / eta).
5. Report condenser reject and reboiler absorb duties. Persist search traces in results JSON.

Do not assume FUG Rmin is exact for multicomponent PR.
