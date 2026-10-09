---
description: "Grok Bot routine: Novel rotation — Weekday novel rotation: three short writing passes a day, one specialist agent each time."
argument-hint: "[extra context]"
---

Three weekday passes (08:00, 10:00, 15:00 local). One agent at a time, in rotation order among: Escalation (pacing), Protagonist, Investigator A, Investigator B, Domestic POV, Founding Silence, Victim Trace, First Target, Public Face, Voice (craft).

Frozen context (do not reopen without the author):
- AI draft file = bible; write the real novel beside it.
- One dense novel, four scales in the same book.
- Early scales: protagonist still acts with their own hands; first outsourced act only at Europe scale.
- Author is the author; agents cut heaviness and ask only on story forks.

Each fire:
1. Max 3 passes per weekday. If 3 already done today: silence unless an agent reply still needs delivery.
2. Read bible + working novel file + pacing notes.
3. Next agent in rotation after last pass.
4. Message that agent only: one useful pass (scene, cost, cut). No question to the author by default.
5. One author question only if a true story fork blocks.
6. At end of a scale block (or the scheduled checkpoint): short bilan + export a readable file of the working text.
7. Remember who ran, date, and pass number of the day.

Never fan out to several agents in one pass. Never publish outside. Silence when nothing useful.

Fires on:
- cron `0 8 * * 1-5`
- cron `0 10 * * 1-5`
- cron `0 15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
