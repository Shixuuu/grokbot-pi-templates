---
name: herdr-to-forge-claude-handoff
description: "Use when moving a Herdr pane stream off the Herdr host onto Forge with Claude CLI (Opus default), not Cloud Agents. Close Herdr cleanly, snapshot, continue Task-wrapped."
---

# Herdr → Forge Claude CLI handoff

## When

- `/hand-to-forge`, or the owner says hand it to your machine / Forge / continue overnight
- They name Claude CLI (often Opus) as the continue harness
- They say close the Herdr agent cleanly, then keep shipping

Not for: staying on Herdr (**factory-local-takeover**), Cloud Agent phases, or status asks.

## What

Close the Herdr pane first, snapshot the state, then continue on Forge (this bot's computer) with Claude CLI, Task-wrapped. Defaults: `--model opus` unless the owner names another; no Cloud Agents on this path; hang-check is backup only; overnight means keep building with no time gate and ping only for real NEEDS_HUMAN / ASKED / owner-gated actions.

## Steps

1. **Disarm the Herdr wait** for that pane: stop the prior wait Task, lease `waitTaskArmed=false`.
2. **Prompt Herdr to close** (`herdr agent prompt <pane>` on the Herdr host only): stop implementing, finish or cancel live shells safely, one coherent WIP commit, push if safe (no force), print a HANDOFF BLOCK (repo, branch, HEAD, worktree, `git status -sb`, PR URL, flow-next status, finished work, next named job, NEEDS_HUMAN, key paths), then go idle.
3. **Wait for idle/done** with a short settle. Sticky build procs → note sticky; do not pretend closed.
4. **Snapshot** to `$FACTORY_BOT_HOME/ledger/handoff-<repo>-<spec>.json` from the host's git and the Herdr transcript. Lease `herdr_stream_closed=true`, `outcome=HANDED_TO_FORGE_CLI`.
5. **Checkout on Forge**: clone or fetch the handoff branch. The Herdr pane no longer owns the stream.
6. **Classify** the next named flow-next job from git fields (same matrix as **factory-coordinator**).
7. **Launch Claude CLI Task-wrapped** in the checkout: `claude -p --model opus …` with the named `/flow-next:…` skill and the handoff context. Executor stays on the process until exit, writes the receipt, exits. Parent rides Task completion → classify → next phase (**factory-harness** rules).
8. **One classify line** to the owner: repo, git fields, next job, Claude CLI Opus. Then quiet unless NEEDS_HUMAN / ASKED / owner-gated merge or taste.

### After handoff

Unless the owner wants Herdr take-over live for other panes: factory-mode gate off on the Herdr host, pause the done-only webhook routine, stop all Herdr pane wait Tasks (`waitTaskArmed=false`). Same as `/unarm`.

## Anti-patterns

- Cloud Agents for a stream the owner moved to Claude CLI
- Forge-side `git push` while Herdr still owns the pane. After close, Forge CLI owns push
- A Herdr waiter left armed for a handed-off pane
- Skipping the HANDOFF BLOCK or the snapshot
- Running `herdr` anywhere but the Herdr host

## Related

[handover](sand-workflow:handover) intake · [factory-harness](sand-workflow:factory-harness) CLI Task-wrap · [factory-local-takeover](sand-workflow:factory-local-takeover) stay on Herdr instead
