---
name: install-agent-looper
description: "Use when adding Agent Looper to a repo, debugging a missing CLI, or before the first loop run: detect harnesses including Muse and Claude and ask where keys already live."
---

Install and wire @dancingteeth/agent-looper in a consumer repo. This bot does not ship the harness binary. Install the npm package (0.7.0+ for Grok 4.7 Cursor judge default and DeepSeek Flash 4.1 defaults; 0.6.3+ for DSH flat credentials map; 0.6.2+ for Cursor escalate isolation and prompt scaffold 10m stop; 0.6.1+ for frozen plant-block and models.dev soft-gate; 0.6.0+ for env-class verify, setup.sh, and frozen-file restore; 0.5.0+ for Claude Code and agent-loop-prompt).

Node 22+. Add @dancingteeth/agent-looper and the SDK peers for workers you will use, then run agent-loop-init. Humans can run agent-loop-setup once for repo defaults (single-screen Ink wizard in 0.6.0; --plain / --answers unchanged). Agents skip the TUI.

agent-loop-init copies check-running-loops into .cursor/skills and .agents/skills. Re-run init after upgrading if those dirs are missing.

Recommended commands: agent-loop run, agent-loop-prompt, agent-check for each runtime, agent-loop-init. Confirm flags with agent-loop --help. Do not invent flags. costPreset is JSON-only (loop.json / repo defaults), not a CLI flag.

## Before the first run (required)

Do this in the same session, before the first agent-loop try, and again if the machine or repo changes. Do not start a worker until it is done.

1. Detect every harness, not just the one named in chat:
   - PATH binaries: cursor, cline, opencode, pi, codex, dsh, muse, claude
   - Repo peers / node_modules for the matching SDKs (@cursor/sdk, @opencode-ai/sdk, @cline/sdk, @muse-code/sdk, and the rest from the published README). Claude Code needs PATH claude only — no @anthropic-ai/claude-agent-sdk on the CLI package.
   - Whether this checkout is the harness source (local dist/cli) or a consumer (dependency)
2. Record the real CLI path you will invoke. pnpm exec / npx may resolve a global install that cannot see this repo's node_modules. Prefer the repo-local binary (package.json bin → dist/cli, or node_modules/.bin after a proper install) when this is the source repo or a file: dependency. Write down the exact command.
3. Run published agent-check for each installed runtime you might use (including agent-check muse when PATH muse and @muse-code/sdk are present, and agent-check claude when PATH claude is present). Report pass/fail only. Never print key values, env files, or secret-manager output. agent-check claude does not spend quota; it checks PATH, version 2.1.169+, and --safe-mode. agent-check dsh also fails on a wrapped credentials store before any worker spawn.
4. If the user named a runtime or costPreset, pin it in loop.json so detection cannot silently pick another worker. Muse and Claude are explicit only (`--runtime muse` / `--runtime claude`). Neither is on costPreset minmax. DSH / OpenCode Go / Cline Pass Flash defaults are deepseek 4.1 (`deepseek-official/deepseek-flash`, `opencode-go/deepseek-v4.1-flash`, `cline-pass/deepseek-v4.1-flash`); previous deepseek-v4-flash stays allowed. Go minmax stays Hy3. Cursor worker stays Composer 2.5; Cursor judge default is grok-4.7. Pricing for Go / Cline Pass follows models.dev; unpriced well-formed slugs warn and report $0 until priced. When loop.json sets runtime cursor, OpenCode escalateModel from repo defaults is dropped — set reviewRuntime / reviewModel for a non-Cursor judge. For DSH, `~/.dsh/.credentials.yaml` must be a flat `KEY: "string"` map. A wrapped store (`version` / `refs` / `records`) or YAML integer `version: 1` fails agent-check dsh and agent-loop run before WORKER — quoting `version` alone is not enough. The harness does not rewrite that file.

## Ask where keys already live

After detection, ask the user where credentials for the chosen worker (and judge, if different) already live on THIS machine. Typical answers: already in the environment; a signed-in CLI; a local secret manager they already use (they name it). For Muse: Muse Code CLI login or META_API_KEY already on the machine. For Claude: claude login (Pro/Max/Team Premium) with ~/.claude persisted — leave ANTHROPIC_API_KEY unset in the grind shell so print mode uses subscription quota, not Console pay-per-token. Never ask them to paste a secret. Never assume env, a signed-in CLI, or a secret manager. Do not start the loop until they answer.

Ask before installing a new worker (including Muse Code / muse CLI, or Claude Code / claude CLI). If Claude is below 2.1.169, ask before running claude update.

## Idea → freeze (optional)

agent-loop-prompt is an Ink TUI: the user types an idea, the judge (not the worker) drafts GOAL.md + verify.sh, freeze lint rejects gameable greps, the user confirms, then the watch TUI grinds. Scaffold aborts once GOAL.md + verify.sh pass freeze (10-minute wall). Optional preview after green is trust-gated and is not executed by agent-loop run. Resume lines keep Doppler when the shell was started that way.

## Run

Start the loop in this chat with the recorded command. Do not print a command and tell the human to run it. Do not background the grind in a way the IDE reaps at about 5 minutes. Watch for AGENT_LOOP_DONE.
Keys stay on their machine. Spend shows list vs billed; $0 billed on a subscription quota is still quota use, not free.

If AGENT_LOOP_DONE reason / run-report shows status waiting with verifyClass env (or setup failed), treat it as an environment park — fix the missing tool / secret / bootstrap, do not thrash another product iteration.
