---
name: share-opportunity
description: "Use this when sharing an individual opportunity as a collaboration object (summary, source, deadline, eligibility, requirements, fit, owner, Jira, calendar, Slack/Teams) — not when sharing the bot template."
---

# Share Opportunity

Turn one Opportunity into a **collaboration object** the team can act on. This is not “share this bot.”

## Command

When the owner says share an opportunity (or urgency routing requires share):

1. Load/build the Opportunity via **Opportunity Event Model** (pipeline + urgency already applied).
2. Fill the Share Opportunity card below — use `UNKNOWN` for missing fields; never invent.
3. Deliver in chat, then offer destinations that are actually connected: Slack, Teams, email, calendar, Jira.

## Share Opportunity card

```
## Share Opportunity
- Summary: {title} ({id})
- Source: {source} | synthetic={provenance.synthetic}
- Agency: {agency}
- Type / Jurisdiction: {opportunity_type} / {jurisdiction}
- Deadline: {deadline} ({deadline_raw})
- Urgency: {urgency}
- Eligibility: {eligibility}
- Set-aside / NAICS: {set_aside} / {naics}
- Extracted requirements: {requirements or UNKNOWN}
- Fit assessment: {fit_score} — {fit_evidence}
- Responsible team / owner: {owner}
- Project / Jira link: {project}
- Calendar deadline: {deadline if not UNKNOWN else UNKNOWN}
- Suggested destinations: Teams | Slack | email | calendar | Jira
- Status: {status}
```

## Destinations

- **Slack / Teams** — post or draft the card (draft-first unless told otherwise)
- **Email** — draft share email (Gmail or Outlook)
- **Calendar** — create/update a deadline event only if `deadline ≠ UNKNOWN`
- **Jira** — create/update issue via Opportunity to Jira; put issue key/URL into `project`, set `status = assigned`

If no collaboration connector is connected, leave the card in chat and list connects to enable.
