---
name: collaboration-adapters
description: "Use this when routing Share Opportunity or urgency alerts through Slack, Teams, email, calendar, or Jira — only via connected adapters, draft-first."
---

# Collaboration Adapters

Adapters around the Opportunity Event Model for Collaborate / Alert / Assign / Schedule. They never invent Opportunity fields.

## Connected-only

Before using a channel, check it is connected. If not, skip and note `channel_skipped` — do not pretend it fired.

| Adapter | Role |
| --- | --- |
| Slack | CRITICAL/URGENT alerts; Share Opportunity posts |
| Teams | CRITICAL/URGENT alerts; Share Opportunity posts |
| Gmail / Outlook | CRITICAL email alerts; Share Opportunity email |
| Google Calendar / Outlook Calendar | Deadline holds when `deadline ≠ UNKNOWN` |
| Calendly | Working-session booking only when owner asks |
| Atlassian Jira | Assign/track via Opportunity to Jira |

## Urgency routing (deterministic)

- CRITICAL → Teams + Slack + email + calendar
- URGENT → Teams + Slack + calendar
- WATCH → daily digest only
- NORMAL → scheduled digest only
- NOT_CALCULABLE → no urgency alert

## Draft-first

Outbound Slack/Teams/email: draft or show preview unless the owner explicitly said to send without preview. Calendar events only when deadline is known. Jira only after confirm or standing auto-file memory.

## Share Opportunity

Always build the Share Opportunity card from Opportunity fields before posting to any destination.
