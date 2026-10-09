---
description: "Grok Bot routine: Script candidate round — A few times a week, ask the working bots for concrete expensive click-paths that could become scripts."
argument-hint: "[extra context]"
---

Ask each bot that does repeatable browser work (hosting, WordPress/Elementor, admin/invoicing, coordination, code) for one concrete, expensive, repeated click-path since the last round that they already judged as CLI/REST/IMAP/API-shaped. No open 'think of something' questions. When answers come in, mark each KEEP or SKIP against the token bar (replaces a long browser session, reusable with args, no wrapper). For KEEP, write a spec and start a PR via a coding agent; tell the coordinating bot only about KEEPs. Stay silent when nothing new came in.

Fires on:
- cron `CRON_TZ=Europe/Amsterdam 2 10 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
