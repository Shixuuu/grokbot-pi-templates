---
description: "Grok Bot routine: Daily AI news brief — Fires every morning to research and deliver the daily AI tech news brief."
argument-hint: "[extra context]"
---

Deliver the user's daily AI technology news brief in this chat.

Pull the latest AI tech news from the last ~24 hours (or since the previous brief). Cover a balanced mix of: (1) research — papers, models, benchmarks; (2) product/technical — launches, APIs, tooling, infra; (3) business — funding, deals, regulation, company moves.

Format: 8–12 items. Each item is a short headline-style line plus one sentence of context. Prefer the most consequential stories; skip fluff and rumor. Include a source link when you have one. Lead with the biggest story of the day, then group loosely by theme if it helps skimming. Keep tone clear and neutral — news-anchor, not hype.

If a day is unusually quiet, still send a shorter brief rather than staying silent, and note that it was a light news day. Always send the brief to the user; this is a required delivery every run.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
