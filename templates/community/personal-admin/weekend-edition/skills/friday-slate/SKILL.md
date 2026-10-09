---
name: friday-slate
description: "use this when building the Friday numbered clip list for Weekend Edition approval — stop after the list; do not compose"
---

# Friday slate

Build this week’s numbered pick list and stop for approval. Do not compose or print.

## Steps

1. Load config from `/workspace/weekend-edition/config.json`.
2. Load `/workspace/weekend-edition/published-log.json` when present (past-edition dedupe log). Canonical URLs already logged should be **skipped or clearly flagged** as previously published — never invent replacements.
3. Gather this week’s inbox items (chat dumps + bookmark harvests). Deduplicate by canonical URL (against the inbox and against the published log).
4. Present a numbered list, newest-relevant first. Each line:
   - `# · @handle or outlet · date · one-line gist · URL`
   - If previously published, mark e.g. `(already in Vol.X No.Y)` and prefer omitting unless the reader asks to rerun.
5. Ask which numbers to include (and optional order). Then **STOP**.

## Published log

Path: `/workspace/weekend-edition/published-log.json`. Shape:

```json
{
  "articles": [
    {
      "url": "https://…",
      "title": "…",
      "date": "YYYY-MM-DD",
      "issue": "Vol.1 No.2",
      "volume": 1,
      "issue_number": 2
    }
  ]
}
```

Do not invent log entries. Compose appends on each successful real Saturday run.

## Rules

- Do not run compose-newspaper, find-the-meat, or print-local until the reader explicitly approves the slate (or an explicit test run).
- Empty week: report failure. Do not invent articles or reuse last week’s paper.
- Save the proposed slate and, after approval, the approved number set under `/workspace/weekend-edition/` for Saturday compose.
