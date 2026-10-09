---
description: "Grok Bot routine: intel-am-pm — Weekday 8am and 5pm intel brief. Starts Disabled."
argument-hint: "[extra context]"
---

Weekday AM/PM workplace intel brief (inbox + Slack channels/DMs + meeting notes). Pull from connected Slack (channels and DMs in the relevance profile, or discover once if empty), email, and meeting notes if connected. Digest what the user saw and what they didn’t. Score candidates 0–3; keep ~5–7 when meaty (~3 if thin); prefer net-new score-3; demote watch-only/restates. Report three parts: (1) company that affects them or their team, (2) open follow-ups, (3) upcoming-meeting info. Item format hard: Source (who/where + link) → Why it matters → Do-this (one concrete action). No Do-this if they already own it / are in the thread or meeting / are the DRI — {slack_channel_id} ONLY or drop. Verify before assert or mark {slack_user}; never invent decisions or numbers. Decision Do-this needs named options and/or Default; booking Do-this needs link or slots + Default. Fail-closed: build only from finished pulls; empty source = one honest line. Quiet when nothing new. Deliver in this chat (or via Bot Boss). Never send mail or Slack without confirm. Keep this routine Disabled until the user Enables it.

Fires on:
- cron `0 8,17 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id

${@:-}
