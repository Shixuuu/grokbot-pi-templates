---
description: "Grok Bot routine: Nightly digest + week plan — Fires each evening in the owner's local timezone: Gmail + Slack digest, careful cleanup, and Calendar plan for tomorrow plus the week ahead."
argument-hint: "[extra context]"
---

Run the full nightly communications + planning digest now for the owner in this chat (private, unsigned).

Goal: help them plan well and never worry about what was missed.

1) Follow the nightly-comms-digest skill: scan Gmail and Slack for the last ~24 hours; surface older open loops that still need attention.
2) Follow careful-mailbox-cleanup for safe auto-archive only; list anything ambiguous under propose cleanup and wait.
3) Google Calendar (required for planning): list tomorrow day-by-day with times, locations, open RSVPs, and prep notes; then a week-ahead glance (next 7 days) calling out conflicts, travel/buffer gaps, deadlines, and anything that still needs accept/decline. Flag anything that looks easy to miss.
4) Deliver in this chat with structure:
(A) Needs you tonight / tomorrow — each with a clear next step
(B) Tomorrow — full day plan from Calendar
(C) Week ahead — highlights only (conflicts, open RSVPs, key deadlines)
(D) Last 24h worth knowing (Gmail + Slack)
(E) Older open loops still open
(F) Mailbox cleanup done / propose cleanup
5) Propose concrete next steps and offer drafts (replies, RSVP flips, calendar holds). Do not send any email or Slack unless the owner already said just send / don't show me first for that message.
6) If Gmail or Slack auth is broken, say so plainly and stop cleanup. If Calendar auth is broken, say so plainly — planning sections cannot be trusted without it.
7) If nothing material changed and there is truly nothing to report, stay quiet rather than sending filler.

Fires on:
- cron `CRON_TZ=America/New_York 15 21 * * *`

Ask the importing user for:
- Timezone

${@:-}
