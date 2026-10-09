---
name: dynamic-dca
description: "use this when running or explaining the scheduled dynamic DCA buy (more on soft markets, less when hyped) on Coinbase spot"
---

# Dynamic DCA — buy more on soft markets, less when hyped

Run this on each scheduled fire for a Coinbase **spot** DCA that always buys (within bounds), sizing from price vs a short recent average, plus small volume and fear/greed nudges.

## When to use
- Recurring DCA into a configured Coinbase spot pair with price-aware sizing.
- Not for flat fixed-amount DCA with no scaling, not for futures/margin, not for non-Coinbase venues unless an equivalent connector exists.

## Config (from memories — never invent)
Resolve before trading: product_id, portfolio, base_amount, floor_amount, cap_amount, monthly_cap, cadence/lookback, authorization mode (LIVE pre-authorized vs preview-and-ask), min funding balance / cash buffer.

Lookback defaults (match candle unit to cadence):
- Daily → average of last **7 completed daily** closes
- Weekly → average of last **4 completed weekly** closes

## Sizing each run
1. Pull completed candles for the lookback; average closes → recent average.
2. Current best **ask** for product_id.
3. ratio = recent_average / ask. multiplier = clamp(ratio, 0.5, 2.0).
4. amount = base_amount * multiplier.
5. **Volume nudge (±10–20%)**: compare recent period volume to the same lookback’s average volume. Quiet/soft → nudge amount up a little; hyped/high volume with strength → nudge down a little. Never let volume alone dominate price.
6. **Fear/greed nudge (small, like volume)**: fetch the matching public index — crypto fear & greed for crypto pairs, stock fear & greed for equity pairs. Extreme fear → nudge buy up a little; extreme greed → nudge down a little. Keep this secondary to price. If the feed fails, skip the nudge and continue the buy.
7. Clamp dollars to [floor_amount, cap_amount].
8. Apply monthly remaining cap and available funding balance; if below exchange minimum, **skip** and say why (only skips: low cash, monthly cap, broken quote, missing data with no usable fallback).
9. Missing candle data → fall back to base_amount (still subject to clamps/caps) rather than failing the whole run.

Intuition: buy more when things look bad (price and volume soft, fear up); buy less when hyped (price and volume up, greed up); always buy when cash and monthly room allow.

## Execution
1. Guardrails first (balance, monthly MTD spend on this product).
2. Compute amount as above.
3. Preview order (fees/slippage). If previewed price is wildly off the ask (e.g. >10%), skip and notify.
4. **LIVE mode**: place spend-based market buy with a fresh idempotency key. **Preview mode**: ask before placing.
5. Verify fill by order id; on ambiguity look up again — never blindly place a second order.
6. TLDR the owner: recent average, ask, ratio, amount, volume/fear-greed nudges used (or skipped), fill or skip reason, MTD spend. Zero HITL mid-run in LIVE mode (ambiguity → pick the clamped amount and proceed; tool flake → retry once then continue).

## Hard rules
- Spot only; only the configured pair and portfolio.
- Never exceed per-run cap or monthly cap.
- Never invent prices, balances, or fills.
- No x402 / ETF / Glassnode steps.
- Do not widen clamps or change asset/cadence without the owner explicitly changing config.
