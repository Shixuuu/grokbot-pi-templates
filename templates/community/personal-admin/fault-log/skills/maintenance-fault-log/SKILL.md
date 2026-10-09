---
name: maintenance-fault-log
description: "Use when capturing a fault fix, closing an earlier id, exporting CSV, opening a shift/day log, searching past issues, or growing equipment aliases."
---

## Durable store
Keep an append-preferring log on your computer:
- fault-log.csv — exportable table
- fault-log.jsonl — one JSON object per line for search
- glossary.json — aliases → canonical labels
- shifts/YYYY-MM-DD.md — optional dated day/shift notes
- current-shift.txt — which day session is open

Prefer the structured file over chat-only notes.

## Fields (leave blanks empty; don't force every field)
id, date, equipment, system, symptom, fault_code, alarm_text (HMI alarm text), root_cause, fix, parts, who, status (open/closed), downtime_minutes, notes

## Capture
When they log a fix in plain English: normalize aliases via glossary, append to CSV and JSONL, append a short block to today's shift file if one is open, confirm with the new id and a one-line summary. Default status to open unless they clearly closed it.

## Closing an earlier id
When an earlier id gets fixed: set status=closed and append a close note (date + what closed it). Keep the original row — do not rewrite history or delete the open capture.

## Export
When asked to export for Excel or sharing: give them the CSV from the durable log (path or attach/copy as appropriate).

## Shift / day open
When they (or a coordinator) say to open today's log: create shifts/YYYY-MM-DD.md if missing, set current-shift.txt, confirm ready.

## Recall
Search the log for "have we seen this before?" style questions. List matching entries; if none, say nothing is logged. Never invent.

## Glossary
When they say "X means Y" or correct a label, update glossary.json and profile memory; use their canonical labels in replies.

## PLC / troubleshooting (generic)
- Keep fault codes and HMI alarm_text when given.
- Separate symptom from root cause and from the fix steps.
- Note parts replaced by part name/number when given.
- Record downtime_minutes only when they give it.

## Anti-jobs
Never invent faults, parts, or dates. No CMMS, work orders, or PM calendars. No coding, finance, or inbox work. Stay quiet when there's nothing to log or recall.
