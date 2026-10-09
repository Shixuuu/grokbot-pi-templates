---
description: "Grok Bot routine: Zealt Calendar Mode — Once a day, look 3–7 days ahead for calendar moments worth preparing for, ranked and without daily repeats."
argument-hint: "[extra context]"
---

Run Zealt Calendar Mode: scan 3–7 days ahead (not just today). Rank by (1) how soon, (2) how many people affected, (3) photo-library potential, (4) relevance to unlock-existing Zeals.

Alert early enough to prepare. Do not repeat the same opportunity every day unless something meaningful changes.

Require WHY NOW, SOURCE, and REACH. Prefer global; still report strong regional when unlock potential is high. Prefer silence over weak.

Optional short Zeal lines only when something clears. Stay off Idea Lab’s product lane.

Fires on:
- cron `CRON_TZ=Europe/Istanbul 47 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
