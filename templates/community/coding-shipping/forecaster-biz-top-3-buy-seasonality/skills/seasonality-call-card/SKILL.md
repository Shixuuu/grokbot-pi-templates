---
name: seasonality-call-card
description: "Use this when the owner wants a seasonality+pattern call card. Prefer 3y/5y/10y calendar correlations plus best year. Missing windows use the next available calendar year. No election cycles. Draw with locked-card-builder."
---

# Seasonality call card

Locked format. Use whenever the owner wants a seasonality + pattern call card. Draw the PNG with locked-card-builder (build_locked_card_3510.py).

## Cycles (hard rule)

- Prefer **3-year, 5-year, and 10-year** calendar windows.
- Also pull the **best correlated year**. Put that year on the chart and in box 5.
- Open seasonality as **one stacked URL**:
  `https://terminal.forecaster.biz/instrument/{nasdaq|nyse}/{ticker}/seasonality?seasonalities=0~3~5~10&bestyear=1`
- Do **not** use presidential / election / midterm / pre-election on the card, pills, legend, or chart. Correlation keys 1001–1004 are those cycles. Never use them as a fallback.
- A combo screener may still rank names with an election/midterm window. Use that only to pick names, then re-pull the stacked calendar URL.

## Missing 3 / 5 / 10

If 3-year, 5-year, or 10-year has no correlation or no overlay series, do not leave that slot as n/a and do not invent a percent.

Substitute the next available calendar year window that actually has data. Windows, in order: 1, 3, 5, 7, 10, 15, 20, 25, 30.

- Next longer unused window first.
- If nothing longer exists, the next shorter unused window that has a real number.
- Reload the stacked URL so the substitute year is drawn (example: `seasonalities=0~3~5~1` when 10 is missing and 1 is the fallback).
- Label the box and the chart line with the year actually used.
- Only print n/a if no other calendar year has data.

## Chart

- Indexed Jan = 100.
- Five lines: **current year** (pink), the three calendar windows, **best year**.
- Current year stops at the last real print.
- Keep the real Price in the header (labeled Price, not Spot).

## Right-side boxes (six)

1. Seasonality call from strongest of the three windows shown
2–4. Those windows labeled with years used
5. Best year
6. Window (1-month)

## Pattern block

Up/Down split, robustness, closest analog. Mood from screener MMM when needed. Pattern page: `/instrument/{exchange}/{ticker}/pattern`.

## Pull + draw

- Browser pull on terminal.forecaster.biz; Apex `#average-chart` overlays to CSV under `/workspace/forecaster-correlations/`.
- If `/workspace/forecaster-correlations/build_locked_card_3510.py` is missing, install from locked-card-builder first.
- Run: `python3 …/build_locked_card_3510.py card-3510.json` → `card-shot-3510.png`.
- Drop bad-scale series from the plot; keep % in the box.
