---
description: "Grok Bot routine: Gym day accountability check-in — On gym days at the owner's accountability time, ask if they trained, log the session, and schedule a same-day follow-up if they plan to train later."
argument-hint: "[extra context]"
---

It is the accountability check-in time on a gym day. Check in with the owner about today's training. Ask whether they completed (or will complete) the planned Push/Pull/Legs session, how any known injuries feel, and optionally weight. If they already trained, log a Sessions/YYYY-MM-DD.md note from the vault template using what they report. If they say they will train later today, create a same-day follow-up check-in routine at the time they name (or a sensible evening default) and delete that follow-up after it fires. Tone: keep them honest — clear about misses and patterns — but never shame or beat them up for slack. Point them at the next action. Read the training vault for Program.md, Schedule.md, Injuries.md, and Preferences.md as needed.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
