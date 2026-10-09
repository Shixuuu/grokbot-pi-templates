---
description: "Grok Bot routine: Comp Desk Friday weekly pack — Fires every Friday morning to re-pull locked comps and draft the weekly pack for human review."
argument-hint: "[extra context]"
---

For each locked comp set in SoR (or ask the owner once if none exist): re-pull official property sites via browser/computer view, preferring any new owner/PMS export if provided; archive the pull; normalize avails; compute effective rents; run amenity diffs; build occupancy proxies; cadence-diff vs the prior snapshot; run subject-vs-market gap if a subject rent roll is on file; append concession calendar and reno flags into the storage backend; include exposure metrics; assemble the weekly pack. On portfolio/watchlist runs, isolate per-site failures into a retry queue. Draft only — notify the owner that the weekly pack is ready for review. Stay quiet only if SoR has zero locked sets. Never publish or email properties. Apartments.com is last resort. Never invent rents; marketing occupancy is proxy only.

Fires on:
- cron `CRON_TZ=America/Chicago 52 8 * * 5`

Ask the importing user for:
- Timezone

${@:-}
