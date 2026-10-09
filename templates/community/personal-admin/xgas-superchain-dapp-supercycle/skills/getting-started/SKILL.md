---
name: getting-started
description: "Use on first open: X login URL first, then HOST CONFIG MCP, fund, explain live staccpad/xGas tech ($xMoney≠NGU), ask lane."
---

# Getting started

First run for a new owner of **xGas Superchain dApp Supercycle**. Never call this product Muse.

Hosted app: **https://xgas.dev** (`xgas-mcp` **0.4.0+**). Prefer HTTP MCP. Never ask for a shared Fly operator token.

## Tech facts (staccpad / xGas — say these accurately; DYOR, not advice)

Pull live numbers with MCP tools every time (`get_chain_info`, `get_vault_nav`, `get_fee_schedule`, `list_ngu_tokens`, etc.). Do not invent APYs or risk-free returns. There is no risk-free fast money here.

**Stack**
- Parent (L3): **Robinhood Chain** chainId **4663**, RPC `https://staccpad.fun/rpc`, native ETH.
- L4: **xGas Orbit L4** chainId **466301**, RPC `https://xgas.dev/rpc`, native gas is **$xMoney**.

**$xMoney (gas) is not NGU**
- $xMoney is the **L4 gas token**, vault-backed by **USDG** on the parent (`get_vault_nav`). Near-dollar custody (live NAV usually ~$1.00x), **not** a speculative Number-Go-Up coin.
- Enter: parent USDG → vault → $xMoney (then use on L4 for gas). Exit: $xMoney → USDG at NAV (Orbit assertion wait on exit).
- Burns / rakes (live `get_fee_schedule`, typically 1 bps = 0.01%): enter USDG rake + xMoney entry burn (half to dead, half to Orbit bridge solvency buffer); parent xMoney transfer tax (into bridge exempt, out burns); OTC burn + fanout rake; exit USDG rake; NGU buy/sell burn + fanout (launch/donate free of those).
- Burns shrink circulating supply vs USDG reserve, so NAV can sit slightly above $1. That is solvency/buffer mechanics, **not** a yield product and not "the gas token goes up."

**NGU (Number Go Up) — separate lane**
- Bonding-curve **fungible** tokens anyone can launch via `NguLauncher` on L4. Each curve has its own floor, next price, and worst-case flip loss.
- Buy steps the curve up; sell steps it down. Paid in $xMoney. Launcher can be live with **zero** launches — say that when `list_ngu_tokens` is empty.
- NGU launches are optional speculation **on top of** gas. The gas token itself is not an NGU launch.

**Other lanes (equals; never steer)**
- **OTC** — escrow desk on L4; $xMoney vs fiat on X; maker spread vs counterparty / ~15 minute fiat window risk.
- **Vault** — USDG ↔ $xMoney against NAV.
- **Ramps** — teller routes fiat ↔ crypto ↔ $xMoney; live quotes; fiat legs are instructions only.
- **XSwap** — X Money ↔ asset on solver-reachable EVM chains; windows and fees from `xswap_terms`.

## Flow (in order — do not skip or reorder)

1. **FIRST: X login on THEIR machine**
   - Always start with: **https://xgas.dev/auth/x/login**
   - Their browser only. Never OAuth on this bot's computer.
   - Wait until they say the site shows MCP CONNECTOR (address + HOST CONFIG). Do not ask for a token before that.

2. **THEN: HOST CONFIG → AddMcpServer**
   - Site returns HOST CONFIG: url `https://xgas.dev/mcp` + `Authorization: Bearer <their-connector-token>` (per-user Privy spend key, ~180 days). Treat like a password.
   - Secret-request / secure paste preferred. Confirm, then AddMcpServer name `xgas` with that url + header.
   - `wallet_status` — show the same address the site showed. Remember the address only (never the Bearer).

3. **Detect funds**
   - Balances on parent (USDG / parent xMoney) and L4 ($xMoney gas).
   - Empty/dust: fund before lane writes — prefer vault enter from USDG; else ramp/OTC with live quotes; else tell them what to send to the Privy address.
   - Re-check after fund confirms.

4. **Explain lanes with the tech facts above** (equal weight), using **live** NAV/fees/NGU list. Then one question: NGU / OTC / vault / ramps / XSwap / just explore.

5. Run the e2e-xgas-lane skill for that choice.

## Write model

- Prefer `wallet_execute` with prepare/post/take/launch tool, args, idempotency key, explicit confirm. Privy signs; connector broadcasts.
- Optional `submit_*` only for externally signed raw txs.
- Never claim fiat moved. Never prefer XSwap. No keys, seeds, or connector Bearers in durable memory.
- Never pitch risk-free profit. If they ask "best money," correct the $xMoney vs NGU confusion and point at live quotes + risks per lane.
