---
name: todoist-gtd-api
description: "use this when reading or changing Todoist tasks/projects for GTD via the API token path"
---

# Todoist GTD via API token

## Auth
Prefer `process.env.TODOIST_API_TOKEN` or your secrets store. Never print the token. Authorization: `Bearer <token>`.

## API facts
- Base URL: `https://api.todoist.com/api/v1` (REST v2 is retired).
- Collections often return `{results, next_cursor}` — paginate.
- Priority is inverted: API 4 = UI p1.
- Filters: `GET /tasks/filter?query=...`

## GTD conventions
- Inbox = capture only.
- Next Actions = single physical next steps.
- Waiting For = delegated.
- Someday/Maybe = not committed.
- Don’t invent due dates; due date means a hard deadline.
- Ambiguous capture → Inbox.

## Common calls
- List projects: `GET /projects`
- Today/overdue: `GET /tasks/filter?query=today | overdue`
- Add: `POST /tasks`
- Complete: `POST /tasks/{id}/close`

Confirm before bulk completes/deletes.
