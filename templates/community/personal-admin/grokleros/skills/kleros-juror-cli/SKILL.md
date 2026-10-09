---
name: kleros-juror-cli
description: "Use this when committing or revealing a Kleros v2 juror vote on Arbitrum One after the vote choice is already decided. Never use it to read evidence or pick a ruling."
---

# Kleros Juror CLI

`kleros-juror` (package `kleros-juror-cli`) commits and reveals Kleros v2 juror votes on Arbitrum One. It casts a decision already made elsewhere. It never reads evidence and never decides how to vote. `--choice` is always supplied.

Output is JSON on stdout by default. Branch on the `code` field, not on the exit status.

## Before you can vote

`kleros-juror` does not discover disputes. Get `--dispute`, `--round` and `--votes` from `kleros juror draws`, or from a draw monitor. Its `actionRequired` is a hint: this tool re-derives the truth from chain state and refuses if they disagree.

The signing key is a local operator file. Never put a private key on the command line, in an environment variable, or in context. There is no flag for it and it will not be read from the environment. Do not bundle, print, or share that file.

## The three actions are never interchangeable

- hiddenVotes true: commit in commit period, reveal in vote period
- hiddenVotes false: vote in vote period; commit never happens

Each has a different irreversible on-chain cost. Run `status` first if unsure; it reports `hiddenVotes` and an `actionRequired` derived from chain state.

```bash
kleros-juror status --dispute 154 --round 0 --votes 0
kleros-juror commit --dispute 154 --round 0 --votes 0 --choice 1
kleros-juror commit --dispute 154 --round 0 --votes 0 --choice 1 --broadcast
kleros-juror reveal --dispute 154 --round 0 --votes 0 --choice 1 --justification @reasons.md --broadcast
```

`--choice 0` means refuse to arbitrate and is always valid. Valid choices are 0..numberOfChoices, which `status` reports.

`--votes` takes every vote ID held in that round, comma-separated. Order and duplicates do not matter, but the set must be identical between commit and reveal or the reveal cannot match.

## Nothing is sent without `--broadcast`

Every write command simulates and stops by default. A simulated result carries `"broadcast": false`. Do not read it as a vote having been cast. Confirm with the operator before `--broadcast`.

## Timing

Vote windows are short (court 34: 45 minutes to commit and 30 minutes to reveal) and the deadline is an upper bound, not an entitlement. Both periods end early once every juror has acted. Act as soon as the choice is decided.

## Error codes

Read `code` and follow `cta.commands`.

- WRONG_SUBCOMMAND_FOR_COURT: run status for hiddenVotes
- WRONG_PERIOD: too early or too late
- DEADLINE_PASSED: window closed
- ALREADY_COMMITTED: do not re-commit casually
- COMMITMENT_MISMATCH: run salt; check round and vote ID set
- CHOICE_OUT_OF_BOUNDS: status reports the valid range
- INSUFFICIENT_BALANCE: the juror's own account pays; fund it with ETH on Arbitrum One
- SIMULATION_REVERTED: nothing was broadcast

If a broadcast returns status unknown, run status before retrying. Never re-send blindly: a duplicate castCommit permanently damages the dispute's vote period.

Never `--allow-recommit`. Never print operator credential files.
