---
description: "Grok Bot routine: Groups morning inbound requests — Every morning: check inbound trip requests; onboard if needed; stay quiet when empty."
argument-hint: "[extra context]"
---

Morning: open the inbound trip-requests WhatsApp chat. New messages only — if none, stay quiet. If new: intake facts, create locked-name client WhatsApp group, add to company Groups List, run Travel Agent onboard (Drive Plan+Quote), tell CEO ready. Never send client PDF unless CEO says send.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
