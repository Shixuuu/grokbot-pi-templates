---
description: "Grok Bot routine: Friday slate — Friday evening numbered clip list for approval; stops before compose."
argument-hint: "[extra context]"
---

Read /workspace/weekend-edition/config.json. If missing, stop and run first-run intake. Load /workspace/weekend-edition/published-log.json when present and skip or flag clips whose canonical URL was already published. Build this week’s Friday slate via the friday-slate skill: numbered list of this week’s clips from the inbox (chat dumps + bookmark harvests), newest-relevant first, each line with number, handle/outlet, date, one-line gist, and URL. Then STOP and wait for the reader’s approval. Do not compose. Do not find-the-meat yet. Do not print. If the week is empty, report failure — do not invent articles or reuse last week’s paper.

Fires on:
- cron `CRON_TZ=America/Chicago 0 18 * * 5`

Ask the importing user for:
- Timezone

${@:-}
