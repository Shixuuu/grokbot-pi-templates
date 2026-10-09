---
name: sharp-desk-card
description: "Use this when producing, editing, or settling a Sharp Desk daily betting card or ticket ledger (scan, ticket, settle, or recap)."
---

## Outcome
Own a review-ready daily card and an accurate ticket ledger. One job per run: scan, ticket, settle, or recap — not mixed unless asked.

## Sources (prefer in order)
1. Owner-attached files (odds exports, model sheets, last night's card)
2. Live book boards the owner named (screenshot, URL, or CSV) — including last_working_board_url in CONFIG
3. Public consensus / opening / close when a reachable page or API exists
4. Official injury, weather, and lineup reports
5. Named model or public projection the owner approved

Never treat training-data memory as a current line, injury, or weather report. If The Odds API or another odds connector is configured, use it; if not, say so and work from paste or saved URL. Do not invent a board. If you cannot see a current board, say **NO BOARD** and stop.

## Sequence
1. Restate sport, slate window, unit/min EV (from CONFIG defaults when missing), and mode — briefly.
2. Pull or accept the board. Timestamp it. Save working URL to CONFIG. Lines older than 3 hours in a trading window are **stale** unless marked live.
3. De-vig two-way markets before talking about fair.
4. Compare market implied to the owner's model or a stated consensus method. If there is no model, mark **market-only** and do not pretend you have an edge.
5. Filter: min EV after juice (default 3.0%), juice worse than −130 skip unless explicit reason, injury/weather veto, stale-line risk.
6. Size: default max 1.00u per play; if bankroll known, also never more than 2% of bankroll on one ticket; quarter-Kelly only when bankroll + edge inputs exist.
7. Output the card. Separate facts, inferences, and items waiting for approval.
8. Log only tickets the owner marks **approved** or **fired**.
9. After results, settle. Record close when available. Compute CLV. Do not fill a missing close with the open.

## Math (unless owner overrides in writing)
- American → implied (no-vig later): Favorite (negative): p = |a| / (|a| + 100); Underdog (positive): p = 100 / (a + 100)
- Two-way no-vig: split the hold proportionally
- EV% on the price you can actually get
- Rounding: odds as posted; EV% to one decimal; units to two decimals
- Push = 0u; Void = remove from record, note why
- If math and narrative disagree, math wins — say so

## Card format
```
SHARP DESK — {SPORT} — {DATE} {TZ}
Bankroll {B} | Unit {U} = ${$} | Min EV {X}% | Mode {scan|ticket|settle}
Board as of {timestamp} | Source {books / file / api / url}

PLAYS
# | Event | Market | Side | Price | Book | Imp% | Fair% | EV% | Stake u | Status
...

PASSES (short: why not)
...

VETOES (injury / weather / stale / no price)
...

NOT FOUND
...

WAITING FOR APPROVAL
Fire these? Reply: approve #, edit #, or pass.

LEDGER (season)
Record | Units | CLV avg (when closes exist) | Open risk
```

If bankroll / $ unit unknown, write `paper | units | Min EV 3.0%` and continue.

Status: watch | approved | fired | settled-w | settled-l | push | void

American odds in the ticket line. Lead with the card, then the work.

## Files
Durable files only under `/workspace/sharp-desk/`: CONFIG.md (include last_working_board_url), LEDGER.md, ledger.jsonl, cards/YYYY-MM-DD.md, closes/YYYY-MM-DD.md.

## Approval boundary (L1 Draft)
Never: place a wager; send money/crypto/gift cards; click bet / submit slip / confirm wager; store book passwords, 2FA, or session cookies; raise a stake after a loss; present unsourced win probability as fact; call anything a lock / guaranteed / risk-free; build a parlay unless asked for correlated-parlay math with the correlation assumption shown; scrape a book against its terms.

Ask first: changing unit size or min EV; adding a sport or market type; enabling a scheduled routine; using a login on the shared computer; marking paper as real-book **fired** (owner must type fired).

Never invent odds, books, or CLV. Never hide losing tickets. Never average opposite models into a fake fair without saying so. Never encourage chasing or martingale.
