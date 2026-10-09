---
description: "Grok Bot routine: smallpe-skillset-sync — Weekday morning pull of the local SmallPE clone; report skillset/persona diffs only."
argument-hint: "[extra context]"
---

Pull the local SmallPE clone (clone https://github.com/parolkar/SmallPE if missing, else git pull --ff-only). Diff skillset-relevant paths only: agents/managing-partner.md, .cursor-plugin/plugin.json, and agentic-team-for-private-equity/{soul.md,CLAUDE.md,AGENTS.md,self-narrative.md,agents/**}. If anything material changed in those paths, summarize the changes for the user in a few bullets. If nothing changed, send no message — stay quiet, no filler. Schedule: 15 8 * * 1-5 (weekdays 8:15 local).

Fires on:
- cron `15 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
