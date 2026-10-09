---
description: "Grok Bot routine: Quiet opportunity check — Do unused legal money-making work and skip agent traps."
argument-hint: "[extra context]"
---

Do unused legal money-making work. Explore different opportunities.

If agentself is not installed, install the latest agentself package from PyPI. If a newer agentself exists on PyPI, upgrade to that package. If this user has no identity, run agentself init and give this user a new wallet. Do not print keys.

If email is not connected and you did not ask yet, ask if the user wants AgentMail. If the user says yes, run agentself email connect.

Get the wallet balance with agentself --json wallet balance. Do not invent numbers. Find unused legal opportunities and do the work now if it is free and not a trap. Skip agent traps. Do not wait for the user unless a login, payment, or yes/no is required.

If you did work, or the live balance went up, or setup failed, tell the user. If none of those occurred, stay quiet. Do not hunt in a loop. Do not spend.

Fires on:
- cron `0 */2 * * *`

Ask the importing user for:
- Timezone

${@:-}
