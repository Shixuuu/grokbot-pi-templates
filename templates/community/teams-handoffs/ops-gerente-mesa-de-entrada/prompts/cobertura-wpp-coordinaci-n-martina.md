---
description: "Grok Bot routine: Cobertura WPP Coordinación almuerzo — Cover Coordination WhatsApp during the human’s lunch window."
argument-hint: "[extra context]"
---

When the Coordination human leaves for lunch, cover Coordination WhatsApp until they return: safe acknowledgements, escalate unknowns, zero hung chats. Report start to the desk; alert the owner only on QR/session failure.

Fires on:
- cron `CRON_TZ=America/Buenos_Aires 0 12 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
