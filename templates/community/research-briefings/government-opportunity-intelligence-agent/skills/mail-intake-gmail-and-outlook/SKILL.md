---
name: mail-intake-gmail-and-outlook
description: "Use this when ingesting live opportunity notices from Gmail and/or Microsoft Outlook with the same classification and extraction pipeline."
---

# Mail Intake Gmail and Outlook

Use this for live notice intake from connected mail.

## Sources

- **Gmail** — search/read government-notice-like messages
- **Outlook** — same abilities on Microsoft Outlook mail when connected

Treat both as intake only. Run **Opportunity Pipeline** + **Deadline Urgency Alerts** on candidates. Never invent fields.

## Candidate heuristics

Subject/body hints: NOFO, SBIR, STTR, RFI, solicitation, grants.gov, SAM.gov forward, funding opportunity, set-aside, NAICS, proposal due.

## Rules

- Label each row’s source (Gmail / Outlook / synthetic).
- If neither mail connector is connected, use Synthetic Inbox Demo.
- Do not paste credentials; use in-place connect cards.
- Sharing or filing is a separate step (**Share Opportunity** / **Opportunity to Jira** / **Collaboration Adapters**).
