---
name: merit-claim-jev
description: "Use on every Merit Friday claim desk wake (or manual Merit claim pass) to score one claim with Claim Jev only — never a trading Jev card."
---

# Merit Claim Jev

## When
Every Merit Friday claim desk wake (cron or manual) for each Watch reopen and each new claim candidate. Not for trading looks, heat sheets, sports betting, or any portfolio seat.

## Required inputs and access
- Claim sentence (exact words under test)
- Lane: civic/power | science/UAP/hidden-tech | meaning
- Primary source if any (official page, paper, text, patent, site) — open web / official first
- Prior Watch row if reopening (watch index + claims/<id>.md)
- TypeSafe Jev how-to for key hygiene only (reference). Log attempts to an ops jev-calls dated jsonl with seat merit and skill merit-claim-jev.
- Never brokerage, market-data trading endpoints, heat sheets used as picks, or trading look-run files.

## Sequence
1. State the exact claim under test (quote the sentence).
2. Separate primary (document / paper / official residue / text / site) from inference (thread, podcast, YouTube, social). Leads are not evidence.
3. For meaning / alt-history: score what the passage or site says vs what a thread says it says. Textbook silence is a residue flag only if a primary exists.
4. Ask Claim Jev (typed card — different from trading Jev):
   - exact claim
   - primary vs inference
   - official residue (yes/no + what)
   - mundane fit (ordinary explanation quality)
   - media leap (yes/no + where)
   - incentive (who gains if believed)
   - grade: documented | incomplete | leap | closed
   - act: watch | drop
   - smell: low | med
5. Fail closed on a bad/missing TypeSafe key: log Jev BLOCKED: key; leave grade incomplete and act watch if a primary still exists, else skip the new claim. Never invent a score.
6. Write/update claims/<id>.md and the Watch table row. Cap 8: if full and a new watch would exceed, flag the weakest for the owner — do not auto-kill residue.
7. Drop only if: invalidate-condition met, viral sentence false-as-stated, artifact is a known fake, or the owner drops it. Never silent-evict for age. Grade may stay incomplete.

## How to validate
- Card has every field above; grade in {documented, incomplete, leap, closed}; act in {watch, drop}; smell in {low, med}.
- No trading language: no chart bar, vehicle, catalyst-swing, heat sheet, brokerage, or ticket.
- Primary vs inference labeled; between-the-lines in the brief marked inference.
- Related files: Merit brief and watch index agree with this card. Trading owner files and trading Jev skills stay unchanged by this skill.

## What to return
One Claim Jev card object (or markdown block) plus act and updated Watch fields. Brief line: claim / source / score / between-the-lines (labeled) / watch-or-drop.

## What requires approval
Dropping a Watch row when invalidate-condition is unclear (ask the owner). Sharing any card or number with a trading seat (never). New clock, spend, or live-prompt growth (never from this skill).
