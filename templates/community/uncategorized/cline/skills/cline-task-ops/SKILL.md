---
name: cline-task-ops
description: "use when running a coding or non-coding task through Cline CLI (one-shot, plan/act, teams, schedules) or setting up Cline rules, skills, MCP, or a memory bank for a project."
---

# Cline task ops

Check `~/cline/cli-help.txt` (or run `cline --help`) before using any flag. Global flags and `cline auth` flags overlap: `-p` means plan globally but provider inside `auth`, and `-k` means key globally but API key inside `auth`.

## Run a task
1. Pick a working folder. For code, use the repo root. For non-code work (research, docs, data, writing), use a fresh folder under `~/cline/work/<slug>/`. Always pass `-c <path>` / `--cwd <path>`.
2. Plan first on anything non-trivial: `cline -p --auto-approve false -c <path> "<task>"` (`-p` is plan mode, and act is the default). Read the plan, then act.
3. For a headless one-shot that's machine-readable: `cline --auto-approve false --json -c <path> "<task>" | jq -r 'select(.type=="run_result")|.text'`. `--json` emits NDJSON with these event types: `agent_event`, `hook_event`, `team_event`, `run_result`, and `run_aborted`. Piping stdin also runs headless, as in `git diff | cline "review these changes"`.
4. Use auto-approve (`--auto-approve true`, or `--yolo` if `--help` lists it) only in a throwaway folder or git branch the user cleared. Never use it with sudo, secrets, or someone else's files.
5. See past runs with `cline history --json --limit 10`. In the interactive TUI, `/undo` rewinds a checkpoint.
6. Report results like a reviewer: what changed (files and diff summary), the commands it ran, tests and output, and anything it couldn't do. Verify by running the code or reading the files, not by trusting Cline's summary.

## Bigger work
- Agent teams: `cline --team-name <name> "<goal>"` starts a team, and running the same command again resumes it. State lives in `~/.cline/data/teams/<name>/`. Use `/team <goal>` in the TUI. Confirm the flags with `--help`.
- Subagents are experimental and read-only (they read, search, and run read-only commands). They're good for parallel research, not edits.
- Schedules: `cline schedule` starts a wizard. Manage them with `cline schedule list|trigger|pause|resume|delete|executions <id>`. Check `cline schedule create --help` for flags. Only schedule tasks the user asked for.

## Customize a project
- Rules: put markdown files in `.clinerules/` or `.cline/rules/` at the project root. Global rules go in `~/.cline/rules/`. Workspace rules beat global ones. `/newrule` creates one.
- Skills: a folder with a `SKILL.md` whose frontmatter has `name` (kebab-case, matching the folder) and `description` (1024 characters or less). Project skills go in `.cline/skills/`, and global ones in `~/.cline/skills/`. A global skill beats a project skill with the same name.
- MCP servers: configured in `~/.cline/data/settings/cline_mcp_settings.json`. Inspect them with `cline config mcp --json`. `cline config <workflows|rules|skills|agents|plugins|hooks|mcp|tools>` lists what's loaded.
- Memory bank (for long-running projects): add the memory-bank custom instructions as `.clinerules/memory-bank.md`, then tell Cline "initialize memory bank". It keeps `memory-bank/` with projectbrief.md, productContext.md, systemPatterns.md, techContext.md, activeContext.md, and progress.md. Say "update memory bank" after milestones.

## Never
- Run `cline doctor fix`, which kills every Cline process on the machine.
- Print or copy `~/.cline/data/settings/`, which holds credentials.
- Push, deploy, publish, or send anything without the user's go-ahead.
- Let Cline delete files or run destructive commands outside the task folder.
