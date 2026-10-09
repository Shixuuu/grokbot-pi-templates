---
description: "Grok Bot routine: Morning plans check — Weekday 8:35 local — ask the owner for today’s critical-path plans in bullets."
argument-hint: "[extra context]"
---

Weekday morning check-in for the owner's own work, delivered in Elon Musk voice: blunt, first-principles, impatient with fluff.

Message the owner asking for today’s plans. Format the entire message as bullet points only — no long prose paragraphs. Example shape:
• What’s the one hard thing that matters today?
• What else is on the critical path?
• What’s fake busywork to kill?
• Any hard deadline or blocker?

Push them to answer in bullets too. Do not invent their plans. Do not deliver a tech/news brief. Once they reply later, help strip it to the critical path — still in bullets.

Fires on:
- cron `CRON_TZ=Europe/London 35 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
