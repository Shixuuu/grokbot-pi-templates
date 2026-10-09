---
name: first-ledger-trade-rules
description: "use this when proposing, approving, or executing First Ledger token buys/sells on a lab wallet — size caps, HITL buys, daily +5% auto-sell with +3% slip buffer (~+8% mark trigger), lore-first entries, and hard out-of-bounds"
---

# First Ledger trade rules (lab discretionary)

Policy for **small discretionary XRPL token buys/sells on First Ledger** using a dedicated lab/device wallet. Complements the First Ledger lab-buy coach; does not replace human-in-the-loop for buys and unlock gates.

Not financial advice. Hobby / lab funds only. Creator not liable for what importers do with copies, keys, trades, or losses.

## Identity

- Trade only from the **named lab device wallet** (e.g. your lab device wallet). Never phone master wallets, never personal/xBoost/main trading wallets unless the owner explicitly renames the lab target.
- Truncate addresses in anything shareable. Do not publish the device address without approval.
- Public voice / tweets only after the owner approves draft + handle.

## What “trade” means

- Small **discretionary dust buys** and **scheduled / rare exits** — not a tick loop, sniper, DCA bot, or always-on scrape.
- Every **buy** needs an owner **yes** naming **token + max XRP** (or clear approval of a written proposal) before the bot clicks confirm.
- Pre-approving a *size band* (e.g. “~1 XRP dust”) is fine. Unsupervised buy confirms are not.
- **Sells** may auto-run only under the Daily bag check rule below (or when the owner explicitly orders a sell).

## Size caps (defaults — owner may override in chat)

| Rule | Default |
|------|---------|
| Typical buy | ~1 XRP |
| Allowed band per buy | 0.5–2 XRP unless owner says otherwise |
| Soft daily new-buy cap | 5 XRP |
| Spendable floor after buy | ≥3 XRP left (reserve + buffer) |
| Max distinct token lines open | 8 |

If spendable XRP would fall under the floor, refuse the buy and say so.

## Entries (when the bot may propose)

Prefer **lore / narrative** XRPL memes the owner already cares about (community receipts, culture orbit) over random pumps.

Before any buy, show:

1. Ticker (and issuer if ambiguous)
2. Why in 2–4 sentences (not “number go up” alone)
3. Proposed size in XRP
4. Rough remaining spendable XRP after

Skip / refuse when:

- No clear ticker/issuer match on First Ledger
- Token list empty / UI broken / book unusable
- Thesis is only price action with no owner interest
- Cool-down still active

**Cool-down:** ≤30 minutes between buys unless the owner overrides.

## Exits

- Default between checks: **hold**.
- **Daily bag check (owner-enabled):** once per weekday morning, read holdings **once**.
- Exit threshold is **not** raw +5% on the mark alone. Defaults:
  - **Target edge:** +5% vs recorded entry cost in XRP
  - **Slip buffer:** +3%
  - **Mark trigger to even open a sell:** mark ≥ entry × 1.08 (~+8%)
- Before confirming the sell, check the sell quote / expected XRP out. If expected fill would be **under entry cost**, **do not sell** that line — leave it open and note the miss (mark said go, fill would not clear entry).
- If mark ≥ trigger and expected fill ≥ entry, **auto-sell** the entire line back to XRP on First Ledger. Notify the owner what sold and whether fill cleared entry. Stay silent if nothing qualifies.
- If entry cost is unknown, set today’s value as baseline and **do not sell** that line on that run.
- Manual path: owner can still ask for a sell anytime; also flag once if a line is roughly **>3×** entry (even mid-day) and wait for yes unless they already enabled auto-sell for that case.
- No trailing stops, panic sells, average-down, or continuous price scraping. One scheduled check per day max unless the owner overrides.
- Unlock / passphrase / Google gates still stop the bot — ping the owner; do not invent credentials.

## HITL gates

Owner (or their human) must handle:

1. Lab email / Google unlock (password, 2FA, captcha)
2. Device wallet unlock / passphrase
3. Funding / activation with lab XRP
4. Approve each **buy** (token + size) before confirm
5. **Sells:** auto under Daily bag check when session is unlocked; otherwise human unlock first

Bot drives the UI and coaches; it does not invent passphrases or skip unlock gates.

## Ops

- Optional screen recording for public build receipts — ask before starting if unclear.
- Tweets/replies only from an approved draft; never auto-post trades.
- Log private lab receipts in memory (ticker, size, rough fill, truncated wallet label, **entry cost in XRP** for the daily check). Never put full seeds or full addresses in public artifacts.

## Out of bounds

- No leverage, unknown bridges/dapps, or moving lab funds off First Ledger without a named destination from the owner
- No copying other wallets tick-for-tick
- No standing “keep buying until X” / “buy every dip” orders
- No unsupervised sniping of new listings
- No mixing lab wallet with personal trading narrative in public posts without scrubbing
- No multi-check / tick-loop scrapes “to catch the top”

## How to use with lab-buy

1. Read this policy first when the owner wants to trade or “play on First Ledger.”
2. Check holdings + spendable XRP.
3. Propose under Entry rules (or take their named ticker).
4. Wait for explicit yes (token + max XRP).
5. Run First Ledger lab buy (or sell path) with HITL as required.
6. Record receipt including entry XRP cost; respect cool-down and daily cap.

## Related

- First Ledger lab buy — end-to-end dust trade coach
- First Ledger email account — login + device wallet
- XRPL web lab limits — phone vs bot vs device wallet
- XRPL AI lab stance — no tick-loop trading; lab receipts
