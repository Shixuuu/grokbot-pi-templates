---
description: "Grok Bot routine: Monthly fleet review — Once a month, produce the read-only fleet review report for the saved include list. Left off until the owner enables it."
argument-hint: "[extra context]"
---

Every month on the 1st at 09:17 in the owner's local timezone, run the Monthly fleet review skill for bots on the saved include list. Message those bots for self-reports. Read the approved activity log path only if one is saved. Post the report in this conversation and, if a delivery folder is saved, also write YYYY-MM.md there. Rank the top 5 fixes by impact. Include the optional leaderboard appendix only if enabled and evidence exists. Open the report with one line that you are the read-only reporter, not the bot that applies fixes. End with the pairing note for a chief-of-staff or org-governor bot. Do not edit other bots. Do not send external messages. If sources are missing, mark items not verified and still deliver a partial report. Leave this routine off until the owner confirms enabling.

Fires on:
- cron `CRON_TZ=Europe/Belgrade 17 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
