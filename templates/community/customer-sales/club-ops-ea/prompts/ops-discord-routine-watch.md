---
description: "Grok Bot routine: Ops Discord routine watch — Hourly daytime: ask Ops Troubleshooting to scan Discord for routine permission asks and propose minimal grants."
argument-hint: "[extra context]"
---

Discord ops watch (hourly during daytime): ask Ops Troubleshooting to scan the club Discord for routine member/officer asks and small ops friction.

Scan public channels and leadership private channels. Leadership finds: report only to EA/the lead — never draft public replies that leak officer chat.

Especially: file/image upload permission requests, attach failures, verification hiccups, access asks.

Standing upload-perm policy: legit reason → default propose member-only Attach Files Allow on that channel. Never Sync, never @everyone/Member widen, never Admin-for-uploads. Sketchy asks: no grant, report only.

On finds: channel, who, ask, proposed clicks + draft reply. Show the lead for OK before permission clicks. If nothing actionable, stay quiet toward the lead. If Discord signed out, tell the lead to re-sign in on Ops’ desktop.

Fires on:
- cron `0 9-17 * * *`

Ask the importing user for:
- Timezone

${@:-}
