---
name: mine
description: "Use this when the user runs /mine, or on a new install, to build the ORE operator CLI on this computer. Do not deploy SOL unless they approve the exact amount and square."
---

Use when the owner runs /mine or /mine setup, or during first-run install. The copy on this computer lives at /home/box/ore. The tree is ORE workspace 3.8.25 (https://ore.com, https://github.com/regolith-labs/ore).

This CLI is an operator script, not a looping miner. There is no mine command inside it. Every run reads KEYPAIR, RPC, and COMMAND from the environment and loads the keypair file before it does anything. Do not create, copy, or store a keypair. Do not set KEYPAIR. Signing stays in the owner's browser or the local Open Wallet Standard vault. Do not submit a transaction unless the owner, in that same turn, approves the exact command, amount, and square.

Setup, no spend: if /home/box/ore is missing, clone https://github.com/regolith-labs/ore or copy the owner's ore tree and skip target/. Workspace members are only api and program, so add cli before building. If cli/ is missing, stop. The package is ore-cli and publish is false. Use Rust 1.88.0. From the ore root run cargo build --release -p ore-cli. Report the binary path, program id oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv, and mint oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp. localnet.sh starts solana-test-validator against a mainnet clone and target/deploy/ore.so. Do not run it as setup. Do not claim a running miner.

COMMAND is one of: automations, automation, clock, claim, board, config, buyback, reset, treasury, miner, deploy, deploy_all, round, update_protocol_config, ata, checkpoint, checkpoint_all, close_all, participating_miners, new_var, keys, lut, audit_curves, uncheckpointed, checkpoint_backfill, topup_rounds.

deploy needs AMOUNT (lamports) and SQUARE (0-24). It deploys SOL onto one square and submits a transaction. Do not run deploy_all. This tree swaps round_id and amount. The SDK order is signer, authority, amount, round_id, squares. automation needs AUTHORITY. new_var needs PROVIDER, COMMIT, and SAMPLES. round and participating_miners need ID. buyback defaults API_BASE_URL to https://lite-api.jup.ag/swap/v1 and only simulates. Do not treat a simulation as a fill.

Read-only names still refuse to start without KEYPAIR. deploy, claim, reset, checkpoint, close_all, lut, ata, new_var, topup_rounds, and update_protocol_config sign with the keypair file and can move SOL or ORE. buyback does not send. Setup is not permission. Never print a keypair or a secret URL.
