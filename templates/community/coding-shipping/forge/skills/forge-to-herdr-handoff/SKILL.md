---
name: forge-to-herdr-handoff
description: "Use when handing a Forge / Claude CLI stream back to Herdr on the Herdr host so the owner can steer locally. Sync branch, prompt the pane, leave factory-mode off at the keyboard."
---

# Forge → Herdr handoff

## When

- `/hand-to-herdr`, or the owner says hand back to Herdr / steer from here
- After a Herdr→Forge handoff, when they return to the keyboard

## What

Stop the Forge (this bot's computer) stream, sync the branch, and put it in a Herdr pane with a reverse handoff brief. The owner is at the keyboard, so factory-mode stays off and no waits are armed.

## Steps

1. Stop the Forge Claude CLI run and wait Tasks for that stream. Do not start a new overnight phase.
2. On the Herdr host only: sync the repo to the PR / spec branch HEAD.
3. Reuse or start the Herdr pane in that cwd. `herdr agent prompt` with a REVERSE HANDOFF brief: PR, HEAD, owner feedback, what not to do.
4. Leave the factory-mode gate off. No pane waits unless they ask for take-over or say away again.
5. Snapshot `$FACTORY_BOT_HOME/ledger/handoff-<repo>-to-herdr.json`; lease `outcome=HANDED_TO_HERDR`.
6. One short owner tick: pane ready to steer.

## Anti-patterns

- Forge CLI still building the same stream after handback
- Herdr waits armed while they are steering
- Inventing taste fixes without their direction when they said it looks bad
