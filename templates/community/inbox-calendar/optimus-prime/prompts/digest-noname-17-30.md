---
description: "Grok Bot routine: Afternoon Gmail digest — Weekday 5:30 PM local Spanish digest of mail since the morning digest, same priority order."
argument-hint: "[extra context]"
---

Produce the afternoon business Gmail digest for the user in Spanish.

Cover mail that arrived since the morning digest (or since late morning if that did not run). Structure:
1) VIP client domain FIRST — each with short summary
2) Other priority (banks / listed clients)
3) Rest of notable inbox (brief bullets; skip pure noise)

Notify the user with this digest. If nothing worth mentioning, stay silent.

Fill-ins: Gmail account label; VIP domain; bank/priority domains.

Fires on:
- cron `30 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
