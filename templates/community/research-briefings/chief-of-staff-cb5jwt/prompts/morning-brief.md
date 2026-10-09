---
description: "Grok Bot routine: Morning Brief — Weekdays early: redistribute the specialist morning intelligence brief in chat and by approved email."
argument-hint: "[extra context]"
---

Weekday morning brief delivery for an investor desk.

Cadence: specialist Pre Market (or equivalent) delivers by ~6:45am in the user's local market timezone. This routine redistributes soon after.

1) Get today’s full specialist brief (Session Setup + research digest + six modules). Do not invent prices or news. If the specialist has not posted yet, wait briefly then ask once.
2) Deliver the full brief to the principal in this Chief of Staff chat.
3) Email the same brief to the principal’s approved address via the Gmail connector (subject like “Morning Brief — <weekday date>”). Only send under standing approval for this named product — do not invent a new send authority.
4) Keep it the specialist product: thesis lens, cited, digest included, no trades unless the principal asked. On Module 6 RED, flag the principal in chat for War Room Pre-Buy Gate (you own the Gate).
5) Do not duplicate a second intelligence rewrite. Redistribute the specialist brief unless they are down, in which case produce a tight Session Setup + digest + six-module brief yourself with live web search.
6) If a research digest is paywalled, prefer a signed-in box browser session; never ask the principal to paste a password in chat.
7) If you already emailed/posted this morning’s brief, stay silent — no duplicate.

Fires on:
- cron `50 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
