---
name: factory-commands
description: "Front door for short owner commands (/go, /take, /hand-to-forge, /hand-to-herdr, /arm, /unarm, /land, /status, /handover) or matching natural language. Route to the right mode skill. Mentions /flow as attended conductor."
---

# Factory commands

## When

The owner fires a slash command or a terse ask about running work, taking over local agents, moving a stream between Herdr and Forge, landing a PR, or asking for status. Natural language that matches a row counts. Prefer the row over inventing a path.

## Commands

| Command | Also | Meaning | Runs |
| --- | --- | --- | --- |
| `/go` | go · keep shipping · paste a branch / PR / spec | Run the factory on that work (`flow --auto` under the hood) | [handover](sand-workflow:handover) → coordinator / land |
| `/handover` | (optional Herdr / repo / spec args) | Same as `/go`, any target | [handover](sand-workflow:handover) |
| `/take` | take over · keep going · watch · notify when done | Own local Herdr / CLI work while away | [factory-local-takeover](sand-workflow:factory-local-takeover) |
| `/arm` | away · factory-mode on | Gate on, done-webhook resumed, waits on live panes | local-takeover arm path |
| `/unarm` | I'm back · at keyboard | Gate off, done-webhook paused, waits stopped | local-takeover unarm path |
| `/hand-to-forge` | hand to you · onto your machine · overnight on Forge | Close Herdr cleanly, continue on Forge Claude CLI (Opus default). No Cloud Agents unless they override | [Herdr to Forge Claude handoff](sand-workflow:herdr-to-forge-claude-handoff) |
| `/hand-to-herdr` | hand back · back to Herdr · I want to steer | Sync branch, put the stream on the Herdr host, gate off at keyboard | [Forge to Herdr handoff](sand-workflow:forge-to-herdr-handoff) |
| `/land` | babysit the PR · PR URL + land | CI + review threads; merge only per how-to-run (`flow --until=merge` or land skill) | [factory-land](sand-workflow:factory-land) |
| `/status` | board · what's running | One-shot: Herdr panes, Forge CLI leases, open factory PRs. No waits armed | inline / coordinator read |

**flow-next (attended, not a factory slash):** `/flow-next:flow` (or host `/flow`) is the attended conductor — "what next", refine, plan, work, resolve-pr. `/flow-next:flow --explain` routes only. Unattended factory builds use `/flow-next:flow --auto` (not deprecated `/pilot`). Prefer flow-next ≥5.4.0.

Terms: **Forge** is this bot's computer. **Herdr** is the owner's local agent runtime on the Herdr host. **Cloud Agents** is the default harness; a named CLI with Task-wrap is the other.

## Defaults (owner-learned; keep in how-to-run / memory)

- Overnight: keep building, no artificial time gate. Ping only for real NEEDS_HUMAN / ASKED / owner-gated taste or merge.
- Herdr→Forge continue harness: Claude CLI, start Opus, Task-wrap done-signal.
- After Herdr→Forge: unarm Herdr unless they still want other panes watched.
- At keyboard: no pane waits, factory-mode off.
- Tick labels: repo or pane title first, pane id secondary.

## Ambiguity

Ask only when: which repo / PR / spec, plan vs skip plan, a merge taste gate, or Herdr vs Forge when both fit and no direction was named. Otherwise pick the best row and state the assumption in one line.

## Anti-patterns

- Quizzing them through the factory matrix after they named a command
- Cloud Agents on a stream they moved to Claude CLI
- Forge CLI still building after `/hand-to-herdr`
- Herdr waits armed after `/hand-to-herdr` or `/unarm`
- Dispatching deprecated `/pilot` or removed guide when `/flow-next:flow` / `--auto` is available
