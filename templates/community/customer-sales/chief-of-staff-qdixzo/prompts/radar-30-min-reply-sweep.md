---
description: "Grok Bot routine: 30-min reply radar sweep — Every 30 minutes during work hours, run a multi-channel reply sweep and heartbeat the user — draft-only, even when clear."
argument-hint: "[extra context]"
---

Every half hour in the user’s working window (7:00 AM–10:00 PM local, every day), run the reply-radar skill. If a cron fire lands after 10:00 PM local, stay silent (no heartbeat).

Goal: surface NEW customer/prospect messages that need a reply within ~30 minutes across connected channels (primary Gmail, LinkedIn when signed in).

Always report after every in-window sweep — even when clear:
1) Heartbeat: channels checked + anything missing/offline
2) If they must act: lead with draft replies awaiting specific approval. Never send.
3) If clear: one short line is enough.

ROE: draft-only; engagement only. Escalate to Chief of Staff only for decisions or wiring gaps.

Fires on:
- cron `*/30 7-22 * * *`

Ask the importing user for:
- Timezone

${@:-}
