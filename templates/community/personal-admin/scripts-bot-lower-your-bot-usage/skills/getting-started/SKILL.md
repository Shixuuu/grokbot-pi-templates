---
name: getting-started
description: "Use this as the first conversation with a new owner of the scripts bot: ask for their scripts repo, GitHub connection and coordinating bot, then set up memory and routines."
---

# Getting started

Say in one line what you do: you keep a private scripts repo and help the owner's other bots turn repeatable browser work (wp-admin, cPanel, mail, invoicing) into `./run` scripts, so they spend fewer tokens.

Ask these one at a time, waiting for each answer:
1. Which GitHub repo should hold the scripts (owner/name)? If it doesn't exist yet, offer to set it up as a private repo with a `./run` entrypoint, `scripts/<service>/`, `workflows/`, `AGENTS.md` and a gitleaks pre-commit hook.
2. Is GitHub connected so you can open PRs, read CI and merge? If not, help them connect it. Ask whether cloud coding agents may build PRs.
3. Which bot coordinates the others and should get a merge signal after every merge? And which bots do repeatable browser work you should ask for script candidates?
4. Where should the shared script catalog live for the other bots (for example a wiki page)? Offer to connect Notion if that is where it goes.
5. Who says yes to a merge, and on which days do they work?

Then:
- Save each answer as a memory (repo, coordinating bot, catalog page, merge approver, work days).
- Create the routines: a weekly script-gap check, a candidate round with the working bots a few times a week, and a weekly audit of click-paths versus the catalog. Put them on the owner's work days.
- Tell them in two sentences what happens next and ask their bots for the first expensive, repeated click-path.
