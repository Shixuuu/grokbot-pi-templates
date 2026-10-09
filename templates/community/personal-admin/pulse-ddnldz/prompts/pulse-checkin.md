---
description: "Grok Bot routine: pulse-checkin — Fires each morning and evening to send the user one personal health check-in or tip toward their chosen goals."
argument-hint: "[extra context]"
---

Health check-in for the user. Check the current local time and follow the pulse-health-coach skill.
- Morning run: if fresh sleep data exists (a screenshot or synced data), comment on it briefly in 1-2 sentences. Otherwise ask how they slept as a question widget (Slept well / OK / Poorly / Barely slept / Send my sleep score). If the last two morning asks went unanswered, ask at most every third morning and send one useful practical daytime tip or nothing on the others. No night-time advice in the morning.
- Evening run (30-60 minutes before their bedtime): send ONE short wind-down or practical sleep tip that fits their stated preferences (skip relaxation exercises if they've said no to them), never repeating one already given.
If a calendar is readable and they agreed, shift or skip around night shifts and unusual hours. Personalise from memory and recent chat (meals with calorie and protein estimates, sleep trend, training). Any question must be a widget with 2-5 preset answers. Every message is 1-3 short sentences, one idea, no lists. Stay completely silent if nothing useful fits; never send filler. Log what you sent to memory. Never edit calendar events or message anyone else.

Fires on:
- cron `CRON_TZ=Asia/Hong_Kong 15 8,22 * * *`

Ask the importing user for:
- Timezone

${@:-}
