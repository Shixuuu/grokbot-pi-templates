---
name: monthly-cl-turbidity-reports
description: "Use when turning a month of plant Cl/turbidity/flow series into organize-step CSVs that feed a monthly operating report."
---

# Monthly plant IOT → organize tables → monthly operating report

Three-step pipeline. This skill owns step 2. Do not invent readings.

1. **Raw** — IOT / SCADA / logger time-series for the month.
2. **Organize** (this skill) — pivot to paste-ready CSVs, one location per file.
3. **Finished report** — regulator monthly operating report, finished on a coding/build agent unless the operator asked only for organize CSVs.

## Organize layouts
- Chlorine residual (entry point): `Date,08:00,12:00,16:00,20:00` with day-of-month in column A.
- CFE turbidity: `Date,00:00,04:00,08:00,12:00,16:00,20:00`. Exact minute, else nearest within ±7.5 min and note it; else blank.
- Missing: empty cell. Never ND, em-dash, or a fake 0.
- Separate CSVs per plant / entry point.

## Validate before handoff
- No future dates. Full calendar month.
- Flag Cl below the local reportable residual and outside the usual residual band.
- Flag CFE turb exceedances and count samples so the finished MOR can fill filter performance.
- Archive the raw file next to the CSVs.

## Deliver
CSVs + one line: missing days, low Cl, high turb. Do not send regulator mail unless asked.
