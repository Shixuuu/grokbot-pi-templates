---
name: coding-tool-router
description: "Use when any agent needs code, scripts, site/frontend changes, DevOps, or tooling. Pick the frontend coding agent vs the DevOps coding agent vs Master native."
---

Master owns routing. Do not pick a coding CLI ad hoc. Ask Master or follow this map.

## Agents
- Frontend coding agent: Claude Code CLI via the owner's OAuth. Prefer Opus for design, architecture, frontend, UI, and quality-critical multi-file work.
- DevOps coding agent: Codex CLI via the owner's OAuth. Prefer for DevOps, scripts, CI, batch/autonomous implementation, terminal-native work.
- Master native: orchestration, research, media ops, connectors, non-code writing. No heavy coding here.
- Ideas agent: ideas only (not a coding agent).

## Route
| Work | Owner |
|------|--------|
| Frontend / UI / design / architecture / quality-critical multi-file | Frontend coding agent (Opus) |
| DevOps / scripts / CI / batch implementation / terminal-native | DevOps coding agent (Codex) |
| Orchestration / research / connectors / non-code | Master |
| Daily banger YT ideas from X | Ideas agent |

## Cost
Prefer one owner per task. No parallel frontend+DevOps on the same job. No overnight thrash loops.
