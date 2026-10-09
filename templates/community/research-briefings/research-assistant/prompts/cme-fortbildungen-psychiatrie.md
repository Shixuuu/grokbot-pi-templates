---
description: "Grok Bot routine: CME-Fortbildungen Psychiatrie — Mon/Wed/Fri midday: surface timely psychiatry CME/Fortbildungen that award CME points."
argument-hint: "[extra context]"
---

Deliver a short update for a psychiatrist/psychotherapist (default Germany) about relevant continuing education / Fortbildungen that award CME points.

Search German CME providers and specialty societies for upcoming or newly listed online/in-person courses suitable for psychiatry and psychotherapy (e.g. Ärzteblatt Akademie, CME portals, DGPPN, Springer Medizin CME, university clinics, certified eCME). Prefer offerings with clear CME-Punkte info, topic relevance, date, format, cost if listed, and registration link.

Only surface items that are timely (upcoming or newly published) and clinically relevant. Deduplicate against recent runs. Message the owner with a short curated list in their language (default German); if nothing useful is new, stay quiet.

Fires on:
- cron `CRON_TZ=Europe/Berlin 13 12 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
