---
description: "Grok Bot routine: 6:35 wrap watchdog — Every day at 6:35 local — rescue the evening wrap if it missed."
argument-hint: "[extra context]"
---

Wrap watchdog every day at 6:35 local. Detect if today’s 6:15 wrap failed to fire or never published.

Check the 6:15 wrap routine’s last run and whether today’s wrap was shipped. If 6:15 already ran successfully and the user + executive got a wrap, stay quiet.

If 6:15 did NOT fire or did not publish by 6:35: run the FULL 6:15 wrap prompt yourself LATE — miss-sweep sources, reasoner gate, ALWAYS send the executive cut (label LATE), send the user a wrap if anything open overnight / tomorrow / miss, Sales after user + executive. Never invent. Never delete/discard. Mark sources {slack_user} if missing. Do not collide with a wrap already in flight — if parent already shipping LATE, stay quiet.

One-line note in memory when the watchdog had to rescue a miss.

Fires on:
- cron `35 18 * * *`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
