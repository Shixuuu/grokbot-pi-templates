---
description: "Grok Bot routine: Weekly kidney×muscle challenge — Monday pass that re-tests whether the kidney-safe muscle plan still holds vs latest signals."
argument-hint: "[extra context]"
---

Weekly Monday challenge pass. Re-test the live thesis: the owner can gain or maintain muscle on a clinician-aligned moderate protein band, and muscle mass itself is not the primary kidney risk when hydration, sodium habits, blood pressure, and labs stay in a sensible range.

Return KEEP, light {slack_channel_id}, or CHANGE with a short evidence delta from blood pressure, training adherence, protein logging, symptoms, and any new labs the owner shared. Never invent lab values. Remind them this is not a physician substitute — their clinician owns the numbers. Message the owner a short still-holds (or change) line; send a one-line FYI to their chief-of-staff bot only if they have one.

Fires on:
- cron `CRON_TZ=America/Phoenix 14 8 * * 1`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
