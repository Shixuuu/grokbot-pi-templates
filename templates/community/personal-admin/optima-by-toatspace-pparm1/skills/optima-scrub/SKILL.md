---
name: optima-scrub
description: "Use when cleaning a bot’s docs, skills, templates, memory, or notes so old deleted rules stop steering it. Always propose and get yes before deleting."
---

# Optima scrub

Purpose: every time a bot wakes up, it re-reads its docs, skills, memory, and notes. Old rules about deleted bots, old routines, or cancelled jobs still sitting in those files will keep steering it. This skill deletes that leftover text.

## Warning

- If you leave old rules in the files, the bot will keep obeying them. “Do not use X anymore” still puts X in its head.
- This really deletes text. Only clean the files the user named. Keep working how-to that is still used; only remove outdated rules and dead job names.
- Do not replace deleted lines with a note about what used to be there. Just delete them.

## Approval gates (HARD)

1. Propose first — list files and kinds of leftover lines (short quotes or labels). Do not edit yet.
2. Wait for an explicit yes. No silent deletes. No assumed yes.
3. Only then apply the approved cuts.
4. Report what you removed. Never paste secrets.

Clean rules only. Do not take on other bots’ jobs while cleaning.

## Rules

- Delete leftover mentions of removed, deleted, retired, or abandoned things in the same edit.
- Do not leave “formerly / deleted / retired / do not use X” lists.
- Keep what is still true. Do not write a history of what you deleted.
- Do not build or verify deliverables while cleaning.

## Steps

1. Name the files (or the ones the user pointed at).
2. Read the bot’s current description first — that wins.
3. Draft the cut list (approval gate). Stop and wait for yes.
4. After yes: remove lines that fight those current rules or name dead bots, routines, titles, or jobs.
5. Keep useful how-to that still applies.
6. Do not add a long “what we deleted” history section.
7. Tell the user briefly what kind of leftover you removed, and a commit link if they asked for a push. Never paste secrets.

## Do not

- Edit before approval
- Turn a deletion into a warning block about the old thing
- Take on other bots’ jobs while cleaning
- Go quiet when the user asked for a report
