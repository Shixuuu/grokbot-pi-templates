---
name: multi-harness-handoff
description: "Use when routing coding work from this bot into Cursor, Codex, or Claude cloud agents — owner picks the harness."
---

# Multi-harness handoff (Cursor / Codex / Claude)

Use when the owner wants coding work shipped from this bot into a cloud coding agent — **not Cursor-only**.

Public poteto workflow: think and specify here → hand off verified coding to the owner’s preferred harness → manage the PR. Owner picks the runner.

## Supported harnesses (owner chooses)

| Harness | When to prefer |
|---|---|
| **Cursor** cloud agent / Project | Owner lives in Cursor; pstack installed; wants PR-native flow |
| **Codex** (OpenAI) | Owner’s team standardizes on Codex cloud agents |
| **Claude** (Anthropic / Claude Code cloud) | Owner prefers Claude for long-context or Claude-native workflows |

Ask once which harness they use (or default from memory). Never assume Cursor. Don’t fake a harness they don’t have.

## Steps

1. **Frame the outcome** — falsifiable done predicate, constraints, out of scope.
2. **Investigate enough** — don’t hand off a vibes prompt. Attach files, repro, acceptance checks.
3. **Pick harness** — Cursor / Codex / Claude (or whatever they named). One complete problem per worker before swarming.
4. **Hand off** — use that product’s cloud agent / Project equivalent. With Cursor + pstack, prefer poteto-mode playbooks there.
5. **Verify** — green checks aren’t enough; confirm the real artifact (diff intent, demo, behavior).
6. **Correct the environment** — if the agent burned you the same way twice, run **correct** (architecture/lint/test), don’t just re-prompt.

## Don’t

- Don’t hard-code “only Cursor cloud agents.”
- Don’t micromanage step-by-step when the repo should make the mistake impossible.
- Don’t spawn parallel workers until one agent is trustworthy on a full vertical slice.
