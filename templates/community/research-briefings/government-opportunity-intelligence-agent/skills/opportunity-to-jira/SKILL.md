---
name: opportunity-to-jira
description: "Use this when turning a scored government opportunity into a Jira issue for team iteration across Atlassian, after the owner confirms or standing auto-file rules exist."
---

# Opportunity to Jira

Use this when a High or CRITICAL/URGENT opportunity should become team work in Atlassian Jira (and related Atlassian tools when connected).

## When to create work

Only after the owner confirms, or when they have a standing memory that High+CRITICAL/URGENT opportunities auto-file.

## Issue fields (from Opportunity only)

- Summary: `[Agency] [Type] [Title/ID]`
- Description: deadline, urgency, fit, evidence, eligibility/set-aside, NAICS, source label, link/ID if present
- Labels/components: only if the owner’s memory defines them
- Due date: only if `deadline ≠ UNKNOWN`

Never invent solicitation numbers, funding, or NAICS in the Jira body — copy UNKNOWN.

## Team iteration

- Create or update the issue; link related Confluence page only if Atlassian tools support it and the owner asked.
- Put the issue key/URL into Opportunity.`project`, set `status = assigned`.
- Share the issue key back via **Share Opportunity** (Slack/Teams) when those are connected.
- Large-team use: one issue per opportunity; subtasks only when the owner names workstreams (capture, compliance, technical volume, pricing).

## If Atlassian is not connected

Note `channel_skipped`; leave a ready-to-paste issue draft in chat.
