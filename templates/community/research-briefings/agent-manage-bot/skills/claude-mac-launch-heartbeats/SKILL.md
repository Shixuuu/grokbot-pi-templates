---
name: claude-mac-launch-heartbeats
description: "use this when launching any long Mac CLI job (Claude Code, Codex, Kimi, Agy, Muse, DSH) — tmux launcher, stream heartbeats, stale-log watchdog, no-exit-while-waiting, Jev shadow pre-launch log, exception paths, and run limits"
---

Long Mac CLI jobs (especially buffered text output) can look hung for 10+ minutes with an empty log. Use this for ALL long Mac CLI runs, not only Claude.

## Why tmux

The Grok Bot link to the Mac goes through the desktop app. If the app restarts or disconnects, processes started from that Shell can die, even with `nohup`. Detached tmux sessions survive. Short one-shot commands don't need this.

## Launch defaults

1. Launch via the tmux launcher on the Mac (e.g. `grok-tmux-run <session> -- <cmd>`, logs in a per-session log file). `cd` to the workdir first. Session names: `[a-zA-Z0-9_-]+`, unique per job (include date/slot). No launcher? Raw tmux: `tmux new-session -d -s <name> -c "$PWD" "bash -lc '<cmd>' >> <logdir>/<name>.log 2>&1"`.
2. **Streaming required:** Claude `--output-format stream-json --verbose`; Muse `muse exec --json`; others: tee stdout/stderr or the tool's streaming mode. No long buffered text-only launches.
3. Keep prompts scoped: one surface or one slice per fire.
4. **Model/effort:** Claude = Opus 5.5 at max effort (set in its settings file; pass `--model` explicitly); Codex at xhigh; Kimi/Muse/DSH at max. Never pass flags that downgrade effort. Max burns tokens, so keep prompts tight.
5. Capture and **reuse** each tool's session id per PR/slice (ids are per tool). Resume via stdin continue when the prior turn completed. Never cold-start a follow-up.
6. Remind agents to read the vault before work and file a learning note after.
7. **Jev shadow pre-launch log:** right before each launch, call the jev-shadow wrapper on the bot's computer with gate `worth_running` and state `{"task":"<repo>#<n> <one line>","planned_action":"mac_cli_launch","evidence":{...},"cost_level":"high"}` (`retry` for a re-kick). Shadow only: always exits 0 within ~8s; launch as planned regardless. No secrets in state.

## No-exit-while-waiting (every Mac agent)

1. Never end a turn waiting on background work. Wait in the foreground for a durable exit marker, or commit+push the hermetic slice first and do live evidence in a follow-up.
2. Prefer two slices when live CI is involved: A = code + hermetic tests + push; B = live evidence + push. Each is done only when a deterministic check passes.
3. Wrapper success gate: if a push was required, exit nonzero when `git status` is dirty or HEAD equals the kick baseline SHA, even if the tool exited 0.
4. On resume after that failure: inventory diffs and background logs; finish commit/push before new scope.

## Watchdog (required on every long job)

Stalled if, for ~540s, both the log (and any JSONL stream) and the worktree/target file mtime are unchanged. Then kill the tmux session and resume the same tool session with a short continue prompt. Attach the watchdog with `--stale-sec 540 --log <log> [--jsonl <stream>] [--worktree <path>] --on-stale <relaunch cmd>`. The babysitter polls every 2–3 minutes.

## Run limits

Inherit **50 items · 2 retries · $0 spend · 0 external** unless the mission overrides. Abnormal volume → stop and escalate.

## Exception paths (symptom → action)

| Symptom | Action |
|---|---|
| Mac disconnected | Don't claim the job died; recheck `tmux ls` + logs after reconnect; gap note if the slot is lost. |
| Log + worktree quiet ~540s | Kill tmux → resume same session with a short continue. |
| `exit 0`, dirty tree or HEAD unchanged | Incomplete; finish commit/push. |
| "Wait for notifications" + dirty tree | Incomplete; re-kick with no-exit-while-waiting restated. |
| Quota/cap | Coding: fail over to an optional implementer seat; deep writer: Opus 5.5 → Kimi. Record the seat. |
| Resume fails | One cold-start with a new recorded session id. |
| Slow first token | One more poll before stale kill. |
| Mixed CLI flags | Abort; use that tool's own flags. |
| Session-name collision | Kill stale or pick a new name. |
| Auto-review blocks a Mac Shell kick | Ask the owner once with the block reason; never reformulate to sneak past. |
| jev-shadow prints `error conf=0` | Launch as planned; don't retry or wait on Jev. |
| Self-report says done, check fails | Not done; resume or return the exact gap. |

## Don't

- Assume silence means the Mac is offline.
- Skip the watchdog for "one more long pass."
- Mix flags across tools, or reuse a tmux session name.
- Put secrets in session names or log paths.
- Block, skip, or downgrade a launch because of a shadow Jev verdict.
