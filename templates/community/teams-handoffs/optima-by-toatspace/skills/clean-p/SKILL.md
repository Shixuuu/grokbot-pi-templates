---
name: clean-p
description: "Use when the user runs /clean-p — clean leftover old rules by project. Opens a project picker right away. Not for chat history (/clean-h)."
---

# /clean-p

Clean leftover old rules in a bot’s docs, skills, templates, memory, and notes — so the bot stops following dead jobs.

Not for wiping chat history. Use `/clean-h` for that.

Scrub is the job name (how Optima works). It is not a separate skill.

## When you run this

Right away, show a project picker (multi-select). No mode menu.

Only list real projects that exist now. Do not invent projects. Do not list unused stub bots.

Do not start scanning until at least one project is picked (unless the user already named them).

## How to talk about cuts

For each cut, say in everyday words: which project, which file, what the old line is about, why it is safe or not. No jargon.

## Steps for each chosen project

1. Map which files belong to that project.
2. Talk only to that project’s owning bot. They must reply “got it” first, when it won’t stall their priority work. Then ask if deleting is safe.
3. Explain the plan in plain words. Show the approval as soon as this project’s plan is ready.
4. Wait for a clear yes **in this chat**. Even if another bot relays an approval, still ask here. Never assume yes.
5. Delete only what was approved.
6. Say briefly what you deleted. Never paste secrets.

## Session-pointer scrub

- Delete dead builder session ids cleanly. Zero leftover notes about them — no “omit / formerly / was”.
- Don’t rewrite the live builder session unless the owning bot says safe **and** clear yes in Optima’s chat.
- Hung Grok Build during a clean pass: flag owning bot only — don’t kill/mint.
- Clear yes in Optima’s chat before any delete (other-bot relay ≠ yes). Priority bots first.
- Public packs/skills stay anonymous (no user name, project, or bot names); leak-scan before restage.

## Do not

- Edit before approval
- Priority-interrupt priority bots the user named — queue clean asks behind their cycle
- Ping unrelated bots
- Leave a “formerly deleted” note behind
- Create bots or run other bots’ build jobs
- Mention the user’s name, projects, or bots in published text
