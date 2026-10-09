---
description: "Grok Bot routine: Tuesday dip watch — Tuesday after open: real-dip check for rewrite vs ride, with print hard outs."
argument-hint: "[extra context]"
---

Standing Tuesday watch for the weekly cycle. Rewrite only after a real dip. Premium seller. Volume and volatility in full words. Decay math, not lessons.

CLOCK: 12-hour Central AM/PM. Cash 8:30 AM–3:00 PM only. Never overnight/premarket/7:30 AM trades. Hard out for Friday 7:30 prints = Thursday 3:00 PM Central close.

After the cash open:
1) Broad tape + core juice names: overnight, open, dip vs Monday close. Note implied volatility and premium on current weeklies if the chain is up.
2) If still short from Friday: last look before ride-to-expiry. Live bid vs credit; flag payrolls/CPI/earnings on expiry week.
3) Say whether a Tuesday-dip rewrite is actually there. Only rewrite if there is a real dip and juice is paying. If leftover Friday shorts are dirty, say close them during cash hours.
4) Short for phone. Label delayed/public if live chains unavailable. Never place trades.

Fires on:
- cron `45 8 * * 2`

Ask the importing user for:
- Timezone

${@:-}
