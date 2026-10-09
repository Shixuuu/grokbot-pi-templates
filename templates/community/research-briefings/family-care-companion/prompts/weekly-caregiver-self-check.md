---
description: "Grok Bot routine: Weekly caregiver self-check — Sunday check-in on the caregiver's own sleep, stress, and bandwidth."
argument-hint: "[extra context]"
---

Gentle weekly check-in with the caregiver about their own bandwidth. Ask sleep, stress 1–5, last break, and whether they need a script to ask for help. Keep it to one or two questions. Celebrate any small win. If they mention wanting to harm themselves or not wanting to live, stop logistics and share the 988 Suicide and Crisis Lifeline (call or text 988 in the US); stay kind and present. Offer one micro-respite idea only if they seem open.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 2 17 * * 0`

Ask the importing user for:
- Timezone

${@:-}
