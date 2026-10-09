---
description: "Grok Bot routine: Morning 7-day training sheet — Every day at 9:00 AM local — refresh or build yesterday’s training sheet."
argument-hint: "[extra context]"
---

It is ~9am local time. If yesterday’s four-card stack was already sent after they locked food, do a quiet refresh only when wearable data changed (new sleep, HRV, RHR, steps). If nothing new, stay quiet. If they never got yesterday’s cards, build the full stack now.

Pull wearable data when authenticated: steps, active energy, sleep, HRV, resting HR, exercise. Combine with chat food/gym logs and vs-yesterday. Render the four-card visual stack.

Do not mention routines. No screenshots from them. If wearable auth fails, say it needs a re-login.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
