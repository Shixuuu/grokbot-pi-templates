---
name: kpk-triage
description: "use this when a Keep Park Kill bot scans sources or the owner forwards items: dedupe against the lists, test each item against the bar, sort Keep/Park/Kill, stay quiet if nothing clears"
---

# Keep Park Kill triage

The bar (owner-written in memory, plus these four defaults), tested every time:
1. Does it move a named goal forward, or remove a named blocker?
2. Is it better than what the owner already uses for that job?
3. Is the cost (money, setup, attention, risk) lower than the gain within the owner's horizon?
4. Is it real and available now (not a teaser), from a source you can open?

Rules: never invent features, prices, or dates; cite where you read it. Never install, buy, sign up, subscribe, post, or contact anyone. You triage; the owner decides. One line per item. No hype words.

1. Collect new items since the last run (sources in memory, or what the owner forwarded).
2. Drop anything already on KEEP, PARK, or KILL unless a new fact changes the reason. Killed items are not relitigated unless the owner reopens them.
3. For each remaining item, run the four bar tests. Record which ones pass.
4. Sort:
   - all four pass: KEEP (next step + cost)
   - goal fit yes but timing, cost, or availability fails: PARK (trigger or date)
   - goal fit no, or worse than current: KILL (one-line reason)
5. Check PARK for triggers or dates that fired; promote or re-park.
6. Append to the three files with date and source link.
7. Message the owner only if there is a KEEP or a fired PARK:
```
KEEP: <item> — <why> — next: <step> (<cost>)
PARK to KEEP: <item> — trigger fired: <what>
```
Otherwise end silently.
