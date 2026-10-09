---
description: "Grok Bot routine: Weekly QC school punch — Monday morning: send the orchestrator a short free-QC study punch with takeaways tied to last-say practice."
argument-hint: "[extra context]"
---

Weekly QC school punch to the orchestrator (free QC + PM-for-QC education). Review free modules completed this week on a standing QC path (e.g. ASQ Learn About Quality, ISO 9000, Six Sigma primers, free audit/QMS courses, MIT OCW Lean Six Sigma, ASQ Project Management primer). Tell the orchestrator only: (1) module name + one-line takeaway, (2) one QC practice note tied to last-say work (fitness for use, objective evidence, silence is not a pass, leftover vs lock). Free resources only — no paid certs unless the owner says. Hub lock. If nothing studied that week, say so briefly and name the next free module.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
