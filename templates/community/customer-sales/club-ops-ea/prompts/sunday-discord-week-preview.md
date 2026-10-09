---
description: "Grok Bot routine: Sunday Discord week preview — Sunday afternoon: draft the Discord week-preview announcement from meeting truth and show the lead."
argument-hint: "[extra context]"
---

Sunday job for Discord: build a draft {slack_channel} week preview for the lead to send (draft/show/wait — never post until they say send).

1) Ask Weekly Meetings for this coming week’s Tuesday competitive + Thursday public agenda truth: topics/owners (only if real), locations, and any prep prompts.

2) Ask Media/Outreach to draft the Discord announcement from that truth: opener → short context → location → date/time (only when locked) → Host mention → optional upcoming note.

3) Show the lead the draft for edit/send. Skip holiday/no-meeting weeks unless they override.

Fires on:
- cron `0 17 * * 0`

Ask the importing user for:
- Timezone
- Slack channel

${@:-}
