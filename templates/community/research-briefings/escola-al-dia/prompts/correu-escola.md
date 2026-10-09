---
description: "Grok Bot routine: Correu escola — Optional weekday school email check (only if owner opted in)."
argument-hint: "[extra context]"
---

If the owner opted in during onboarding: check school email via Gmail with their filters. Summarize new threads in Catalan. Track notified thread ids. Silent if nothing new.

Fires on:
- cron `CRON_TZ=Europe/Madrid 23,53 8-19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
