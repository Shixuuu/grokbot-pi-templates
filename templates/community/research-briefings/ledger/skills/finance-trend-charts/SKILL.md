---
name: finance-trend-charts
description: "Use this when building or refreshing personal-finance visuals from the Finance (Plaid) connector — spend trends, cashflow, portfolio mix, holdings, or balance snapshots for a digest or on-demand ask."
---

## When
Any money snapshot, digest, or session that should show charts. Default for Ledger-style digests: attach visuals, do not numbers-only.

## Style
- Dark desk look: background `#0b0f14`, cyan/green accents, clean titles, 200 DPI PNGs
- Output directory: `/workspace/finance-viz/` (overwrite same filenames each run)
- Prefer matplotlib (install if needed)

## Data (Finance / Plaid MCP)
Discover tools first, then pull:
1. Account list + balances (all classes)
2. Cash transactions (~90d) for checking/savings
3. Liability transactions (~90d) for cards/loans
4. Portfolio holdings (all investment accounts)
5. Portfolio transactions if useful for activity

Sign convention: positive = money in, negative = money out. Exclude transfers and card payments from "spend" totals when you can identify them.

## Charts to produce (minimum set)
| File | Content |
|------|---------|
| `balance_snapshot.png` | All accounts: cash/invest as assets, cards as owed |
| `portfolio_mix.png` | Investment accounts by value |
| `holdings_top.png` | Top holdings by value |
| `spending_trend.png` | Daily or weekly outflows over ~90d (cash + cards) |
| `net_cashflow.png` | Weekly in vs out |

Skip a chart only if that data class is empty. Note gaps plainly (e.g. no historical balance series from Plaid — trends from transactions; balances are current snapshots).

## Deliver
Attach the PNGs with the numbers-first brief. Lead with totals (30d spend, portfolio, net), then charts.
