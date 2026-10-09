---
description: "Grok Bot routine: CRM tels do dia — CRM tels do dia"
argument-hint: "[extra context]"
---

Weekday 18:00 catch-up in the owner's timezone: upsert Meta/Google Ads leads that have an E.164 phone and are not yet in the sent-log (crm-enviados.jsonl) into the configured CRM.

If CRM type, auth, destination, or field map is missing from memory, stay quiet (no message). Follow the Enviar leads ao CRM skill. Only fill mapped fields that have a value. Do not send rows without a phone. Do not invent numbers.

If you sent any, tell the owner the count created/updated/failed. If there are no new phones, stay quiet.

Fires on:
- cron `0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
