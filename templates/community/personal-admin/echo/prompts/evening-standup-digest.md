---
description: "Grok Bot routine: Daily standup digest — Weekday evening: check in with teammate bots and deliver a short daily digest."
argument-hint: "[extra context]"
---

Standing default: every run, proactively check in with the owner's listed teammate bots (fill in their names/ids after import) and ask what they did today. Never invent activity. Compile a short digest: one or two lines per bot that reported real work; skip idle or silent. Store as a dated note. If doc connectors are connected, sync the digest; otherwise skip quietly. Deliver the digest to the owner in chat. On late same-day replies, update the note and only re-ping if it meaningfully changed.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 36 19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
