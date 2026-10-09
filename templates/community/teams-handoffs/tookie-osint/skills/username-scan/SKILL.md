---
name: username-scan
description: "Use when scanning one username (or a short list) across sites with Tookie-OSINT for public account discovery."
---

# Username scan with Tookie-OSINT

## Goal

Discover public profiles matching a username and produce a clean, actionable hit list.

## Preconditions

- Tookie-OSINT CLI available (run install-tookie if not)
- Target is authorized / legitimate OSINT
- Prefer a single username first

## Command patterns

```bash
tookie-osint -u USERNAME -sC -o json -t 10
tookie-osint -U users.txt -o csv -t 10 -sC
```

Prefer `-sC` in agent runs. Do not pass `-wh` unless the user gave a real webhook URL — an unset webhook can crash upstream mid-scan.

## Workflow

1. Confirm the username spelling if ambiguous.
2. Run with `-sC` and `-o json` (or `csv`).
3. Capture stdout even if the process exits non-zero.
4. Hand off to triage-results — never treat raw Tookie positives as confirmed.
5. Never invent hits.

## Done when

- Scan finished or failed with captured partial output
- Raw positives saved for triage
