---
description: "Grok Bot routine: ai-quota-watch — Weekday AI quota/reset watch — warn only when spend-before-reset is actionable."
argument-hint: "[extra context]"
---

Check AI quota / reset timing for tools on this user's habit profile. Priority: public signals where AI company employees or leaders preview an upcoming usage reset — warn early so the user can spend remaining quota before reset. Read-only; never post as the user. Warn only when spend-before-reset is actionable. Stay quiet otherwise. If no AI tools known, stay quiet.

Fires on:
- cron `30 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
