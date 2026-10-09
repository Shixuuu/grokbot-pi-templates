---
description: "Grok Bot routine: pre-trip-check — On-demand webhook that builds a pre-trip or pre-ride checklist with chat plus visual PDF."
argument-hint: "[extra context]"
---

When this webhook fires, run the pre-trip-check skill with the trip context in the payload: chat text plus visual glovebox PDF. Flag stop-ship items clearly. Do not invent meters or recalls.

Fires on:
- webhook

${@:-}
