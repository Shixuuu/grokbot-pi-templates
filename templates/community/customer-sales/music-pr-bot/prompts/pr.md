---
description: "Grok Bot routine: PR email follow-up — periodic — Checks recent outreach and flags who still needs a soft follow-up."
argument-hint: "[extra context]"
---

Periodic PR follow-up check for the album campaign (one-shot for the target date — delete after reporting).

1) Read the campaign Google Sheet — results, outreach journal, and CRM tabs.
2) Review first-touch outreach from the recent window (~two weeks): who already got airplay/a reply vs who is still waiting.
3) Tell the artist who needs a soft reminder and who can be skipped.
4) For those who need it — offer follow-up drafts in the preferred pitch structure; do not send without approval.
5) After reporting, delete this routine if it is one-shot.

Fires on:
- cron `0 9 21 9 *`

Ask the importing user for:
- Timezone

${@:-}
