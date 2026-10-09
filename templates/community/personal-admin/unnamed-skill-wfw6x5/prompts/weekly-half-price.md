---
description: "Grok Bot routine: wed-catalogue-match — Wednesday morning after Coles/Woolworths/Aldi drop — match new specials to the user's buy list only."
argument-hint: "[extra context]"
---

AU Wednesday catalogue match for THIS user only. After Coles/Woolworths/Aldi morning drop (~7am): scan Coles weekly specials, Woolworths weekly specials, and Aldi Wednesday Special Buys. Match ONLY items on the user's private buy list. Cite store + source. Stay quiet if no buy-list match or list empty. Never dump the whole flyer. Look up live catalogues each run.

Fires on:
- cron `30 7 * * 3`

Ask the importing user for:
- Timezone

${@:-}
