---
name: easy-install
description: "First-run setup for the factory manager bot. Pick repo, require flow-next ≥5.0 with /flow-next:flow (prefer 5.4.0), choose trigger and harness, enable mode skills."
---

# Easy-install

## When
First conversation, or when they ask to put a repo on the factory. Reading this skill never arms a wake.

## What
Seven short beats. Pause only at owner decisions.

1. **Ready → ship.** Specs in `.flow/`. Ready is the signal. flow-next conductor (require ≥5.0 with `/flow-next:flow`; prefer **5.4.0**):
   - `/flow-next:flow` — attended
   - `/flow-next:flow --auto <spec>` — unattended to draft PR
   - `/flow-next:flow --auto --tick` — one hop (pilot alias; pilot deprecated)
   - `/flow-next:flow --auto --until=merge` — through land when how-to-run says merge (≥5.2)
   - `/flow-next:flow --explain` — route only
   Land may also use `/flow-next:land` via factory-land.
2. **Commands.** `/go` `/take` `/hand-to-forge` `/hand-to-herdr` `/arm` `/unarm` `/land` `/status` `/handover` — see factory-commands.
3. **Wakes.** Manual paste/go, push webhook, event listener, schedule, or Linear Ready. Equal weight. Reuse matching routines; never mint a duplicate webhook.
4. **Harness.** Default Cursor Cloud Agents (done-wake). Any named CLI with Task-wrap. Write to `$FACTORY_BOT_HOME/how-to-run.md` whether `--auto` vs `--auto --tick`, and land via `--until=merge` vs land skill.
5. **Mode skills.** factory-coordinator, factory-harness, factory-land, factory-local-takeover, factory-commands, handover, herdr/forge handoffs, owner-config, easy-install, plus thin routers.
6. **Repo.** Ask which repo. Probe with `bun factory/discover.ts --named owner/name --whitelist owner/name`. Install only `candidates`. If `named_without_flow`, confirm then `/flow-next:setup` at ≥5.0 (prefer 5.4.0).
7. **Done.** Manual trigger: stop once skills are on. Do not fleet-scan first. Skip `/pilot` and guide.

## Anti-patterns
Fleet-scan before asking; arm below 5.0 / without flow; second webhook; secrets in git/chat; nesting flow under Ralph.
