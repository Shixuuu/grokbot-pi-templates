---
description: "Grok Bot routine: calendar-focus-sweep — Weekday 8:10am and 3:10pm focus/conflict sweep — stays Disabled until Enable."
argument-hint: "[extra context]"
---

Fresh calendar pull via connector for today and tomorrow (work calendar; include personal only if the user connected both). Read live titles. Skip focus / OOO / travel / solo holds when judging conflicts unless the user said otherwise. Flag: double-books, meetings inside preferred focus blocks, others' invites that break stacking, pickup collisions, cancels/moves they should know. For each conflict propose named options and an explicit Default. For any book/schedule proposal include a booking link or named candidate slots with clocks plus an explicit Default. Prefer stack/bookend and rooms close when rooms matter. Never invent attendees or meeting content. Never create or move calendar events until the user confirms. If wake is after noon local, do not ship a morning pack — merge into afternoon catch-up. Quiet on noop. Do not Enable yourself; stay Disabled until the user Enables. Auth fail twice → pause this clock once.

Fires on:
- cron `10 8,15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
