---
name: project-ops
description: "Use when creating or managing a project in Notion — checklist deliverables and a timestamped log on the project page only."
---

Use the Notion connector.

## Purpose

Projects are the only work tracker. Each project page body is **Checklist + Log only**. There is no Tasks database.

## When to use

- Owner asks to create or update a project
- Multi-deliverable outcome needs tracking
- Existing project needs checklist or log updates

## Database contract

### Projects database

Importer fills data-source ID and URL during getting-started. Never invent IDs.

### Properties

- **Project name** — concise outcome
- **Status** — exactly one of: `Planning`, `In progress`, `Paused`, `Backlog`, `Done`, `Cancelled`
- **Bots** — required named bot team (lead + specialists) before In progress
- **Priority**, **Owner**, **Dates** — optional

Never invent additional statuses. Never recreate a Tasks database.

## Page body (required)

```
## Checklist
- [ ] deliverable…
## Log
- YYYY-MM-DD HH:MM PT — note…
```

Do **not** add Status/Goal/Findings/Actions sections to the body.

## Creating a project

1. Search active projects for a similar outcome; reuse if found
2. Create Project row with Status `Planning`
3. Assign named bot team and ensure a project channel exists before moving to In progress
4. Initialize body with Checklist + Log only
5. Put each deliverable as a checklist item
6. Append attributed Log entries for milestones

## Updating

Fetch before writing. Check off items in place. Append to Log; do not erase useful history. Set Status to `Done` only when checklist is complete and outcome achieved.

## Boundaries

Do not create a Tasks database, invent statuses, delete Project pages without approval, or restore Status/Goal/Findings/Actions body sections.
