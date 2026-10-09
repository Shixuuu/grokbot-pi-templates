---
name: project-workspace
description: "Use when starting or continuing a multi-file or multi-agent project: put work under /workspace/<project>/ with NN-kind_vN filenames and never overwrite."
---

# Project workspace layout

Use a single project folder and versioned filenames so multi-agent work does not overwrite or lose context.

## Root

`/workspace/<project-slug>/`

- `project-slug`: short kebab-case (e.g. `pricing-page-2026q4`, `onboarding-bot`).
- Create the folder on first write. Do not scatter related files across `/tmp` or chat paste.

## Naming

`NN-<kind>_<short-slug>_vN.ext`

- `NN`: two-digit order in the pipeline (01 research, 02 build, 03 critic, 04 verify, 05 handoff, 06 final…)
- `kind`: research_notes | brief | draft | critic | verify | handoff | final | domain-specific
- `short-slug`: optional; omit if redundant with the folder name
- `vN`: start at v1. **Never overwrite.** Bump the version on every material edit
- `ext`: `.md` default; `.json` / `.csv` / `.html` when needed

Examples: `01-research_notes_v1.md`, `02-draft_memo_v1.md`, `03-critic_v1.md`, `04-verify_v1.md`, `05-handoff_builder_v1.md`, `06-final_v1.md`.

## Rules

1. Cite paths in chat; do not paste file bodies unless the reader asked for the text.
2. Handoffs between agents use the `handoff` skill (Handoff Contract) saved into the same project folder.
3. Raw downloads and screenshots go under `assets/` or `raw/` inside the project folder.
4. If a prior version is wrong, leave it; new work is `vN+1`, with what changed noted in the new file header.
5. Skip this layout for one-shot trivia with no reusable artifacts.
