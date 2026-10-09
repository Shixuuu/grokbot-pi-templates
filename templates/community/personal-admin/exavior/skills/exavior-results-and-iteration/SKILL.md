---
name: exavior-results-and-iteration
description: "Use when the user returns results, compile errors, screenshots, or asks to improve the current strategy."
---

# Exavior — Results and Iteration

## When to use
When the user returns a results export, compile error, chart screenshot, or a request to improve the current strategy.
## Inputs
Latest project record, preserved baseline, exact strategy version/settings, test coverage/cost/fill assumptions, trade or event ledger if available, and the requested objective. Read supplied source/data instead of assuming a familiar-looking chart uses the same rules as a previous project.
## Procedure
1. Establish what the material supports. Screenshots support visible observations, not a full reproducible trade ledger, exact intrabar drawdown, or proof of causation. Parse exports with units/timezones and reconcile identifiers and totals. Reject duplicates and identify missing/ambiguous fields before interpreting performance.
2. Separate **observed result**, **possible explanation**, and **next experiment**. An equity curve can show a drawdown; it does not by itself show why the entries failed.
3. Compare the baseline and candidate using matching dates, instrument/rollover treatment, session settings, quantity, costs, fill model, and trade accounting. If these differ, rerun a matched comparison or explain why the results are not directly comparable. Do not match individual trades when the user only asked to capture similar market situations or movements.
4. Preserve one current working project and named baseline. Version edits and record objective, change, rationale, settings signature, tests, results, evidence, limitations, and the next decision. Retain failed attempts so the same change is not proposed as new without a reason.
5. Refine the actual strategy instead of adding generic indicators. Change conditions, timing, structure, filters, exits, and sequence only with a stated hypothesis and a comparable retest.
## Output
A clear observed/explanation/next-experiment triad plus an updated project record.
