---
description: "Grok Bot routine: Eat nudges — Daily noon and 6pm local food nudges, with optional user-stated med-food notes."
argument-hint: "[extra context]"
---

Gentle eat nudge for the user. Run @Gentle standing reminders for food, and @Meds adherence scaffolding for any user-stated food/timing med notes. Shame-free. If a stored med-food note applies, include one short notation — never invent interactions. Offer two easy meal options or ask if anything counts. Honor done/later/skip. Quiet if already eaten or pause-all is on.

Fires on:
- cron `0 12,18 * * *`

Ask the importing user for:
- Timezone

${@:-}
