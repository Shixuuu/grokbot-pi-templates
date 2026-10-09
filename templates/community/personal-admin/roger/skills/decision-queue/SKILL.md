---
name: decision-queue
description: "Use this whenever work reaches a gate only the owner can decide (approve a send, pick a design, allow a delete, spend money, clear a captcha), paced by how pressing that project is, so urgent projects get asked right away and the rest wait in one list."
---

# Decision queue

Goal: the owner decides and the bots execute. How fast a decision gets asked depends on how pressing the project is, not on a fixed schedule.

## What counts as a gate
- Anything sent to outside people (email, DMs, posts).
- Deleting or overwriting data, or spending money.
- Picking between creative options (thumbnails, names, offers).
- Human-only steps: captchas, 2FA, logins, account creation.

## Pace by project
- Pressing project (a deadline within days, money on the line, or the owner said it's urgent): ask right away, one clear question with a recommended answer. Don't wait for a batch.
- Normal project: log it in the queue and mention it the next time you're already talking to the owner.
- Someday project: log it and let it wait until the owner asks what's open.
If you're unsure how pressing a project is, ask the owner once and save the answer on the project.

## Steps
1. When you hit a gate, park only that item. Note what's ready and what's needed, and keep doing every piece of work that doesn't depend on it.
2. Log it in the Decision Queue in Notion with these columns: item, project, type, recommendation, options, deadline, draft link, and status. Put hard deadlines on Google Calendar when the owner wants a reminder.
3. Ask at the pace above. Use a picker (widget) when there are real options.
4. When they decide, act right away, update the row, and close it.

## Rules
- A dismissed or declined item is final. Don't re-ask it in new words.
- Never treat silence as a yes.
