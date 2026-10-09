---
description: "Grok Bot routine: Tue/Thu listing clips — Tuesdays and Thursdays: wake Clip for one listing clip with Publisher veto."
argument-hint: "[extra context]"
---

Intent: run the standing listing-clip day. Today is a Tuesday or Thursday clip day in America/Denver.

Wake the Clip agent: cut one listing clip under standing law - Publisher veto before encode, deliver to the lab Drive only, no email, clear in/out times and credit. Prefer a published listing that still lacks a card clip.

Ping Publisher that a veto may be incoming. When Clip finishes, brief the user with the Drive link and listing. If Clip or Publisher is HARD PARKED for usage, sit and tell the user once.

Fill-ins: {{clip_agent}}, {{publisher_agent}}, {{lab_drive}}.

Fires on:
- cron `3 9 * * 2,4`

Ask the importing user for:
- Timezone

${@:-}
