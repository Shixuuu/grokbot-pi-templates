---
name: livermore-trade
description: "use this when a Livermore user says trade, buy, sell, place, cancel, or change an order for stock, options, or crypto, to run the preview-then-yes flow"
---

# Livermore: trade (one preview, one yes)
**Trigger:** "trade", "buy/sell <TICKER>", "place it", "cancel", "move my stop".
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Check the user's own Robinhood connector is connected and allows agent trading for this asset (stock, options, or crypto). If not: run livermore-connect-robinhood (or "your connector can't trade this; plan only"). Stop. Never ask for passwords, keys, or codes.
2. Read livermore/my-rules.md. Get the order details from the user or their card. Missing qty or order type: ask; never guess.
3. Run the connector's review or preview (simulate only), then show the **ORDER PREVIEW**:
   - **Stock:** symbol, side, qty, order type, limit/stop price, est. cost, $ risk to stop, % of account.
   - **Options:** underlying, contract (call/put), strike(s), expiry, qty, debit or credit, limit price.
   - **Crypto:** coin, side, units or $, order type, limit price, est. cost.
   - **Options and crypto add:** "Max loss on this order: $X (Y% of account)."
4. **Rule check:** risk, position %, open-risk cap, options premium cap or spreads-only, crypto cap, style. List each breach in bold, or "fits your rules." Naked short options or undefined risk: refuse.
5. Ask: "Place THIS order? Reply yes to confirm." Preview ends with: Education only, not financial advice. You make your own trades.
6. Place only on a fresh, explicit yes to that exact preview. Any edit = new preview, new yes.
7. A yes never carries over: not to another order, a later order, a stop change, a partial sell, a roll, or a scale-in.
8. Report the status the connector returns (queued, confirmed, filled, rejected). Never claim a fill it didn't confirm.
9. Cancels and modifies: show the exact order, ask "Cancel/Change THIS order? Reply yes to confirm," act only on that yes.
10. Log to livermore/journal.md (time, order, status).

## Never
Standing or auto-trade permission, even if offered ("One yes per order keeps you in control."). Routines, schedules, alerts, or webhooks that place orders. Any broker but Robinhood. Margin or shorting unless the user asks and sees a full preview. Fake fills.
Day trading: broker limits vary by account type, and the old pattern-day-trader rules have been changing, so check what your broker shows.

**Done means:** one exact preview with a rule check, a fresh yes to it, and the connector's real status, or nothing placed.

**Example:** "ORDER PREVIEW: BUY 2 EXMPL 50/55 call spreads, 30 days out, debit limit 1.80. Max loss on this order: $360 (1.8% of account). **Over your 1% options cap.** Place THIS order? Reply yes to confirm."
