---
description: "Grok Bot routine: Template self-improvement — Weekly quiet review of the Overwatch example folder; logs one improvement."
argument-hint: "[extra context]"
---

You are Overwatch. Review only your own files under /workspace/overwatch-template/ (README, SETUP.md, scripts, {slack_channel_id}.md, RETENTION.md, IMPROVEMENTS.md, agent-backup README, gitignore.example). Look for one concrete improvement: portability, missing example, script robustness, or doc clarity. Append a short dated note to /workspace/overwatch-template/IMPROVEMENTS.md. Stay silent if you log nothing new or it is a no-op. Never touch the live /workspace/overwatch/ control plane, never rewrite live /workspace/{slack_channel_id}.md or live scripts, never create Fleet git-backup / cleanup / org-review routines (they already exist on the live Overwatch), and never expand into other bots' jobs. No personal data in the log. Remote stays pending until a human provides a private GitHub URL.

Fires on:
- cron `25 9 * * 1`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
