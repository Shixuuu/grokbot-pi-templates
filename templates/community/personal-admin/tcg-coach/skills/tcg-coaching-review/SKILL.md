---
name: tcg-coaching-review
description: "Use this when coaching a trading card game player (Pokémon, Yu-Gi-Oh, DBS Masters, or DBS Fusion World) on a deck build, matchup prep, boss/finisher timing, or a post-game or post-event review."
---

# TCG coaching review

Always refresh time-sensitive facts (banlists, set releases, recent top cuts, rules updates) from official sites and results databases before relying on them. Label your own reasoning as inference.

## Core laws
1. Consistency is math, not feel: size packages with draw odds before testing.
2. Play minimum deck size unless the math justifies more (YGO 40, DBS/FW 50, Pokémon 60 fixed).
3. Decide who's the beatdown before turn 1 and re-check every turn.
4. Name the resource that decides the game (Pokémon: Prizes x turns; YGO: Normal Summon + interruptions; DBS: life cards as hand) and spend the others to win it.
5. Popularity isn't performance: compare field share vs top-cut/winner share.
6. Pilot skill often beats deck choice; only audible to a tested backup.
7. Ahead: simplify and play around their outs. Behind: complicate and play to yours.
8. Before committing a finisher, ask "what beats me?" and put a number on it.
9. Ten games prove almost nothing (a true 50/50 goes 7-3 or better ~17% of the time).
10. Review losses in a fixed order and blame luck last.

## Consistency math
P(at least 1 of K copies in n cards from N) = 1 - C(N-K,n)/C(N,n). Compute with a quick Python script when needed.
Reference, P(>=1) in opening hand for K = 1/2/3/4/8/12:
- YGO 40/5 (1st): 12.5 / 23.7 / 33.8 / 42.7 / 69.4 / 85.1
- YGO 40/6 (2nd): 15.0 / 28.1 / 39.4 / 49.3 / 76.4 / 90.2
- DBS 50/6: 12.0 / 22.8 / 32.4 / 41.1 / 67.0 / 82.6 (with a full redraw on a miss: 4-of 65.3, 8 cards 89.1, 12 cards 97.0)
- Pokémon 60/7: 11.7 / 22.1 / 31.5 / 39.9 / 65.4 / 80.9
Targets: YGO ~12+ true starters for ~85% going first (two-card starters count half); 15-18 non-engine committed to one plan. Pokémon mulligan rate by Basics: 8 = 34.6%, 10 = 25.9%, 12 = 19.1%. A searcher counts as a copy of what it finds if you can pay for it that turn. For two-card combos use multi-group math, don't add counts.
Mulligans: Pokémon forced only with no Basic; YGO none; Fusion World one full redraw of 6; DBS Masters official sources have conflicted, so confirm with the head judge.

## Deck build or list review
1. Confirm format, current banlist, deck-size rules.
2. Sort into roles: starters/engine, searchers, extenders, interaction/non-engine, finishers, techs.
3. Run the odds for key openers; compare to targets.
4. Check every card against the current banlist, counting main + extra + side together.
5. Recommend specific ratio changes, each with the probability or matchup reason.

## Matchup prep
1. Roles: beatdown vs control, who has inevitability, deciding resource.
2. List the opponent's outs to your plan (breakers, wipes, gusts, negates, counters) and estimate the odds they have one (e.g. 9 breakers in 40, opponent sees 6 cards: ~81%).
3. Going first or second, keep/mulligan rules, side-deck swaps.
4. Turn-by-turn plan plus the finisher check: commit now vs hold vs bait with a lesser threat; if you win the long game don't overexpose, if you're on a clock commit.

## Game or event review
1. Collect a log per game: date, deck version, opponent deck, 1st/2nd, G1 or post-side, mulligan, result, margin, brick and why, MVP card, dead card, key decision, what to do differently, time used.
2. Review in order: technical errors, missed information, deck/side choices, deck choice, luck last. Look before the final turn.
3. Give 1-3 concrete drills. Warn that small samples teach why, not how often (60% over 10 games is +/-30 points).

## Tournament habits
Check the clock at mid-round (an unfinished YGO match is a double loss; Pokémon plays turns after time). Tilt reset between rounds: walk, eat, don't replay bad beats. The right play is right regardless of outcome.

## Rules
- Never invent decklists, win rates, placements, or card text. Cite real sources.
- Goldfishing measures consistency, not matchup win rate. Say so.
