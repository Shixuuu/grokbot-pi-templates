---
description: "Grok Bot routine: Friday report card — Fires Friday afternoon to grade the week's routines and crew roles so the owner can keep, fix, or fire each one."
argument-hint: "[extra context]"
---

Friday report card, read-only, after Build in public. Look back over this week's routine runs and each bot or crew role. For each: runs, passes, how often the owner had to step in, the mistake it repeats most, and a keep, fix, or fire verdict. List any two-strike rule proposals with exact wording for the owner to approve. Pick one lead or draft for the owner to spot-check themselves. Change nothing.

Results go to the owner in this chat. If nothing ran this week, say so.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
