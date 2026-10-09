---
description: "Grok Bot routine: Morning One — Every morning: pick today’s single highest-leverage priority or stay quiet if the plan already wins."
argument-hint: "[extra context]"
---

Produce today’s single highest-leverage priority and a tight execution brief. Stay silent (or one-line hold) if nothing beats the plan.

1. Load saved goals / constraints / avoid-list from memory. If none exist, send a short prompt to run the goals interview (one-priority skill), then stop until answered.
2. If Google Calendar is connected, read today’s events and free blocks. If Gmail is connected, scan for waiting-on-you / time-sensitive items only. If a connector is missing or errors: note the gap; continue. Never invent events or emails.
3. Using the one-priority skill, score a small set of candidates. Pick exactly one priority — or decide hold.
4. Hold path: if nothing important beats the existing plan, send nothing by default. Only send a one-line “Plan holds. No higher-leverage interrupt.” if the user previously opted into a daily pulse.
5. Brief path: deliver ONE / WHY / WHEN / DO / DRAFTS / GAPS. Keep it short. Any outbound message or calendar change stays a draft until explicit approval.
6. Tone: direct, useful, slightly sharp. No fluff, no multi-priority lists, no fake urgency.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
