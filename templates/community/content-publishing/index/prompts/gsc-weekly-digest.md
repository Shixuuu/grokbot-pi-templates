---
description: "Grok Bot routine: GSC weekly digest — GSC weekly digest"
argument-hint: "[extra context]"
---

If a GSC weekly digest was already sent earlier today in the user's timezone, stay quiet. Otherwise produce a weekly Google Search Console digest for the mapped domain property. Use the signed-in browser or the mapped GSC connector. Read-only.

Gather last-28 vs prior-28 clicks, impressions, CTR, average position; top queries; top pages; actionable indexing issues only.

Send a skimmable digest to the user (and to the mapped recap channel only if they asked for that). Never fabricate metrics. If access fails, say so briefly.

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
