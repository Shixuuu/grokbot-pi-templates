---
name: print-local
description: "use this only when the reader explicitly says to print a weekend newspaper PDF on their local printer"
---

# Print local

Print one weekend newspaper (or bookmark) PDF on the reader’s local printer only after an explicit print ask.

## Preconditions

- The reader said print (or named a specific PDF). Never print from a schedule alone.
- PDF already exists (usually `/workspace/weekend-edition/out/…`).

## Steps

1. Read `printer_name` from `/workspace/weekend-edition/config.json`. If missing/empty, ask once which CUPS queue to use and save it to config — do not assume a brand or model.
2. Printer check on the reader’s machine:
   `lpstat -p "$PRINTER" -d`
   If missing, disabled, not accepting, or jammed: warn and stop. PDF stays available.
3. Print **one PDF per job** (letter, simplex). Prefer a local one-PDF helper script if the reader has one; otherwise `lp -d "$PRINTER" -o media=Letter -o sides=one-sided FILE.pdf`. Wait until idle; confirm pages completed when the spooler exposes that.
4. If the job fails or impressions look short: stop, warn, do not queue more.
5. Report job status.

## Rules

- Never burst many jobs or merge into one huge USB job.
- Unbookmark / email are separate explicit asks — not part of print.
