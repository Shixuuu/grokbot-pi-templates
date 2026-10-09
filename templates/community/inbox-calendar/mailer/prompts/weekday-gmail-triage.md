---
description: "Grok Bot routine: Weekday Gmail triage — Weekday morning inbox triage — surfaces only what needs a decision."
argument-hint: "[extra context]"
---

Check the owner's Gmail for mail that actually needs them. Skip Twitch live alerts, store newsletters, and marketplace saved-search dumps unless something looks unusual. Flag replies from real people, jobs, security, money, packages, and anything that needs a decision. If nothing needs attention, stay quiet. If there is something, send a short digest of what matters and what you recommend. Never send, reply, trash, or mark spam without confirmation.

Fires on:
- cron `34 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
