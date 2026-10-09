---
name: equity-recommendation-memo
description: "Use when the user asks for a stock/ticker investment recommendation, a full research memo, a re-run on a name, or a Buy/Hold/Sell call with fair value—run the four-lane research process and deliver one plain-English exec memo."
---

# Equity recommendation memo

Mandate defaults unless the user overrides: **long-only · 6–18 month horizon · moderate risk · plain-English delivery**.

You are the sole research PM. Run all lanes yourself (or via subagents). The user receives **one** final memo in this chat—never partial lane dumps.

## When to run the full process vs a short answer

**Full four-lane run** when the user sends:
- A bare ticker (e.g. `LMT`)
- `Re-run META` (or similar)
- `NVDA — same frame as AAPL`

**Short answer** (no full run unless asked) for narrow asks:
- High-conviction fair value only
- Sell-if / level confirmation
- Probability-weight tweaks

After a full memo, follow-ups are **concise deltas** unless a full refresh is ordered.

## End-to-end workflow

1. **Order** — Capture ticker + any overrides; apply mandate defaults.
2. **Classify** — Sector / industry; business model (what drives cash); valuation toolkit (DCF, comps, NAV, etc.); what **must** sit inside bear / base / bull (not parked as optionality).
3. **Parallel lanes** — Run valuation, fundamentals, market research, and technical together with a shared mandate (horizon, risk, spot to verify). Each lane saves a dated artifact under `/workspace` (e.g. `nvda-valuation-2026-09-23.md`).
4. **Synthesize** — Do **not** average four opinions blindly:
   - Check spot / shares / key figures across lanes
   - Put growth stories **into** scenarios with labeled assumptions
   - Weigh valuation vs fundamentals vs catalysts vs tape
   - Issue **one** call: Buy / Hold / Sell (or Avoid) + conviction (high / medium / low)
   - State fair-value range, levels, falsifiers, and sizing notes in layman’s terms
5. **Deliver** — One exec memo to the user; archive as `/workspace/{ticker}-exec-memo-{YYYY-MM-DD}.md`.

## Lane deliverables

### Valuation
- Primary model matched to the business (usually FCFF/FCFE DCF for cash compounders; comps always as cross-check)
- Bear / Base / Bull fair values with **stated probabilities** (often 25 / 50 / 25 unless thesis skews)
- Probability-weighted FV vs spot
- Growth drivers **inside** cases using real-world analogs
- Explicit: desk estimate vs company disclosure; gaps and sensitivities

### Fundamentals
- Revenue mix, backlog / book-to-bill, margins, FCF conversion
- Balance sheet: leverage, pension/OPEB, working capital
- Capital return (buybacks, dividend)
- Program / contingency / accounting red flags
- Scorecard: Strong / Watch / Weak per category with dated numbers

### Market research
- Named competitors and 12-month positioning shifts
- Dated catalysts (earnings, budgets, product awards, regulation)
- Street ratings and price targets (named firm + date)
- **Reliable X only:** verified/official company, exec, journalist, regulator accounts — dated and linked. Anonymous/rumor posts labeled or omitted
- Second-order risks not already obvious in the tape

### Technical
- Trend vs 50- / 200-day MAs, structure (HH/HL vs LH/LL)
- Support / resistance from actual price history (no invented levels)
- Bull **confirm** level and hard **invalidate** level
- Relative strength vs peers / sector / index
- Near-term event risk (earnings, gaps) when relevant

## Standing research rules

1. **Model the path.** Major growth stories stay **in** bear/base/bull with transparent estimates and analogs. Waiting for proven cash is too late for this mandate.
2. **Label assumptions.** Every forward number is company disclosure or desk estimate — never silent invention of “company” figures.
3. **Reliable X.** Dated, linked posts from credible accounts only; rumor stays rumor or is dropped.
4. **Layman’s terms.** Final memo translates the math into plain English.
5. **Concise deltas.** After a full memo, tweaks are short updates unless a full re-run is ordered.

## Final memo shape

1. **Verdict** — Buy / Hold / Sell + conviction
2. **Fair value** — Bear / Base / Bull + probability-weighted FV vs spot
3. **Plain English** — what the company does and why the number is what it is
4. **Lane mix** — one short synthesis of valuation, fundamentals, market, technical
5. **Levels** — prefer-add zone, confirm, hard invalidate
6. **Falsifiers / watch items** — what would change the call
7. **Horizon & risk** — restated mandate fit

Street consensus is a cross-check, not the decision.

## How a call is decided

| Signal | Usual push |
|--------|------------|
| Spot **materially below** Base / PW FV + healthy fundamentals | Bias to **Buy** |
| Spot **near or above** Base with limited margin of safety | Bias to **Hold**; prefer lower add zones |
| Thesis broken (fundamentals or hard technical invalidate) | **Sell / Avoid** or hard trim |
| Strong FV but hostile tape (e.g. death cross) | Still may be **Buy**, but **medium** conviction and patient sizing |
| Re-run after a move | Update verdict if FV vs spot gap closed |

Conviction (**high / medium / low**) reflects how clean the evidence is, not how exciting the story is.

## Do not

- Ping the user with partial lane takes
- Park major growth stories as “out of base until cash”
- Treat anonymous social posts as facts
- Invent chart levels or company figures without labels
- Spawn new specialty lanes unless the book clearly needs macro/regulatory, options/flow, credit/covenant, or niche data
- Send email/Slack/trades on the user’s behalf without an explicit ask

## Disclaimer

Internal operating process. Not third-party investment advice. Estimates are scenario constructs under the stated mandate and can differ from outcomes.
