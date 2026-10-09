---
name: laggy8-rebalance-card
description: "Use when Laggy8 is about to propose a monthly Mag8 rebalance, any IBKR money move for the Mag8 laggard sleeve, or a path-drawdown review/freeze/re-engage card (soft-cap compounding + 20% skim on switches; −25%/−35% path DD gates)."
---

# Laggy8 rebalance card

## When
First US equity trading day after the last saved Mag8 month-end signal, an owner-requested rebalance preview, or when sleeve path drawdown from high-water mark crosses a locked gate. Quiet on other days unless a DD gate fires.

## Path drawdown policy (locked)
High-water mark (HWM) = peak strategy-owned sleeve NAV since the current active regime started (reset only on verified Mag8 re-engage after a freeze).
- **−25% from HWM (amber):** review card only — current DD, vs QQQ/SPY, distance to −35%. No money move unless owner says yes.
- **−35% from HWM (red freeze):** propose sell of all Laggy8-owned shares only; park proceeds in **SPY** up to current soft cap; soft cap unchanged; Policy A skim applies on that exit (usually $0 if NAV under soft cap). Pre-existing Mag8 lots untouched. Set regime = `frozen_spy`. Stop Mag8 buy cards until re-engage.
- **Re-engage (all required):** regime is frozen; sleeve mark better than **−20% from the freeze HWM**; today is a valid Mag8 rebalance day; owner explicit yes on the normal Mag8 rank card. Then buy the selected Mag8 laggard sized to current soft cap; set regime = `active`; start a new HWM from post-buy NAV.
- Universe-break and 6m-vs-QQQ/SPY gates are **off** (amber notes only if owner asks). No second-trip escalation ladder.

## Steps
1. Run Mag8 laggard rank (full 8-name table) when building a Mag8 card.
2. Run Laggy8 sleeve ledger (strategy-owned vs pre-existing; sleeve NAV vs **current soft cap**; HWM; regime; path DD %).
3. If path DD ≤ −35% and regime is active: build the **freeze → SPY** card (sell strategy-owned only, buy SPY ≤ soft cap). Stop for explicit yes. Do not also propose a Mag8 switch that day.
4. Else if path DD ≤ −25% and regime is active: build the **amber review** card. Stop (unless today is also a Mag8 rebalance day — then attach amber note on the Mag8 card).
5. Else if regime is `frozen_spy`: if re-engage conditions are not all met, stay quiet on Mag8 buys (monthly Mag8 rank may run as watch-only). If all re-engage conditions are met, build the normal Mag8 rebalance card labeled re-engage.
6. Else decide Mag8 path:
   - **Same ticker** as current strategy-owned pick: hold. No sell, no skim, no soft-cap change. Card says hold and stops (unless owner asks a voluntary trim).
   - **Ticker switch** (or first entry): compute realized path below.
7. On a **ticker switch** (Mag8↔Mag8 or Mag8→SPY freeze), after marking strategy-owned sale proceeds (or current NAV if proposing):
   - Soft_cap = last saved soft cap (default start $100,000).
   - Profit = max(0, sleeve_NAV − soft_cap).
   - Skim = 20% × Profit (out of sleeve: taxes / costs / LT capital; stays in brokerage book, not Laggy8-owned).
   - New_soft_cap = sleeve_NAV − Skim (= soft_cap + 80% × Profit). On **freeze to SPY**, soft cap is unchanged (no raise); still compute skim if Profit > 0.
   - Proposed sell = all strategy-owned shares of the old pick only.
   - Proposed buy notional = New_soft_cap for Mag8 switches; for freeze, buy SPY notional ≤ current soft cap after skim.
8. Build one chat card with:
   - Whether today is a valid rebalance day (NYSE + America/New_York), and the saved prior Mag8 month-end signal date
   - Regime (`active` / `frozen_spy`), HWM, path DD %
   - Full rank table (when Mag8-relevant)
   - Selected ticker and why (worst avg rank) or SPY freeze
   - Current sleeve holdings, NAV, **current soft cap**, and (on switch) profit / 20% skim / **new soft cap**
   - Exact proposed sell (ticker, qty, strategy-owned only), skim amount, and buy (ticker, qty or notional ≤ soft cap)
   - Explicit line: pre-existing lots of any overlapping ticker are untouched
9. Stop. Ask for an explicit yes in chat. Do not create an IBKR order instruction until that yes.
10. After yes: create IBKR `create_order_instruction` only (not a silent live order). Send the review URL. After the owner submits, verify order/trade status, then update the trade log (soft cap, regime, HWM, freeze_hwm as needed). Never retry an uncertain submit without a status check.

## Quiet rule
If it is not the first NYSE trading day after the last saved Mag8 month-end (or the month has not advanced), and no path-DD gate has newly crossed: do nothing and do not ping.
