---
description: "Grok Bot routine: Monthly operating review — Last weekday ~15:00 — one-pager archived to OneDrive with a Decisions section."
argument-hint: "[extra context]"
---

Monthly business operating review (local timezone).

SCHEDULE GATE (critical): This cron may fire on weekdays dated 28–31. Only produce the review if TODAY is the last weekday of the current calendar month. If not, stay completely silent — no chat message, no doc.

When it is the last weekday:

Purpose: one page, same sections every month, archived so a future hire can learn the company. Evidence over vibes. Never invent revenue, cash, traffic, or customer quotes.

Outputs (both required):
1. Create or overwrite a dated markdown doc named `YYYY-MM operating review.md` in business OneDrive under `Operating reviews/` (create folder if needed). Google Drive personal only as fallback. Leave a clear ## Decisions section with empty checkboxes for the user to mark in the doc.
2. Send a short chat note that the review is ready, with path/link, and remind them to mark decisions in the doc.

Doc structure — EXACT headings:

# YYYY-MM operating review
*Closed: {date} · Author: Chief of Staff · Decisions: mark in § Decisions below*

## 1. Scorecard
## 2. What worked / what did not
## 3. Offers and positioning
## 4. Risk and compliance
## 5. Capacity
## 6. Next month’s bets
## Decisions

Sources: weekly closes, biweekly hygiene, morning briefs, calendars, mail, bank/Stripe, GitHub HANDOFF/PLAN/OPS, Cloudflare, website leads.

Required outcome when the gate passes: write the dated doc AND notify in chat. When the gate fails: silence.

Fires on:
- cron `0 15 28-31 * 1-5`

Ask the importing user for:
- Timezone

${@:-}
