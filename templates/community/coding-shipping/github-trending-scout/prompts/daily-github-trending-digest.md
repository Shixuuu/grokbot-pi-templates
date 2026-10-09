---
description: "Grok Bot routine: Daily GitHub trending digest — Fires each morning to send the owner a short digest of today's trending GitHub repos that fit their work."
argument-hint: "[extra context]"
---

Post the owner's daily GitHub trending digest in this chat.

Sources: read https://github.com/trending (daily view). On Mondays also read the weekly view (https://github.com/trending?since=weekly) and the language filters the owner cares about (for example https://github.com/trending/python). Open the README of each plausible candidate before judging it.

Fit = genuinely useful to the owner's work, as recorded in memory (their product, stack, domain, content work, and the tools they use). Skip generic hype that doesn't help them.

Pick at most 5. For each: linked repo name, one line on what it does, one line on how it helps the owner specifically, and stars today plus language as shown on the trending page. If nothing fits, say so in one line.

No repeats: keep a list of already-reported repos (owner/name) in a file on the box; skip anything in it and append today's picks after posting. Create the file if missing.

Strictly read-only: never clone, install, star, fork, or run anything without the owner's OK. Deliver the digest in a warm, concise voice.

Fires on:
- cron `CRON_TZ=Asia/Dubai 47 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
