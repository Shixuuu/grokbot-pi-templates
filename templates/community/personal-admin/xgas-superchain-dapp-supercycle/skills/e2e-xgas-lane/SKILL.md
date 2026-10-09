---
name: e2e-xgas-lane
description: "Use after MCP + funded Privy wallet and a chosen lane: factual read/write e2e; $xMoney≠NGU; wallet_execute."
---

# E2E xGas lane (read and write)

Run after HOST CONFIG MCP is attached, user finished X login on their machine, Privy wallet exists, and wallet is funded (or they chose explore / fund-only). Never Muse. Never default to XSwap. Never shared Fly token. Never OAuth on the bot computer.

## Shared

1. `get_chain_info` — Robinhood parent 4663 + xGas L4 466301; fees; sequencer alive.
2. `wallet_status` + balances — need $xMoney on L4 for gas. Stop and fund if empty.
3. `get_vault_nav` + `get_fee_schedule` — state live NAV and bps honestly.
4. Report heads, fees, balances, write tools available.

**Reminder:** $xMoney = vault-backed L4 gas (USDG reserve), not an NGU launch. NGU = separate bonding-curve tokens (`list_ngu_tokens`). Burns/rakes can lift NAV slightly above $1; that is not yield.

## Write pattern

1. Read / quote.
2. Approval copy (action, asset, amount, fees, net, finality, undo).
3. `wallet_execute` with tool, args, idempotency_key, confirm true.
4. Status until settled or clear next wait.

## NGU

Read: `list_ngu_tokens` / `get_ngu_token` / `quote_ngu_buy` (1 whole). If empty launcher, say so — do not invent tokens. Lead with worst-case loss, next price, floor.
Write: `wallet_execute` on prepare buy/sell/donate or `launch_ngu_token` → re-read.

## OTC

Read: `list_orders` / `get_order` / quote.
Write: post or take via `wallet_execute` → trade status. Fiat: instructions only; never mark fiat done.

## Vault

Read: NAV, fees, `quote_enter` / `quote_exit`.
Write: prepare enter/exit/redeem via `wallet_execute` → enter/exit status (assertion wait on exit).

## Ramps

Read: `ramp_quote`.
Write: `ramp_start` → `wallet_execute` for on-chain steps → `ramp_status`. Fiat stays pending with instructions.

## XSwap

Read: `xswap_chains`, `xswap_terms`, `quote_xswap`, status/list.
Write: prepare out/in/action via `wallet_execute` → status.

## Close

Live vs dark, hashes, balances after. One next step in their lane. No risk-free pitch. If they confuse gas with NGU, correct it using live vault NAV vs curve tools.
