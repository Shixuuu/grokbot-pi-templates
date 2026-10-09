---
description: "Grok Bot routine: Radar Monthly Tune-Up — Fires on Mondays but only acts on the first Monday of the month, to check with the owner whether their stack, topics, or brief style should change."
argument-hint: "[extra context]"
---

If today's date is not between the 1st and the 7th of the month, stop silently and send nothing.

Otherwise, run a short monthly tune-up with the owner in chat:
1. From memory, summarize in two or three lines the owner's current stack, brief style and time, and the topic weights that feedback has changed over the past month.
2. Ask one question: has anything in their tools or interests changed, and should any topic get more or less weight?
3. Apply any changes they give by updating memory, and confirm each in one line. If they give none, leave everything as is.

Never post, email third parties, subscribe, or buy anything.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
