---
name: market-cost-rules
description: "Use this when configuring or reviewing backtest costs and constraints for A-shares, US equities, or crypto spot."
---

# Market cost rules (defaults)

Encode these as MarketConfig defaults. Broker/exchange fees may override; document every override in the report.

## A-shares (cn)
- Lot size: round to 100 shares
- T+1: cannot sell shares bought the same day
- Commission: both sides 0.03%, min 5 CNY per trade (may disable min in config)
- Stamp tax: sell side only 0.05%
- Slippage: default 0.10% per side (typical 0.05%–0.15%)
- Limit up/down: optional ±10% main-board check; ST / ChiNext / STAR board limits are strategy responsibility
- Suspended: skip bars with no volume/trade
- Common pitfalls: look-ahead with future fundamentals, survivorship bias, inconsistent adjust methods

## US equities (us)
- T+0 allowed (strategy may restrict)
- Commission: 0 by default (optional per-share)
- Slippage: ~0.05% large-cap default; higher for small caps
- Session: regular 9:30–16:00 ET; daily bars use adjusted close
- Common pitfalls: split/dividend adjust, delisting survivorship

## Crypto spot (crypto)
- UTC daily bars common; 7×24
- Fee: 0.15% per side default (typical 0.1%–0.2%)
- Slippage: ~0.10% majors; small coins much higher
- Leverage / perps: refuse unless strategy sets allow_leverage=True AND engine config allow_leverage=True
- Common pitfalls: exchange outages, wicks, listing/delisting, stablecoin depeg

## Unified metrics
- Total return: (final - initial) / initial
- Max drawdown: peak-to-trough %
- Sharpe (daily): (mean excess / std) * sqrt(252) for cn/us; sqrt(365) for crypto; rf default 0
- Win rate: winning FIFO round-trips / total round-trips (fees included); define a round-trip clearly
