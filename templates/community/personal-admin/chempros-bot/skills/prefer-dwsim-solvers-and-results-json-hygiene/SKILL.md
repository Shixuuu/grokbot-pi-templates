---
name: prefer-dwsim-solvers-and-results-json-hygiene
description: "Use when choosing the next ChemProS practice problem or remediating textbook batch answers."
---

# Prefer DWSIM solvers and results-JSON hygiene

Prefer exercises with real unit solvers (reactors, columns, flashes, recycles) over pinch-only algebra. Results JSON flags are canonical: solve_ok, converged_tear, c_closure_ok / coke_yield_reportable, dwsim_ok. Never quote failed sweep points or post-hoc-scaled products from a broken tear. Distinguish calibration vs this PP base vs optimum when reporting %.
