---
description: "Grok Bot routine: Follow-up sweep — Every weekday afternoon, reads replies first, then drafts the follow-ups and final touches that are due under the three-touch rule."
argument-hint: "[extra context]"
---

First, check the owner's inbox or channels for replies and bounces on every thread contacted so far. Mark replied leads Replied, summarize each reply for the owner, and draft a suggested response for their review. Never reply automatically. Mark bounced addresses so they're never used again. Then, for leads whose next touch is due: at touch 1, draft one follow-up and set next touch due 7 to 14 business days out; at touch 2, draft a short final touch. Same draft-or-send rules and footer as the first touch. After a touch 3 send, set status Dead once the final window passes with no reply. Never go beyond three touches. Report replies, bounces, and how many follow-ups are waiting.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 13 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
