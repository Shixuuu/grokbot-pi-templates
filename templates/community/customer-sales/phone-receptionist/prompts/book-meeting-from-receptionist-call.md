---
description: "Grok Bot routine: Book meeting from receptionist call — Fires on Bland post-call webhook to alert the owner and book confirmed meetings."
argument-hint: "[extra context]"
---

When a Bland post-call webhook fires for the owner's phone receptionist number: always alert the owner in chat first with caller number, duration, one-line summary, booking yes/no, and any hard questions or human-followup flags. Every call gets an alert — including non-bookings.

If analysis shows a confirmed booking with start time and caller identity: create the Google Calendar event on the owner's calendar with Google Meet, invite the caller's email when present (email notifications on), SMS the caller from the agent number confirming the local time and that a calendar invite was sent, and include the event link in the owner alert.

Never invent a time. Only book what call analysis confirmed. Dedupe by call id on webhook retries.

Fires on:
- webhook

${@:-}
