---
name: trading-memory-capture-import
description: "Use this when the user logs an idea, plan, fill, exit, cost or correction by text or voice, or wants to import trade history (exports, notes, screenshots) into their Trading Memory journal."
---

# Trading Memory capture and import
Apply `trading-memory-spec` A, D, E, I (first paragraph), extensions 2-3 and "What tm.py 1.1.0 enforces" (not repeated). First `python3 "$TM_HOME/tm.py" status`; on any problem use `trading-memory-getting-started`.

## Commands (`TM="$TM_HOME/tm.py"`; quote every value: a bare `|`, `&`, `;`, space or `$` breaks the command)

**Log an idea or plan (voice or text).** Extract what you can, then:
`python3 "$TM" capture --text "<verbatim input>" --instrument "SOL" --instrument-class "crypto" --direction "long" --holding-period "swing" --strategy-id "<STRATEGY_ID>" --strategy-version "<N>" --thesis "setup=breakout"`
Link a strategy only if the user names it (`list-strategies`). Add `--thesis "trigger=..."`, `--plan "invalidation=..."`, `"stop=..."`, `"risk_basis=..."`, `"entry=..."` (entry price is always `plan.entry`), `"quantity=..."` only if stated. Perpetuals/futures: record the multiplier (`--multiplier "..."` or `amend --group "context" --field "multiplier"`). Reply with a summary, the missing critical fields reported and the saved ID.

**Per-trade template** (offer when asked how to journal or after beginner onboarding; never required; any line may be skipped, "don't know" = unknown; at most three lines per message; never suggest a risk figure). * = needed for a capture-complete plan. Keys: c.=`--context`, t.=`--thesis`, p.=`--plan`, d.=`--decision`.
Before entry (or when passing): 1 *Market: what, where, spot or leveraged? (`--instrument --venue --market-type`) 2 Long, short or neither yet? (long = gain if price rises) 3 *How long will you hold, on which chart? (`--holding-period`, c.timeframe) 4 Setup and why: what you see, named as in your rules (t.setup, t.why) 5 *Entry: price, and what must happen first (p.entry, t.trigger) 6 *Wrong if: where the idea is wrong, your stop, why there (p.invalidation, p.stop) 7 Targets: where you take some or all profit (p.targets) 8 *Risk: loss if stopped, in your own amount or %; size; adding later? (p.risk_basis, p.quantity) 9 News or events due before you exit? (c.news) 10 Optional: your view and where it flips (p.directional_bias, p.bias_flip_level) 11 Optional: what you expect over your period, incl. doing nothing (p.expectation, p.expectation_period) 12 Decision: TAKE / WAIT / NO TRADE; how sure: low, moderate or high? (d.decision, d.confidence; status planned/deferred/rejected).
While open: 13 Got in: price, size, time, fee (`add-fill`) 14 Changes (added, part-closed, moved stop): what, price, size, why (`add-fill` or `amend`, with `--reason`).
After exit: 15 Exit price(s), size, time, fees, funding, or CSV/screenshot (`add-fill`, `add-cash-flow`, `import-fills`; screenshot `add-evidence --file-ref`) 16 Result: calculated by `close`, never typed; say if it differs from the exchange 17 Followed your plan? yes/partly/no, where not (`reflect --rule-adherence`) 18 Good decision on what you knew then, whatever the result? (`reflect --decision-quality`) 19 What went well; one thing to change (`reflect --notes --provisional-lesson`) 20 Optional: how you felt (amend reflection.feelings) 21 Expectation played out? yes/partly/no, only if written before (expectation_review).

**Ambiguous transcript values** ("fifteen/fifty at one point two") are stored as candidates: `python3 "$TM" capture --text "<transcript>" --ambiguous "plan.quantity=15|50" --ambiguous "plan.entry=1.2|<other reading>"`; after the user answers: `python3 "$TM" resolve "<CLARIFICATION_ID>" --value "15"`.

**Correct or complete** (never silently): `python3 "$TM" amend "<EPISODE>" --group "plan" --field "stop" --value "97" --reason "user moved stop"`; later recollections add `--retrospective`.

**Actual fill** (confirmed only): `python3 "$TM" add-fill "<EPISODE>" --side "buy" --qty "10" --price "100" --fee "1" --fee-currency "USDT" --time "2026-01-01T10:00:00Z"`. Fee unknown: omit `--fee`; confirmed zero: `--fee "0"`; estimate: `--fee-status "estimated"`; another currency than the P&L currency: `--fee-rate "<P&L units per fee unit>" --fee-rate-basis "<source>"`. Wrong fill: `void-fill "<FILL_ID>" --reason "..."` or `correct-fill "<FILL_ID>" --price "..." --reason "..."`.
Costs: `add-cash-flow "<EPISODE>" --kind "funding" --amount "-0.35" --currency "USDT" [--status "estimated"] [--rate "..." --rate-basis "..."]`; perpetuals: record funding or confirm none with `amend "<EPISODE>" --group "execution" --field "funding_status" --value "confirmed_zero" --reason "..."`; fix with `void-cost`/`correct-cost`.
Open without fills only on explicit confirmation: `set-status "<EPISODE>" "open" --user-confirmed --reason "user confirmed entry"`. Closed trades: add `--correction --reason "<why>"` only when the user confirms a correction.

**Target touched, no fill**: `python3 "$TM" observe-price "<EPISODE>" --price "110" --time "<ISO>" --note "target touched"`.
**Close** when flat: `python3 "$TM" close "<EPISODE>"`; report gross, net (or `unresolved`), costs, initial risk and R (or "R unknown") as position P&L.
**Paper trades**: `capture ... --paper` with `--execution "assumptions=..."`.

**Import history**:
1. Columns: source_id,timestamp,venue,instrument,market_type,type,status,side,qty,price,fee,fee_currency,amount,currency,order_id; optional account,position_side (hedge mode),quote_currency,multiplier (timestamps with explicit timezone; convert a copy if needed).
2. Preview: `python3 "$TM" import-fills "<file.csv>" --dry-run`; show detected columns and counts to import, excluded (orders, cancelled, transfers) and uncertain.
3. `python3 "$TM" import-fills "<file.csv>"`; report imported, duplicate, excluded and uncertain rows, `source_totals_by_instrument` and `warnings`.
4. Funding/borrow rows arrive unattributed: ask which trade, then `attribute-cost "<CF_ID>" "<EPISODE>" --reason "..."` (`list-costs --unattributed` shows candidates). No quote_currency column: confirm the P&L currency (`amend ... --group "context" --field "quote_currency"`). `close` flat trades.
5. After a substantial import: `python3 "$TM" backup`; give the verified path.
