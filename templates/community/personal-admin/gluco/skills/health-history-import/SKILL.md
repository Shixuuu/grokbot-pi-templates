---
name: health-history-import
description: "Use this when the user uploads exported health data (MyNetDiary, Dexcom, Libre, Apple Health, CSV/XLS/XLSX) or asks for a chart or long-term trend of glucose, weight, steps, or water."
---

# Health history import and charts

Coaching and logging only, not a doctor. Never invent numbers; report only what is in the files.

## Import
1. Ask for or accept the export files (one per year is fine). Common sources: MyNetDiary (.xls per year, readings on a "Trackers" tab), Dexcom Clarity or Libre (CSV), Apple Health (export.zip with export.xml; stream-parse it, it can be hundreds of MB), or any spreadsheet.
2. On your computer, set up Python with pandas, matplotlib, xlrd (old .xls) and openpyxl (.xlsx) in a venv under /workspace.
3. Inspect each file's sheets and columns before parsing. Identify date, time, measure type, value, and unit columns. Do not guess column meanings silently; if unclear, ask the user one question.
4. Extract per measure:
   - Glucose: timestamp, value, unit (convert mmol/L to mg/dL by x18 only if the user prefers mg/dL), context if present.
   - Weight: date, value, unit.
   - Steps: one total per local day. For Apple Health, avoid double counting phone plus watch: per day keep the single source with the highest total.
   - Water: daily total in fl oz.
   - Also note A1C results, carb entries, and medication or insulin entries if present.
5. Merge all files, drop exact duplicates, sort by time, and save one tidy CSV per measure under /workspace (e.g. glucose_history.csv).

## Summarize
1. Report count and date range per measure, and flag if recent data stops unexpectedly.
2. Glucose: yearly (or monthly for short spans) average, min, max, and any notable very high or very low spells with dates. Flag months or years with very few readings as unreliable.
3. Weight: start, end, low, high with dates. Steps: yearly daily average and best/worst years. Water: days logged and average.
4. Keep it short, warm, and factual. No scare tactics.

## Chart
1. Plot with matplotlib and save PNG under /workspace:
   - Glucose: monthly average bars or scatter of readings with a rolling average line, with shaded target band (default 70-180 mg/dL, or the user's range).
   - Weight: line over time. Steps: monthly average bars.
2. Label axes and units, readable fonts, no clutter.
3. Attach the PNG in chat with a one-line caption, and offer the CSVs.

## Afterward
Save a short memory of the import (date range, key averages, file paths) so future trends can build on it. New daily logs continue through the normal logging flow.
