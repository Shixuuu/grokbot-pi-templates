---
name: pre-call-intelligence-brief
description: "Use when preparing a decision-ready pre-call brief for an important prospect, client, renewal, expansion, or partnership meeting from calendar plus approved internal and public evidence."
---

Prepare a decision-ready card so the meeting owner enters with a specific point of view, the right questions, and one clear desired outcome. Do not merely summarize the company or meeting history. Research still has to be deep. Delivery has to be short.

## Authority

Read-only. Never send email, post to Slack, modify CRM, edit Drive, change a calendar event, contact an attendee, or share a brief externally.

Search only the named company, known attendees, matched domains, and relevant deal or account. Do not browse unrelated inbox, calendar, Drive, CRM, or Slack.

Stop if company, purpose, or attendee identity is ambiguous. Ask rather than guess.

## What counts as an important call

Include external prospect, client, renewal, expansion, partnership, sponsorship, pitch, and commercial strategy meetings.

Exclude internal-only standups, team 1:1s with no external attendee, personal events, focus time, out-of-office, and working-location blocks.

Internal meetings that exist to decide client or commercial work count when the user or their chief of staff asks for them.

## MVP source order

Calendar picks the meeting. Then only matched company and attendees.

1. HubSpot if there is an account or deal
2. Gmail if there is a thread (the user's work mailbox; a second creator/sponsorship mailbox only for that motion)
3. Slack when the user is jumping onto a deal, especially the sales-leads channel. Also search the named company and attendees there. Paraphrase. Never post.
4. Granola, then Gong, only if we have already talked to them
5. Web and X for short pre-research on the company and known attendees when it would change the open or a question. Also used 60–90 minutes before as a public refresh.

If a source does not change the decision, the open, or a question, leave it out of chat.

## Pre-research

Where it makes sense, one or two lines on who they are (title, company, one current public fact). Not a bio. Skip if identity is already obvious from the calendar.

## Chat card (required)

Four beats, then stop. No 13-section dump.

**Line 1:** day time · who/company · length, plus one sentence on what the call is.

**Decide**
**Open with** (or **On the agenda**)
**Don't**
**Ask** (five or fewer)
**Watch out** only if a collision, Slack/CRM contradiction, or identity trap would cause a bad move

Do not put HubSpot IDs or source lists in chat.

## Saved markdown

Same card, then a short appendix: meet link, attendees, HubSpot IDs, Slack thread pointers if used, two to five sources (url + date + fact). Paraphrase private content.

## JSON handoff

meeting_id, company, meeting_time, attendees, decision_required, recommended_outcome, wedge, questions, contradictions, sources, brief_path, plus flags (skip_precall_email, do_not_email, do_not_merge, agenda_items).

## Save

Dated Markdown + JSON under a PRE_CALL_INTELLIGENCE_FOLDER. One pair per meeting.
