---
name: exception-first-mac-and-field-brief
description: "use this when authoring or running Mac CLI launches or research collect → deep-brief → publish pipelines — write failure branches (stall, dirty exit, quota, Mac-down, miss detection, orphan output, unacked handoff) before the happy path, and apply run limits, demotion, and the retry/cost ceiling"
---

Write the **failure branch before the happy path**. Don't rediscover known breaks in chat.

## Mac CLI (every long tmux-launched run)

| Symptom | Action |
|---|---|
| Machine disconnected | Don't claim the job died. After reconnect check `tmux ls` + launcher logs. File a gap note if the slot is lost. Connected ≠ spawn-ok. |
| Log + worktree quiet ~540s | Kill tmux → resume the **same tool session** with a short continue. Never cold-start the same PR/slice. |
| First output <2 min ago, log looks quiet | One more poll cycle before a stale kill. |
| `exit 0` but dirty tree or HEAD unchanged when a push was required | Incomplete. Finish commit/push before new scope. |
| "Wait for notifications before committing" + dirty tree | Incomplete. Re-kick with no-exit-while-waiting restated. |
| Quota / rate limit / model cap | Fail over (Opus 5.5 → Kimi); record which seat wrote. Don't spin the capped seat. |
| Resume fails (unknown session) | One recorded cold-start with a new session id; don't thrash resume. |
| Self-report or Jev completion_check says done, deterministic check fails or can't run | Not done. Report the exact gap. |
| Wrong CLI flags mixed across tools | Abort; rewrite with that tool's flags only. |
| Session-name collision | Kill the stale session or pick a new unique name. |
| Handoff posted to a room only, never picked up (unacked handoff) | Direct priority wake + ledger row; the EM heartbeat reads the ledger first. |
| Crash with unknown outcome | Park for the owner/EM; don't auto-retry. |

## Research pipeline (collect → deep brief → publish)

| Symptom | Action |
|---|---|
| Mac down or spawn fail at collect | Skip that slot; disclose the gap; catch up when spawn-ok. |
| Pack missing at deep-brief time | Brief from available packs; label missing slots. Thin ≠ quiet. |
| Deep-writer seat capped | Fail over to the documented fallback; record the seat in the artifact. |
| Primary slot never fired | One miss detector catches up; don't widen crons. |
| Markdown ready but no published page | Publisher must push page + catalog. Orphan markdown is not done. |
| Optional lanes paused for tokens | Not a miss; skip those lanes. |

## Run limits + retry ceiling

Defaults on long fires: **50 items · 2 retries · $0 spend · 0 external**. Abnormal input volume → stop and escalate (a permitted action repeated at scale is still damage).
Retry: transient ≤2 · schema repair once · conflicting evidence → ask · verification fail → return exact gap · three failed correction rounds → escalate · cost ceiling → stop.
Autonomy ladder 0–4 (Observe → Prepare → Execute-with-approval → Auto → Coordinate) demotes when quality drops, an integration changes, or human repairs pile up. GREEN/YELLOW/RED still governs touch.

## Authoring rule

When you edit a Mac-launch or research-pipeline skill, update its Exception paths in the same pass. Happy-path-only skills are incomplete.

## Don't

- Automate a routine after one clean run (Three-Run Proof).
- Fake collection or invent sources when tools fail; label proxies honestly.
- Claim done without the lane's durable artifact (pack file, page + catalog, pushed commit).
