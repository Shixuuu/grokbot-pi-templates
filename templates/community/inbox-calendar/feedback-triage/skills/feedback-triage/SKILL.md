---
name: feedback-triage
description: "Use this when classifying customer/support feedback email into bug, feature, or roadmap theme; drafting backlog items; shaping an Approve Inbox batch; or writing a quiet-if-empty triage pulse."
---

# Feedback triage

## Goal
Turn inbound customer/support feedback into classified backlog drafts. Nothing customer-facing and no ticket create/update/close leaves without Approve Inbox yes.

## Scope in
- Support and product feedback email
- App reviews forwarded into mail
- Webform "New contact" (or similar) that is product-shaped
- Unreplied or new threads since the last pulse

## Scope out
- Pure BD / sales spam and partnership cold outreach with no product signal
- Deep code investigation (hand off to a coding agent)
- Sending customer replies or creating tickets without Approve Inbox

## Labels
Primary (pick one):
- `bug` — something broken or incorrect behavior
- `feature` — a concrete capability ask
- `roadmap-theme` — a recurring wish or strategic theme, not a single shippable ask

Optional when clear from the mail:
- Severity: blocker | high | medium | low
- Priority: P0–P3 or equivalent the team already uses

## Citation rule
Never invent quotes or volumes. Every summary cites:
- Subject
- Sender
- Date (user-local)
- Short gist from the actual message

## Classification rubric
1. Read the thread (latest meaningful customer message + needed context).
2. Decide primary label using the definitions above.
3. If multiple customers echo the same ask, prefer `roadmap-theme` and list the cited threads.
4. If unclear, draft as the closest label and flag `needs-human` in the Approve Inbox item.

## Approve Inbox item shape
For each candidate, draft one item:

```
Title: <short ticket-shaped title>
Label: bug | feature | roadmap-theme
Severity/Priority: <if clear, else omit>
Cite: <subject> · <sender> · <date>
Gist: <1–3 sentences from the mail, no invented quotes>
Proposed sink: github-issue | markdown-backlog | jira
Draft body: <repro/ask, expected vs actual if bug, acceptance sketch if feature>
Customer reply draft: <optional; only if a reply is warranted>
Action: create | update | close | reply-only
```

Batch the day's items under one Approve Inbox header. Wait for explicit yes per item (or per batch if the user says so) before any outside write.

## Sinks
Default order:
1. **GitHub issues** in the configured product repo (or dedicated backlog repo)
2. **Markdown backlog** file in a product repo when issues are not the sink
3. **Jira** when a Jira connector is connected and the user prefers it

Until the user names a default repo/project, keep drafts in Approve Inbox only.

When creating after approval:
- Title and body from the approved draft
- Link or cite the source email in the ticket body
- Do not paste secrets from mail into public tickets

## Pulse report shape
Weekday pulse (or on-demand):

```
Feedback triage · <date>
New/unreplied scanned: <n>
Drafted for Approve Inbox: <n>
By label: bug <n> · feature <n> · roadmap-theme <n>
Skipped (BD/spam/other): <n>
Notes: <optional theme rollup for Chief of Staff>
```

**Quiet if empty:** if there is nothing new or unreplied that qualifies, send nothing.

## Theme rollups
When asked (often by Chief of Staff for a weekly close), aggregate approved and pending themes with counts only from cited threads — never invent volumes.

## Handoff
If triage needs code reading, stack traces, or a fix, write a HANDOFF for a coding agent. Stay on classification, drafting, and Approve Inbox.
