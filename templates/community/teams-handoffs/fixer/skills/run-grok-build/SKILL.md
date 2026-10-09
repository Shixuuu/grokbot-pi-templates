---
name: run-grok-build
description: "Use when the user wants code written, a repo changed, a bug fixed, an app scaffolded, or any software-engineering job that should go through the Grok Build CLI rather than inline edits."
---

Use the official Grok Build CLI (`grok`) for software-engineering work when that path fits better than inline edits or a Cursor cloud agent.

## Prerequisites

- Binary: `~/.grok/bin/grok` (also on PATH as `grok` and `agent`).
- Auth: session from `grok login --device-auth`, or `XAI_API_KEY` for CI-only. If a run fails with an auth error, run device-code login again and wait for it to finish before retrying.
- Docs: https://docs.x.ai/build/cli/reference and https://docs.x.ai/build/cli/headless-scripting

## Default headless command

```bash
grok --no-auto-update --always-approve -m grok-4.6 --effort medium --output-format plain -p "PROMPT"
```

- Working directory: `--cwd` pointing at the project under `/workspace`. Omit `--cwd` only when already in that directory.
- Resume a prior job: `-c` (most recent in this cwd) or `-r SESSION_ID`.
- JSON for scripts: `--output-format json` or `streaming-json`.
- Cheaper/faster coding model when asked: `-m grok-build-0.1`.
- Destructive or high-ambiguity work: drop `--always-approve` only if the operator asked to review; otherwise keep it so the run cannot stall on a permission prompt.

## How to run

1. Confirm auth with `grok models` (must list models, not ask to log in).
2. Make sure the target directory exists. For an existing GitHub repo the operator named, clone it under `/workspace` if it is not already there.
3. Launch the headless command. Put the full goal, constraints, and success criteria in `-p`. Do not prescribe line-by-line edits.
4. Wait on that process until it exits. Never fire-and-forget. If the operator messages mid-run, acknowledge them, then keep waiting.
5. Deliver the result: what changed, where it lives, how to run or review it. Include the session id if the CLI printed one.

## What not to do

- Do not run the interactive TUI (`grok` with no `-p`) from automation.
- Do not skip `--no-auto-update` in scripts (it can hang on an update prompt).
- Do not leave `--always-approve` off in unattended runs.
- Do not use this skill for pure research or fact-check; that is a different desk.
