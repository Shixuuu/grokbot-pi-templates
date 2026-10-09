---
name: trading-memory-assess-review
description: "Use this when the user asks to challenge or assess a trade idea, asks what happened last time, wants research on a catalyst, or requests a closed-trade, weekly or periodic review, lessons, rule changes or an evaluation of the memory."
---

# Trading Memory assessment, retrieval and review
Apply `trading-memory-spec` A, F-L, the extensions and "What tm.py 1.1.0 enforces" (not repeated). First `python3 "$TM_HOME/tm.py" status`; on any problem use `trading-memory-getting-started`.

## Commands (`TM="$TM_HOME/tm.py"`; quote every value)
**Assess a trade idea**
1. Strategy: `python3 "$TM" show-strategy "<STRATEGY_ID>"` (`--as-of "<ISO>"` for the version then).
2. Retrieve with explicit criteria: `python3 "$TM" retrieve --strategy-id "<ID>" --holding-period "swing" --direction "long" --instrument-class "crypto" --compare-regime "<regime>" --compare-catalyst-type "<type>"`. Report `eligible_cohort_size`, `cohort_outcomes` and each case ID with its differences. `no_history`: no lessons are returned; make no personal-history claims. Use only `lessons_in_scope` (scope, uncertainty, test plan, limitations, any `qualification`, e.g. deleted support); mention `lessons_historical` only as retired/contradicted; `lessons_excluded` are out of scope. `open_context_only` is exposure context. Never quote similarity scores.
3. Save the evidence used: `python3 "$TM" add-evidence --episode-id "<EP>" --url "<URL>" --source-type "official" --published-at "<ISO>" --finding "..." --claim "..." --verification "verified"` (or `unverified`; `--data-as-of`, `--event-at`, `--date-kind "estimate"`/`"scheduled_official"`, `--rumour`). `evidence-status "<ID>"`: STALE, UNVERIFIED or SOCIAL is never a current fact.
4. Answer in the section H format (plus bias/flip level if recorded, extension 2) and save it: `python3 "$TM" amend "<EP>" --group "decision" --field "assessment" --value "..." --reason "assessment"` and `--field "recalled_ids" --value "EP-...,EP-..."`.
5. Linear sizing (H): compute with code, show inputs.

**Evaluation at time T**: `python3 "$TM" retrieve ... --as-of "<T>"` (outcomes, `reflection_as_of` from events, lesson and strategy versions as at T; later ones excluded and counted).

**Closed trade**: `python3 "$TM" pnl "<EP>"` or `show "<EP>"`; state incomplete metrics (`completeness`, `unresolved`). Then `python3 "$TM" reflect "<EP>" --decision-quality "sound" --rule-adherence "followed" --execution-quality "..." --alternative-explanations "..." --provisional-lesson "..."` (never edits the outcome). Post-session review: extension 4.

**Lessons**: `python3 "$TM" add-lesson --proposition "<exact proposition>" --scope '{"strategies":["<ID>"],"holding_period":"swing"}' --supporting "EP1,EP2" --contradicting "EP3" --status "hypothesis" --uncertainty "..." --test-plan "..."`; revise with `--lesson-id "<ID>"` (new version); cross-strategy: `--cross-strategy-justification "..."`.

**Rule changes**: `add-strategy --strategy-id "<ID>" --entry-rules "..." --reason "..."` proposes a version (`--clear "risk_rules"` blanks a field); `--user-approved` only after explicit approval.

**Periodic review**: `python3 "$TM" summary [--strategy-id "ID"] [--start "2026-03-02" --end "2026-03-08" --tz "Europe/London"]` (cohorts by strategy, holding period, real/paper/skipped and currency; gross and net separate, `excluded_incomplete_net`; R with denominator; `included_ids`/`excluded_outside_period` define the period; a date-only end includes the whole day). Save: `python3 "$TM" add-review --scope '...' --included "..." --exclusions "..." --calculations "..." --findings "..." --proposed-changes "..."`.

**Maintenance**: `export` (JSON + CSV + Markdown, hash-verified); `backup`; `restore`/`migrate` per `trading-memory-getting-started` Step 2. Delete after confirming scope: `delete --episode-id "<EP>"` or `delete --all --confirm "DELETE ALL MY TRADING MEMORY DATA"`; it lists lessons/reviews still citing the ID and does not remove local backups/exports or provider backups.
