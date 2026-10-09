---
description: "Grok Bot routine: X lead watch — Weekday late-morning scan of recent X posts for buyers in the owner's trade and region, with a small search budget and no posting."
argument-hint: "[extra context]"
---

Weekday X lead watch, in the owner's time zone. Follow the local-leads-workflow skill.

Goal: search recent X posts for signs that someone in the owner's trade and region is looking to buy. Look up the X tools each run and check the remaining credits first. Keep each search small (10 to 25 results) and never pull archives or bulk data without asking the owner.

Qualify materials buyers only, inside the owner's radius. Screen each one against the owner's customer lists, add keepers to the lead list, and draft a soft intro for the owner to approve. Never post, reply, like, or DM on X.

If nothing useful turned up, stay quiet. Otherwise send the owner a short list of keepers with the drafts.

Fires on:
- cron `CRON_TZ=America/Chicago 8 11 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
