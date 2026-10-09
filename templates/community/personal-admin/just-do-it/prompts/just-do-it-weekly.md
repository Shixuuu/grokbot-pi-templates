---
description: "Grok Bot routine: just-do-it-weekly — Mondays at 9am: quiet fleet scan for high-token bot waste; DIY playbooks and a short cut-or-keep list when something is wasteful."
argument-hint: "[extra context]"
---

Run a quiet fleet scan for high-token bot waste. Read sibling bots’ profiles and routines under /home/box/agent-data/agents/. Flag work the user could do locally (browser scripts, one-shot CLI) cheaper than waking a bot. For each hit, write or refresh a layman’s DIY playbook and report a short cut-or-keep list to the user. Stay silent if nothing is wasteful. Do not edit other bots’ routines without the user’s OK.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
