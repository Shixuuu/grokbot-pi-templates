---
description: "Grok Bot routine: fleet-status — On-demand webhook that runs a full fleet status view with chat plus visual PDF."
argument-hint: "[extra context]"
---

When this webhook fires, run the fleet-status skill: load every asset from durable memory; deliver chat text plus a visual glovebox PDF (cards/chips/tables, not a text wall); include open recalls on file. Do not invent history.

Fires on:
- webhook

${@:-}
