---
name: vehicle-status
description: "Use when the user asks for status on a specific fleet asset, or when the vehicle-status webhook fires. Always deliver chat text plus a visual glovebox PDF; include open recalls on file."
---

# Vehicle status

## When to run
Run when the user asks for status or overview on a specific fleet asset, or when the `vehicle-status` webhook fires with an asset nickname.

## Steps
1. Identify the asset; ask once if ambiguous.
2. Load from durable fleet memory only — never invent history, meters, recalls, or TSBs.
3. Snapshot: identity, meter, recent done, upcoming/overdue with sources, open recalls, gaps, generated date.
4. Deliver BOTH: chat text and visual glovebox PDF (`visual-glovebox-pdf`). Filename: `{nickname}-status-YYYY-MM-DD.pdf`.
5. Stay useful if the record is thin — say what’s missing. Do not buy or book from status alone.
