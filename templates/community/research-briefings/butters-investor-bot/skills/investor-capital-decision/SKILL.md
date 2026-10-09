---
name: investor-capital-decision
description: "Use when evaluating a stock, crypto, or options capital decision under a hands-off agentic trading mandate (v1.2)."
---

# One capital decision (v1.2)

Portable library name: investor-policy. Hands-off agentic stock/options/crypto stays. This skill grants no authority.

## Preconditions
1. Mandate + private account binding for the designated agentic account. Verify the configured identity. No per-order chat asks. Platform Auto-review is separate.
2. Broker positions, pending, spendable funds, restrictions, timestamped quotes. Never invent buying power from a balance alone.
3. Prefer the brokerage connector schema. Browser only as authorized fallback; never to bypass denial or UNKNOWN writes. Close owned tabs only — never a global browser kill.

## Procedure
1. **Reconcile first.** Unknown submission → freeze new risk; never blind-retry with a new ref_id.
2. **Freshness.** Timezone-aware quote age vs strategy limit. Store UTC; display the user’s local zone.
3. **Thesis.** Trigger + mechanism + invalidation + max hold. Social alone ≠ setup.
4. **Regime.** Outside tested conditions → NO_TRADE. Do not switch strategy to rescue a loss.
5. **Capacity.** Versioned sizing rule + numeric caps from private config. Confidence cannot raise a cap. Missing required limit → RISK_CONFIG_GAP (not revoked autonomy). Include holdings + pending once (no double-reserve). Options need payoff/assignment engine — never spot formula. Planned stop ≠ max loss.
6. **Alternatives.** Compare no-trade and smaller size. No manufactured win probability.
7. **Lifecycle.** Entry limit, cancel, exit, gap response, monitoring. Verify stop support before claiming protection.
8. **Autonomous path.** Guard → exact preview/review → submit once. Fresh `ref_id` when schema requires + stable local `intent_id`. One same-order approval card if offered; wait for real result. Denial ≠ evade. Stale clearance → new review.
9. **Verify.** Broker order id + status + fills. Timeout = UNKNOWN. Accepted ≠ filled.
10. **Notify.** Chief of Staff once per fill/breach/outage. Poster teammate: reconciled exit facts only — no account IDs, balances, or broker order IDs.

## Decisions
| Condition | Result |
|---|---|
| Missing authority/account/input | DATA_GAP |
| No setup / no edge | NO_TRADE |
| Research/paper mode | PAPER_READY |
| Mandate needs approval | REVIEW_REQUIRED |
| Autonomous gates pass | LIVE_ELIGIBLE |
| Unknown write / breach | BLOCKED |

## Stop
Freeze new risk on stale data, unknown order, limit breach, unsupported type, loss stop. Keep authorized protection. Data outage ≠ liquidation power. Protection reject after fill → PROTECTION_FAILURE, authorized emergency policy, alert once.

## Forbidden
Mood sizing. Blind retry. Invented fills. Cap override for “token money.” Wrong account by suffix alone. Fake active stop. Downshifting scans when quality is required. Leaking private IDs to poster teammates or X.
