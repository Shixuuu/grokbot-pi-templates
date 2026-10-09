---
name: laggy8-sleeve-ledger
description: "Use when Laggy8 needs strategy-owned lots vs pre-existing brokerage equity, sleeve NAV vs soft cap, path drawdown vs high-water, freeze/SPY regime, profit skim on switches, or a trade log for the Mag8 laggard sleeve."
---

# Laggy8 sleeve ledger

## When
Before any Laggy8 buy/sell proposal, after a fill, on path-DD checks, or when the owner asks what the sleeve owns.

## Sleeve rules
- Soft cap starts at $100,000 inside the owner’s existing single IBKR book; it **compounds** only when a ticker-switch skim runs on Mag8↔Mag8 switches (not on freeze-to-SPY soft-cap raise).
- Never sell or reduce equity that existed before Laggy8 started.
- Only sell shares previously bought by Laggy8 (strategy-owned).
- Never add outside capital beyond the **current** soft cap.
- On Mag8 ticker-switch rebalances only: skim 20% of profit (NAV − soft cap, floor $0) out of the sleeve; new soft cap = NAV − skim. Same-name months: no churn, no skim. Skimmed cash is brokerage cash outside Laggy8.
- **Path DD (locked):** track `hwm_usd` (peak strategy-owned sleeve NAV in current active regime). Amber at −25% from HWM (review only). Red freeze at −35%: sell strategy-owned only, park in SPY ≤ soft cap, set `regime=frozen_spy`, keep soft cap, store `freeze_hwm_usd`. Re-engage when mark > −20% from freeze HWM, Mag8 rebalance day, owner yes — then Mag8 buy ≤ soft cap, `regime=active`, reset HWM from post-buy NAV.

## Steps
1. Read IBKR open positions for the eight Mag8 names, SPY if held by Laggy8, and any Laggy8-held symbols.
2. Load the durable Laggy8 trade log (create it if missing): date, ticker, side, qty, price, proceeds, IBKR order/instruction id, note. Also load **current_soft_cap** (default 100000), **regime** (`active`|`frozen_spy`), **hwm_usd**, **freeze_hwm_usd**.
3. Classify each position line as **strategy-owned** (bought via Laggy8 log) vs **pre-existing** (present before Laggy8 or never logged as Laggy8).
4. Compute sleeve market value from strategy-owned lots only. Compare to the **current soft cap** and state headroom / overweight.
5. Update HWM when regime is `active` and sleeve NAV > hwm_usd. Compute path_dd_pct = (NAV / hwm_usd) − 1 when hwm_usd > 0.
6. On rebalance / freeze:
   - Same Mag8 ticker (active): no sell, no skim, soft cap unchanged.
   - Mag8 switch: sell only strategy-owned shares of the old pick; Profit = max(0, NAV − soft_cap); Skim = 0.20 × Profit; New_soft_cap = NAV − Skim; buy new Mag8 pick with New_soft_cap only.
   - Freeze (−35%): sell strategy-owned only; skim if Profit > 0 but **do not raise** soft cap; buy SPY ≤ current soft cap; set regime frozen and freeze_hwm_usd = HWM that tripped.
7. After a verified fill: append the trade log; persist soft cap / regime / HWM fields; never invent fills.

## Do not
- Touch pre-existing lots of a Mag8 name even if the strategy also holds that ticker.
- Treat the whole brokerage account as the sleeve.
- Skim or trim on same-name months unless the owner explicitly asks.
- Auto-raise soft cap on freeze-to-SPY.
- Propose Mag8 buys while `regime=frozen_spy` until re-engage conditions and owner yes.
