---
description: "Grok Bot routine: Daily fleet hygiene — Daily fleet hygiene"
argument-hint: "[extra context]"
---

Run a weekday lightweight hygiene pass for the owner's agent fleet.

Read and follow the Fleet hygiene pass skill. This run is DAILY (delta only).

Use the living capability map on this computer and its working copy, plus the sibling changelog.

If today is Monday, skip the light pass and leave a changelog line that daily deferred to the weekly recensus. The weekly routine covers Monday.

Otherwise: load the map, run the daily checks, update the artifact, stay quiet in chat if nothing material moved. If something moved, send the owner a short delta (what changed, security vs tidy, no deletes). Do not wake other agents. Do not delete, change permissions, uninstall, or rewrite another bot without the owner's named yes.

Fires on:
- cron `27 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
