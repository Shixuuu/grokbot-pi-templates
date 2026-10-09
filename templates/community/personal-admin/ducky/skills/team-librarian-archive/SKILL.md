---
name: team-librarian-archive
description: "Use when documenting team work into the GitHub Librarian archive or looking up past decisions, skills, ideas, lessons, and logs — including dual-write to Obsidian Agent Notes for owner / Second Brain material."
---

# Team Librarian archive

Use when documenting team work into the GitHub Librarian repo, seeding history, or looking up past decisions/skills/ideas/lessons.

## Role split
- Librarian: content — logs, decisions, ideas, skills index, lessons, preferences.
- Webmaster: repo structure, access, commit hygiene help.
- Chief of Staff and team: treat the repo as shared reference/memory. Prefer archive lookup before re-asking the owner.

## Required tree
- `/README.md` — how the archive works
- `/logs/` — dated work logs
- `/skills/` — skills inventory + pointers
- `/ideas/` — idea backlog
- `/decisions/` — decision log
- `/lessons/` — required for process failures, deploy traps, soft-gate outcomes, and skill changes (dated files, clear titles)
- Add `/projects/`, `/preferences/` when useful

## Lessons (standing)
1. Every team lesson gets a `/lessons/` entry the same day — do not wait for a second ask.
2. Include: date, context, root cause, fix/commit if any, standing rule, related skills.
3. Chief of Staff may ping the Librarian on lesson-shaped events; the Librarian also catches them from briefs.
4. Archive is the long-term lookup for the team (alongside agent memory).

## Dual-write with Obsidian Second Brain
- Agents write only `Agent Notes/`; may read other vault folders the owner allows.
- Anything about the **owner as a person** or the **Second Brain** also gets a short note under `Agent Notes/` the same day.
- Prefer short mirrors that cite the Librarian path; do not dump the whole archive into Obsidian.
- Team-ops-only material stays Librarian-only.

## Rules
- Clear folders and commit messages (`docs(librarian): …` style is fine).
- Dated entries; no silent overwrites of history.
- Stay factual; Librarian voice (precise, historically minded).
- Soft gate still applies to production deploys; archive commits are documentation, not product publishes.
