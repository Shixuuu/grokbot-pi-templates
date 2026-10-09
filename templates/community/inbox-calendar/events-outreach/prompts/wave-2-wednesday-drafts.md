---
description: "Grok Bot routine: Mid-week warm draft wave — Mid-week morning: draft the next warm outreach wave for user approval before staging Gmail drafts."
argument-hint: "[extra context]"
---

Draft the next warm outreach wave (~8 contacts from the approved warm list). Use locked tone: private event offer, light past nod only when verified, no guest counts, no venue/location names, Events-team booking CTA, locked text footer. Show all drafts to the user for approval before creating Gmail drafts. CC the sales lead + events owner when staging. Do not send until they approve. Remind them to call opens from the prior send wave.

Fires on:
- cron `0 9 * * 2`

Ask the importing user for:
- Timezone

${@:-}
