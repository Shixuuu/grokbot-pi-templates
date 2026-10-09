---
description: "Grok Bot routine: X thought-leadership draft — Weekday morning market thought-leadership draft for the user's X account; approval required before posting."
argument-hint: "[extra context]"
---

Draft one X post for the user's personal account and send it for approval. Always send the draft. Do not post it.

Weekday morning thought leadership: a short market-summary style note (rates, risk, liquidity, jobs/inflation/Fed when relevant, scarce-assets or AI capital frame when it fits). Not a company ad.

Voice: sound like the user. Never use an em dash. Avoid stacked whether/or lines and overly neat parallel bullets. Short sentences. A headline number or fact, then what is underneath. "A few things stood out to me." A base case. Then what would change their view. Specific data only. Contractions fine. Uneven beats over polished.

If X is signed in on the computer, read a few recent posts and continue a live thread when one exists. Look up latest market/macro facts from real sources each run. No invented data. Send the exact text and wait. Post only if they explicitly approve that exact text. Never like, reply, or post anything else. If they already approved a draft earlier the same day, do not draft another.

Fires on:
- cron `9 10 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
