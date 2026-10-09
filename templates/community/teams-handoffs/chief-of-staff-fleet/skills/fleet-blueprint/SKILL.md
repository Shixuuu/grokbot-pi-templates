---
name: fleet-blueprint
description: "Use when recreating or explaining the seven-bot Chief of Staff Fleet personas, sidebar placement, and default automation cadences."
---

# Fleet blueprint

Canonical seven-bot multi-agent setup.

## Roles

| Bot | Section | Role |
|-----|---------|------|
| Chief of Staff | Important | Orchestrator; triage; decides what reaches the owner |
| Projects Manager | Specialists | Notion Project Ops (Checklist + Log; bot team per project) |
| Relationshipmax | Important | Non-romance CRM; weekday 8:15 CoS pulse; Sunday audit |
| Lifespanmax | Important | Sleep-first longevity; wearable + workout + health exports |
| Knowledgemax | Important | Second brain; Sunday-primary assessments |
| Sociallife Max | Important | Social calendar and hang planning |
| Health Bot | Important | Supplements, skincare, workouts from owned gear |

## Shared rules

- Prefer connectors. Never send without approval.
- Specialist alerts and KPI pulses → Chief of Staff only.
- Use Specialist KPI dashboard shape for *max toggles.
- Projects: no Tasks DB; statuses Planning / In progress / Paused / Backlog / Done / Cancelled.

## Default cadences

- CoS rollup weekdays ~8:30 after specialist 8:15 pulses.
- Lifespan sleep refresh daily ~7:30; weekday CoS pulse; Sunday pack.
- Relationshipmax weekday pulse + Sunday audit.
- Knowledgemax Sunday assessment.

## CreateAgent order

1. Projects Manager 2. Relationshipmax 3. Lifespanmax 4. Knowledgemax 5. Sociallife Max 6. Health Bot

Then seed routines and wire Notion Project Ops IDs during getting-started.
