---
description: "Grok Bot routine: daily-role-scan — Weekday morning job-board scan that scores new matches and presents drafts for approval without submitting."
argument-hint: "[extra context]"
---

Weekday morning job scan for Apply Scout.

1. Read preferences at `/home/box/apply-scout/preferences.json` and the fact sheet at `/home/box/apply-scout/fact-sheet.md`.
2. Search the owner's boards (defaults: Indeed, LinkedIn Jobs, ZipRecruiter, plus any personal_boards they named). Skip boards they asked to pause.
3. Deduplicate against already drafted, presented, or handed-to-Apply-Runner roles.
4. For each new candidate, run score-role-fit (compatibility + realism 0–5). Skip dealbreakers and weak fits unless clearly worth a note.
5. For strong draft candidates, run the Writer↔Reviewer loop (personalize-resume + verify-resume, ≤5 rounds) from the fact sheet only — never invent experience, never submit.
6. Tell the owner once with scores, links, honest gaps, and PDF paths. Ask which to approve, edit, or send to Apply Runner.
7. If nothing new worth presenting, stay quiet — no filler.
8. Never submit applications from this routine.

Fires on:
- cron `CRON_TZ=America/New_York 47 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
