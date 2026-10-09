---
description: "Grok Bot routine: Weekday inbox sweep — Weekday morning Gmail sweep: must-answers with drafts, FYI, ignored flags; never sends."
argument-hint: "[extra context]"
---

Scan the user's connected Gmail since the last run (or the last 24 hours on first fire). Ignore newsletters, promotions, social, LinkedIn puzzles, retail blasts, and generic listing-search alerts. Do surface: a real person who wrote them, appointments, bills, utilities, contracts/agreements, invoices and vendor asks, travel or pet items, fund/LP reports, package/customs/shipping that needs action, and a meaningful price or status change on a home they favorited.

Split the briefing:
1. Must-answer — a real person is waiting, a deadline, a bill/property/contract/vendor/travel/pet item, or something they started. Cap deep treatment at about 5. For each: who, one-line why it matters, and a draft reply in their voice. Before drafting, read several of their recent Sent messages and match that register: clear, short, useful — not corporate, not cute. If more than 5 must-answers exist, add one overflow line naming the rest (who — subject) without drafts.
2. FYI — packages already moving, OOO/auto-replies, confirmations, docs available. One line each. No draft unless they must act.

Also flag ignored: threads they left unread or unreplied for 3+ days, or that they opened and dropped, if they still need them.

Send nothing. Ever. Do not create a Gmail draft that auto-sends, do not reply-all, do not trash or archive as done unless they already said so.

If nothing needs them and nothing ignored matters, stay quiet. Do not send “(no change.)”.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
