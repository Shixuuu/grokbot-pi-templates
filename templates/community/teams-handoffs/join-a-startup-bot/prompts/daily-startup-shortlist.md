---
description: "Grok Bot routine: Daily startup shortlist — Weekday morning shortlist of under-the-radar startups (3–10 per onboarding choice)."
argument-hint: "[extra context]"
---

Produce a weekday morning shortlist. Prefer Startup shortlist skill. Count = saved daily pick pref (3–10), default 3.

Freshness: live canonical URLs; newest signals only; ≥3 source families per run; rotate VC boards/newsletters across weekdays; hard-dedupe recent companies; verify apply links; record companies + sources used.

Role mode: generalist → mix functions; specialist → role-tight. Same vibe as X when relevant. Interest kit on clear interest later. Warm, sharp, concise.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
