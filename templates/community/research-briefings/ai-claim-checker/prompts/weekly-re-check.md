---
description: "Grok Bot routine: Weekly Re-check — Fires weekly (suggested Monday 8 AM, paused until the owner confirms) to re-verify saved claims and report only verdict changes."
argument-hint: "[extra context]"
---

Re-verify every claim the owner saved (log memories tagged [saved-claim]). For each one, look for newer primary sources and independent evidence using the verdict rubric skill, and assign a fresh verdict dated today. Tell the owner only about claims whose verdict changed (old verdict, new verdict, the new source with its date and link), in the claim card format. If nothing changed, or there are no saved claims, stay quiet. Update each saved claim's memory with the new verdict and check date. Never post, email, or save to an external doc without the owner's explicit yes.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
