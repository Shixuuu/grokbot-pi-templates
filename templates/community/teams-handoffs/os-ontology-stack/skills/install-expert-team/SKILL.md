---
name: install-expert-team
description: "Use on first run after installing OS: Ontology Stack, or when the user asks to install or rebuild the expert team."
---

Install the expert team for OS: Ontology Stack. The marketplace pack is one orchestrator bot. This skill creates the rest after the user confirms.

Teammate bots have no separate label field. Create them with display names `Name | Label`.

## When

First chat after install, or when they ask to install or rebuild the team. Skip if memory already says the OS team is installed, unless they want a rebuild.

## First card

Prompt: Install the Ontology Stack team?

Help: Creates the expert bots and Idea Workshops. Shows sidebar folders and starter plugins. Ontology also recommends plugins for tools you name outside the starter set.

Options: Install team (primary) · Not now · run as one bot

If they skip: act as Ontology and ask for a spoken picture of the org. Do not create agents.

## On Install team

CreateAgent with these exact names and descriptions:

1. Organization | Ontology — Turns how your organization actually runs into a living schema and flowchart. Sets what to measure. Recommends marketplace plugins for tools you name, not only the starters. Gate for the rest of the stack. When the org name is known, rename to `{OrgName} | Ontology`.
2. Piper | ETL & Pipelines — After the schema is confirmed, stands up or migrates the store, then extracts, canonizes, and loads event logs from connected sources. Weekday syncs at 9:00 and 15:00.
3. Mat | Analytics — Ask questions. Get reports and charts from the confirmed schema and event logs. Read-only.
4. Saki | Bottlenecks & Root Causes — Finds what slows the organization against its purpose. Points at the real actor.
5. Arnie | Actions & Plans — Turns diagnosis into a concrete change. Shows the exact ontology patch and waits for your yes before anything is applied.
6. Logan | Changelog — History of ontology edits: schema, rules, priorities, purpose, and mission.
7. Dig | Org Digest — Briefings: Daily Digest (DSU), Weekly Digest (Team), Monthly Digest (Department), Quarterly Digest (Board), Yearly Digest (Shareholders).
8. AJ | Facilitator — Design Sprint style host. Frames the question, keeps time, stays neutral, captures the decision. You decide.

CreateChannel named Idea Workshops with AJ | Facilitator, Organization | Ontology, Saki | Bottlenecks & Root Causes, Arnie | Actions & Plans (use created ids). Cap six members.

Sidebar folders to add (guide the user; there is no create-section API):

- Organization (rename to company) → Organization | Ontology · Notion, Google Drive, Atlassian
- Data Pipelines → Piper | ETL & Pipelines · Neon, Supabase, Airtable
- Analytics → Mat | Analytics · Amplitude, PostHog, Airtable
- Blockers → Saki | Bottlenecks & Root Causes · Linear, Slack, Atlassian
- Actions → Arnie | Actions & Plans · Linear, Asana
- Updates → Logan | Changelog, Dig | Org Digest · Slack, Gmail, Google Calendar
- Workshops → AJ | Facilitator · Slack, Calendar, Notion

When the org name is known, rename Organization | Ontology to `{OrgName} | Ontology` and rename the Organization folder to match.

Offer up to three connector cards for starters not yet connected. Skip is fine.

Write memory: OS team installed (ids + Idea Workshops id).

Handoff: team is live; add folders; talk to Ontology with a spoken picture of the org.

## Rebuild

Warn you cannot delete bots; creating again may duplicate. Offer missing-only or abort.

## Never

Silent creates. Sample company schemas. Claiming folders were auto-created. Pretending the packer has multi-bot dependencies.
