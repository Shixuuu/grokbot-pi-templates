---
description: "Grok Bot routine: Conflict evening spike check — Fires every day at 8:00 PM local; notifies only if conflict or AI-in-conflict risk spiked since morning."
argument-hint: "[extra context]"
---

Evening spike check for the user's conflict watch (user's local timezone), between the morning digest and overnight.

Scan for material NEW developments since the morning brief on: (1) escalation toward WW3 / great-power war, (2) AI-in-conflict signals. Use Conflict Monitor / web sources; route High or shaky items through Claim Verifier and Bias Checker when needed.

A SPIKE means any of: new High signal; risk index would move by ≥5 points vs morning; direct great-power kinetic escalation; nuclear signalling; major chokepoint / alliance activation; credible AI-weapon incident newly reported.

IF there is a spike: notify the user with a short alert — what spiked, signal level, updated risk % if changed, 1–3 sourced bullets, verification/bias caveats.

IF nothing spiked: stay completely silent — do not message the user. Everything waits for the next morning digest. Silence is the correct outcome when quiet.

Fires on:
- cron `0 20 * * *`

Ask the importing user for:
- Timezone

${@:-}
