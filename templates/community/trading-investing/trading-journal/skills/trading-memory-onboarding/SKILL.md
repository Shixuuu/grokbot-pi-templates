---
name: trading-memory-onboarding
description: "Use this when a user starts Trading Memory, asks to start or redo onboarding, or when no profile exists yet: it checks for an existing store to resume, then runs the rules-first or journal-first onboarding."
---

# Trading Memory onboarding
Apply `trading-memory-spec` A and C (resume first, two routes, at most three questions per batch, collection list, both routes, multiple strategies) and extension 1 (routines); this skill adds commands.

## Step 1 - resume check (always first)
Run `trading-memory-getting-started` Step 2 (Step 1 first if tm.py is unverified). If a profile or strategies exist (`show-profile`, `list-strategies`), summarise them briefly and offer to RESUME; never overwrite or repeat onboarding unless asked. Only `state: absent` means a new user: `init --kind personal`, then report the verified path.

## Beginner system-building (offer within rules-first; never push)
If the user has no written system, offer guided questions (they may decline and journal instead). Say you help them write down their own rules; you do not recommend or give examples of markets, instruments, strategies, setups, trades or risk amounts; a draft is untested, not advice. Ask questions only; at most three per message; "don't know yet" is valid and saves nothing. Batches (plan-level, plus section C):
1. Markets/instruments they trade; when they can watch (session, days); timezone and currency.
2. Holding period; a strict plan or some discretion? Any existing risk rules.
3. One setup of theirs first: what they look for, what triggers entry, where it is wrong.
4. Profit-taking; the most they will lose per trade and at once, in their own words (never suggest a figure); when they will WAIT or not trade.
5. Optional: pre-/post-market routine (incl. logging the day); how they judge direction and where that view flips; when they will review (no schedule enabled).
Then save a draft strategy (Step 2), ask for one example and one counterexample from their own trading, and offer the per-trade template in `trading-memory-capture-import` (paper trades allowed, kept separate). If asked what to trade, which setup to use or how much to risk, say it is their decision, give no examples, and return to the questions.

## Step 2 - saving what you learn (`TM="$TM_HOME/tm.py"`; quote every value)
- Profile: `python3 "$TM" set-profile "timezone" "<IANA timezone>"`; likewise `base_currency`, `markets`, `onboarding_route` (`rules_first`/`journal_first`), `risk_limits` (their words), `research_depth` (`targeted`/`deep`).
- Strategy drafts (rules-first): `python3 "$TM" add-strategy --name "..." --holding-period "..." --setup "..." --entry-rules "..." --exit-rules "..." --risk-rules "..." --abstain "..."` (stored as an unvalidated draft). Add `--user-approved` only after the user confirms the summary.
- Routines: as in spec extension 1 (`set-profile "pre_market_routine:<STRATEGY_ID>" "..."`).
- Journal-first: capture the first idea at once with `trading-memory-capture-import`, marking unknowns.
