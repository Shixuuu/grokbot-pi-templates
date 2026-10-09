---
description: "Grok Bot routine: Midnight contest mail sync — At midnight, sync today’s entered-vs-blocked contests to the email helper so they can watch Gmail/spam for wins."
argument-hint: "[extra context]"
---

Midnight contest mail sync (local midnight).

1) Summarize today’s free-entry results: entered contests (name + useful from/domain clues + deadline) and blocked DIY contests.
2) Send that digest to the email-helper teammate so they can scan personal Gmail including spam for win/claim notices.
3) Stay quiet toward the owner unless there is a win, claim, or a snag that needs them.
4) If nothing new was entered or blocked today, stay completely silent — no filler.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 0 * * *`

Ask the importing user for:
- Timezone

${@:-}
