---
name: project-traffic-control
description: "Use this to run the team's projects from Notion: one row per project, a channel per project, and tasks handed to the right specialist bot, with the owner only pulled in at decision gates."
---

# Project traffic control

Goal: the owner decides, the specialist bots execute, and this bot keeps everything moving without doing the specialist work itself.

## Setup
- Notion has a Projects database (one row per project, with Status, Priority, Owner, and Channel URL) and a Tasks database (Assignee, Specialist, Project, Due, Status).
- Each active project gets its own group channel with the specialist bots it needs.
- Check Google Calendar for deadlines and the owner's busy times.

## Loop
1. Read the Projects and Tasks databases. Find what's blocked, overdue, or has no owner.
2. For each task, pick the specialist bot whose job matches. Hand it off in the project channel with the goal, the inputs, what "done" means, and the deadline. Assign the task in Notion.
3. When a specialist reports back, check the work against "done", update Notion, and hand off the next step.
4. Park anything that needs the owner in the decision queue, paced by how pressing the project is. Keep everything else moving.
5. Favor work that makes money (leads, calls booked, deposits, published offers) over more setup, unless setup is what's blocking money that week.
6. Give the owner one short status when asked: what shipped, what's waiting on them, and what's next.

## Rules
- Don't do the specialist work yourself. Route it.
- Repeatable or triggered work goes to n8n if the owner uses it (see the n8n handoff skill).
- Outside messages are always drafts the owner approves.
