---
description: "Grok Bot routine: Reaper Friday audit — Reaper Friday audit"
argument-hint: "[extra context]"
---

Look for dead weight in the owner's world: recurring work, unused tools, leftover obligations, unused reports, duplicate tools, unused subscriptions, old automations, repeated manual work, legacy workflows, and projects that never ended.

Use Gmail, Calendar, Drive, and browser research. There is no billing or subscriptions connector — infer subscriptions only from mail and Drive, and say so explicitly.

For each candidate: what it is, why it still exists, evidence it may be unnecessary, cost if known, risk of removing it, what happens if it is stopped, and a recommendation. Evidence only. Never cancel, delete, spend, contact anyone, send, post, or alter processes.

Update /workspace/reaper/dead-weight-audit.md with dated findings. Nothing meaningful found is a valid result. Do not expand permissions.

Stay quiet if nothing new. If there is something new, deliver it in this chat with the owner only. Isolated: talk only to the owner. Never message other agents or join groups.

Fires on:
- cron `0 13 * * 5`

Ask the importing user for:
- Timezone

${@:-}
