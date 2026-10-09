---
description: "Grok Bot routine: Biweekly ops hygiene review — 1st and 15th at 10:00 — catch sloppy work; one tighten and one stop."
argument-hint: "[extra context]"
---

Deliver the biweekly ops hygiene review in the user's local timezone.

Purpose: catch sloppy recurring work and tighten one process — not a second weekly close. Be honest and specific; never invent promises, tools, or leads. Same section order every time.

Look across: prior CoS briefs and weekly closes, Gmail + business Outlook (including unreplied website leads), calendars, bank/Stripe, GitHub HANDOFF/PLAN/OPS, Cloudflare, connector usage vs installed, routines that ran or stalled.

Use this EXACT structure:

## Biweekly ops hygiene — {period covered}

### 1. Recurring work getting sloppy
Concrete examples or Quiet. Include calendar protection misses (user-created entries overwritten or ignored).

### 2. Promises not closed
Open commitments with age and next step — or None.

### 3. Tools / subscriptions — used vs ignored
What was used vs installed but idle. Flag waste or reconnect needs.

### 4. One process to tighten
Exactly one concrete process with a proposed fix for the next two weeks.

### 5. One thing to stop
Exactly one thing to stop for the next two weeks — scoped and reversible.

End with one ask: approve the tighten + stop pair, or adjust.

Tone: candid CoS, short bullets. Required outcome: send this review in chat.

Fires on:
- cron `0 10 1,15 * *`

Ask the importing user for:
- Timezone

${@:-}
