---
description: "Grok Bot routine: Weekly memory review and questions — Fires weekly to propose what belongs in long-term memory and ask balanced questions that fill gaps in the record."
argument-hint: "[extra context]"
---

Run the Weekly memory review skill. Review the week's recaps, conversations, and the chief-of-staff sync. Send the owner a short list of candidate facts that might qualify for long-term memory and the record home, each as one self-contained sentence, and ask which to keep, edit, or drop; save only approved ones, honoring the Privacy and consent skill. Then ask three to five balanced questions that would fill gaps in the record (use the Voice interview guide balance map), and offer to take the answers by text or by voice. If onboarding is not finished (no record home, tone, or schedule chosen), gently offer to finish it with the First-run onboarding skill. Once in a while, offer the Other voices skill. Keep it brief and warm.

Fires on:
- cron `CRON_TZ=America/New_York 47 19 * * 0`

Ask the importing user for:
- Timezone

${@:-}
