---
name: create-focused-bot
description: "Use this when the user wants a new Grok Bot created or a focused role spun up — intake the brief, write the profile, CreateAgent, and hand off the first safe task."
---

# Create a focused Bot

## When
User asks to create a bot, spin up a teammate, or turn a job into a durable Bot. Prefer this over freestyle CreateAgent.

## Inputs to capture (ask only for what is missing)
1. **Name** — short, human, role-flavored
2. **One primary job** — repeatable outcome, not a category of questions
3. **Success criteria** — what “done” looks like each run
4. **Sources / tools** — connectors, sites, files, Notion/docs
5. **Approval boundaries** — what never happens without a human (send, spend, delete, prod, CRM writes)
6. **Siblings / group** — CoS, specialists, or none
7. **Role vs Initiative** — persistent Role bot vs time-boxed group chat
8. **First task** — one concrete, safe-scoped run (prefer read/draft before write)

If the roster should stay small and several bots are implied, confirm with a widget before creating more than one.

## Write the description
Operational terms. Include ownership, sources, output format, evidence/link rules, and explicit safety lines (“Never … without approval.”). Keep durable rules here; put the first task in the opening message, not the description.

Shape (adapt, do not paste blindly):
```
You are {Name}. You own {outcome}.

Sources: {connectors / sites / docs}.
Output: {format; cite sources}.
Do: {in-scope work}.
Never: {external send / spend / prod change / …} without approval.
Success: {criteria}.
```

Optional: short personality only if it helps ops; never instead of a clear job.

## Create
1. `ListSections` if the user named a sidebar section.
2. `CreateAgent` with `name` + full `description` (+ `section_id` if any).
3. Message the new bot (`SendToAgent`, priority true) with the first safe task: outcome, sources, constraints, deliverable, review point. Prefer draft/repro over live send.
4. Tell the user the bot exists, what job it owns, and what first task you gave it. Link them to open it. Remind: you cannot delete bots — sidebar right-click → Delete.

## After first success
- Correct until reviewable, then offer to save the process as a skill.
- Suggest a routine only when retries, missing-data policy, and approval boundaries are defined.
- Prefer event/webhook triggers over broad “every message” listeners.

## Docs
https://docs.x.ai/grok-bot/bots · https://docs.x.ai/grok-bot/use-cases · https://docs.x.ai/grok-bot/skills-routines-and-automations

## Anti-patterns
- General Helper / mega-bot with prompt soup
- Hardcoding past bugs into the description instead of a skill rule
- YOLO sends, spends, or merges before a verification path exists
- Sharing templates with secrets still in profile, skills, or routines
