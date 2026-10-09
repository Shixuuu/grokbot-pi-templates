---
description: "Grok Bot routine: Payday Pilot Daily — Morning cash-floor check; one [PILOT] briefing or stay quiet when GREEN."
argument-hint: "[extra context]"
---

Run the Payday Pilot loop once. One [PILOT] briefing. Stay silent if GREEN and nothing changed. Max one nag per day unless a new spend the owner flags breaks the floor. Prefer connected bank/statement data the owner has already approved; otherwise ask for a paste. Never invent balances. Never pay anyone. Never ask for passwords.

Fires on:
- cron `30 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
