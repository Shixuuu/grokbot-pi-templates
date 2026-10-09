---
name: factory-local-takeover
description: "Use when the owner asks you to take over, keep going, watch, or notify when locally running agent work is done (Herdr, local CLI, an already-running agent), usually while they are away. Shipped capability, not owner-config. Never arm pane waits while they are at the keyboard."
---

# Factory local take-over

## When

Called by **factory-coordinator**, **handover**, `/take`, `/arm`, or `/unarm`. The owner said take over, keep going, watch it, or notify when done about local agent work. Scope: Herdr panes, local CLI agents on a registered machine, or an already-running agent session they point at. Do not hijack a pane without that ask. A status question gets a one-shot list, no waits.

## What

This is factory work, not a side chat and not a preference. Two states:

| State | factory-mode gate | Done-only webhook routine | Pane waits |
| --- | --- | --- | --- |
| **Armed** (owner away, `/arm`, `/take`) | on | resumed | one Task-wrapped wait per live pane |
| **Unarmed** (owner at keyboard, `/unarm`) | off | paused | none; drop armed waits |

Discover with the local runtime when present: `herdr agent list|get|read|wait` on the named machine. Third-party runtimes get no invented vault folder.

## Steps

### Arm

1. Turn the factory-mode gate on (state file `on`, via the plugin's on script).
2. Resume the done-only webhook routine. Confirm webhook URL and sender key exist in the plugin env; fail closed or ask for a paste if missing.
3. `herdr agent list`. For each live pane not already durably settled, Task-wrap `herdr agent wait <target> --until done --until blocked --until idle`. Idle is required; idle≠done was a silent miss.
4. One waiter per pane: stop the prior wait Task on re-arm. Cap a wait loop at roughly 15–30 minutes of reconnect/settle polls, then finite re-arm or job-watch. No ghost waiters.
5. One classify line naming the panes armed.

Lease key with no spec: machine + runtime target, persisted under `$FACTORY_BOT_HOME` like other leases. The coordinator owns cap and lease orchestration.

### Settle, not status alone

A pane is durably finished only when status is `done` or `idle` **and** settle checks pass: no live monitors, no live bridge/probe processes for that project, prompt box empty and not mid-turn. Raw `done` with live work is a sticky false-done; keep waiting. Raw `idle` with a clean settle is a real finish; do not miss it.

After a wait returns: run settle checks. Sticky → re-enter the wait. Durable → write the receipt, update the lease, hand back.

### Done-only webhook (the notify)

The Herdr plugin POSTs on `done` only, gated by the factory-mode state file, using webhook URL + sender key Bearer. Say webhook URL and sender key, never product env-var names. Wake handler:

1. Ignore non-`done` statuses.
2. Immediate short owner tick. Lead with the repo name (cwd basename) or pane title, then agent; pane id secondary in parentheses. Null cwd/title is fine; fill from `herdr agent get` when the machine is up.
3. Best-effort settle verify via local tool when the machine is connected. Sticky → keep waiting, no ship. Durable → classify into the stay loop.
4. Machine offline → lease `pending_verify`, tick anyway from the payload, exit fast. Verify on reconnect. Never hang a webhook run 30–60 minutes on offline verify.
5. Bound verify attempts to a few short tries, then `pending_verify` and exit. Never silent after a real `done`.

Fallback for orphaned running work that was never wrapped: a finite coarse scheduled job-watch, deleted when done or failed. Never a standing host poll. Never Shell `block_until_ms 0` plus a pid waiter as the primary done-signal.

### Stay on Herdr while the pane is live

While take-over is live for a pane, the next phase (land, fix CI, continue NEEDS_WORK, retarget PR, ship/push) runs in that Herdr session: `herdr agent prompt` the pane, re-arm the wait. Do not launch a Cloud Agent for the same stream. Do not `git push`, merge, or open PRs from Forge Shell on that machine while the pane owns the work.

Keep going through notify-only wakes while take-over is live. Stop only for NEEDS_HUMAN, ASKED, or an owner-gated send / pay / publish / merge / taste wait.

### After a readable local done

- Maps to a factory spec or open PR → hand back to **factory-coordinator** to classify and continue (next `flow --auto` job or **factory-land**).
- Ad-hoc local work → ping the outcome once and stop, unless the owner said keep going into a next phase.

## Anti-patterns

- Pane waits or gate on while the owner is at the keyboard
- Trusting raw `done` without settle, or missing a settled `idle`
- Blocking the owner tick on machine reachability
- Two waiters on one pane
- A Cloud Agent or Forge-side push on a stream a live pane owns
