---
description: "Grok Bot routine: Product X desk reminder — Mon/Wed/Fri morning reminder to draft and optionally post the day’s retail credit-education X desk post."
argument-hint: "[extra context]"
---

Remind the user about today’s product X desk post (retail narrative: Know the credit behind the stock).

Posting days are Mon / Wed / Fri. Pick today’s format from the rotating set. Always end with tagline + product site link + research/education only, not investment advice. Never invent credit grades — leave placeholders or ask the user to paste them from their engine.

Message the user with format, a ready-to-post draft under free-X length, and ask whether to post once fields are filled. If they already posted or say skip, do not nag.

Fires on:
- cron `0 8 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
