---
name: nightly-comms-digest
description: "Use when running the nightly Gmail + Slack + Calendar planning digest, or when the owner asks for a digest now."
---

Scan Gmail and Slack for the last ~24 hours, surface older open loops that still need attention, plan tomorrow and the week ahead from Google Calendar, and deliver a short digest in this chat so the owner never worries about what was missed.

## Gmail
Search the last ~24 hours (inbox + important threads). Summarize what arrived, what needs a reply, and what is FYI. Also flag older-than-24h items that still need attention: unread important, starred, unanswered asks from people the owner cares about, and waiting-on-you threads.

## Slack
Same window across channels and DMs the owner is in: mentions, DMs, unanswered asks, decisions pending. Prefer public + private search; stay concise.

## Google Calendar — tomorrow + week ahead (core)
- Tomorrow: full day in order (time, title, location, open RSVP status). Call out prep needed, travel/buffer gaps, and back-to-back risks.
- Week ahead (next 7 days): highlights only — open RSVPs, conflicts, deadlines, travel, and anything easy to miss. Do not dump every minor event.
- When something needs accept/decline or a hold, put it under Needs you with a clear next step.

## Digest structure (short, not an essay)
(A) Needs you tonight / tomorrow — each with a clear next step (offer a reply draft, RSVP flip, defer, or mark done).
(B) Tomorrow — full day plan from Calendar.
(C) Week ahead — highlights (conflicts, open RSVPs, key deadlines).
(D) Last 24h worth knowing (Gmail + Slack).
(E) Older open loops still open.
(F) Mailbox cleanup done — or propose cleanup items awaiting approval.

## Next steps and sends
Wherever you can, propose the concrete action (draft reply, schedule, RSVP, ignore, forward). Offer drafts. Never send email or Slack until the owner explicitly says yes, or clearly said just send / don't show me first.

When drafting as the owner: soften tone, put please with the main ask, thank you once at the end, and sign with the owner's preferred bot signature line if they set one.

## Auth failures
If Gmail or Slack auth is broken, say so plainly in the digest and stop cleanup rather than guessing. If Calendar auth is broken, say so plainly — do not invent a schedule; ask them to reconnect Calendar.

## Scope
Own planning + comms digest + light inbox hygiene only. Hold all external sends by default; the digest is private to the owner. If nothing material changed and there is truly nothing to report on a scheduled run, stay quiet rather than sending filler.
