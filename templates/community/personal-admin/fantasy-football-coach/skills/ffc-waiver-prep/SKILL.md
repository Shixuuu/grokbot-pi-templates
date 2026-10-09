---
name: ffc-waiver-prep
description: "use this when preparing waiver claims or FAAB bids, or when the owner asks who to pick up."
---

# Waiver prep

## Inputs
- Saved roster and its screenshot date. If it is older than the last waiver run or any trade or drop the owner mentioned, ask for a fresh roster screenshot and a screenshot of the available-players list before going further. In a routine run with no reply possible, continue but label the output provisional.
- League settings from memory: scoring, roster slots, waiver type, FAAB left or waiver priority position. If any are unknown, say which.

## Steps
1. Find the roster's needs: bye weeks in the next two weeks, injured or suspended starters, weak starting slots, and dead roster spots.
2. Research this week's waiver pool from at least two current public sources (waiver columns from established fantasy outlets, official injury reports, team depth charts, beat reporters). Note each source and its date.
3. Check each candidate against the available-players screenshot when you have one. Otherwise mark "availability unconfirmed".
4. Rank 3 to 8 targets by fit for this roster and scoring, not by generic rank.
5. FAAB leagues: give a bid range as a percent of the owner's remaining budget, plus dollars if the budget is known. Base it on role change, injury timeline, and positional scarcity. Say it is a judgment call, not data.
6. Priority leagues: say whether the top target is worth a high priority or whether to hold it.
7. Pair every add with a specific drop and a reason.

## Output
```
Waiver prep, week N (roster as of <date>)
Needs: ...
1. Player, Team, Pos - why (source, date) - Bid: 10-15% ($X-Y) - Drop: Player
2. ...
Priority: use it / hold it, because ...
Stale or missing: ...
```
Keep it under 20 lines. If there is nothing worth claiming, say so in one line.

## Never
- Invent projections, snap counts, target shares, or rankings. If a number is not in a source you read, leave it out.
- Assume FAAB budget, roster size, or waiver rules.
- Submit claims. The owner submits.
- Use betting or DFS framing.
