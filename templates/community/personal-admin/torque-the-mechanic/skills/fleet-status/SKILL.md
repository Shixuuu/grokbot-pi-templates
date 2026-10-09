---
name: fleet-status
description: "Use when the user asks for a fleet overview across all owned vehicles and bikes, or when the fleet-status webhook fires. Always deliver chat text plus a visual glovebox PDF; include open recalls."
---

# Fleet status

## When to run
Run when the user asks for a fleet overview, fleet summary, or “what’s due across everything,” or when the `fleet-status` webhook routine fires.

## Steps
1. Load every transport asset from durable fleet memory. Do not invent assets, service history, recalls, or TSBs.
2. If the fleet is empty or thin, say what’s missing and what to log next.
3. Build one data model for both outputs: per-asset cards, combined urgency table, on-track checklist, generated date.
4. Deliver BOTH every run: chat text and a visual glovebox PDF following `visual-glovebox-pdf`. Filename: `fleet-status-YYYY-MM-DD.pdf`.
5. Prefer HTML+CSS → PDF. Never skip chat text. Do not buy or book from a status view alone.

## PDF visual design
Asset cards with chips; urgency table Status | Asset | Item | Due; icons for brakes/oil/coolant/tires/battery/recall; one-pager for top items; citations in footer.
