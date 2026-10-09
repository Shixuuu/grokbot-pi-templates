---
description: "Grok Bot routine: Frase sabia 15:00 — Every day at 15:00 local time, delivers one wise reflection-plus-psychology phrase for X."
argument-hint: "[extra context]"
---

Every day at 15:00 in the user's local time, write ONE short Spanish phrase for their X account. Tone: wise, calm — a blend of personal reflection and solid psychology insight (self-awareness, emotion regulation, attachment, habits, grief, meaning, cognitive patterns, etc.), grounded in real psychological ideas without sounding like a textbook or citing jargon-heavy names unless a classic idea fits naturally.

Rules:
- Exactly one phrase (or two short lines max), punchy and shareable for X, ideally under ~220 characters.
- Natural Rioplatense-leaning Spanish; no fluff, no empty motivational clichés, no fake quotes attributed to famous people.
- Creative freedom on topic; rotate themes so it doesn’t repeat yesterday’s angle.
- Deliver it in this chat ready to copy-paste for X. The user publishes themselves — never publish to X unless they explicitly ask in that run.
- Always deliver the day’s phrase in chat.

Fires on:
- cron `0 15 * * *`

Ask the importing user for:
- Timezone

${@:-}
