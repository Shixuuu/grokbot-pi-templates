---
name: check-running-loops
description: "Use when the user asks if Agent Looper jobs are ok, stuck, running, healthy, or done."
---

Check whether agent-loop or agent-loop-batch jobs are actually alive, stale, hung, dead, or done, for any worker or judge (Cursor, Cline, OpenCode, Pi, Codex, DSH, Muse, Claude).

Do not answer loop health from memory, an IDE job list, or a terminal that still says running. Those stay running after the process dies.

From the consumer repo root, run the published heartbeat script after init: .cursor/skills/check-running-loops/scripts/check-running-loops.sh with the repo path (or the .agents/skills copy).

Heartbeat in order: ps for harness PIDs, then watch-status.json pid plus mtime, then Cursor terminal files only if the grind started from that chat.

Verdicts: ALIVE, ALIVE_BUT_STALE, ALIVE_BUT_HUNG, DEAD, DONE, NONE. A UI that still says running with a dead PID is DEAD. Do not print full ps command lines. Lead with verdict, PID, log age, loop name, and runtime.

When the loop has finished, also read AGENT_LOOP_DONE / run-report status: waiting with verifyClass env or failed setup means an environment park (HITL), not a healthy grind and not a product-failure iteration.
