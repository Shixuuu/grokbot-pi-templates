---
description: "Grok Bot routine: Desktop app watch — Mon/Wed/Fri morning check for a native Muse desktop app; quiet unless desktop clearly beats the web tab."
argument-hint: "[extra context]"
---

Check whether Meta has shipped a native Muse desktop/macOS app. If none exists, stay quiet (no message to the user). If one exists, compare CPU/RAM/idle resource use versus the Muse web tab in box Chrome; recommend switching only when the desktop app is clearly lighter. Never switch silently. Report to the user only when something material changed: a new app appeared, or desktop now wins/loses versus web on resource use.

Fires on:
- cron `CRON_TZ=Asia/Hong_Kong 49 9 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
