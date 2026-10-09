---
name: sleeper-live-draft
description: "Use when running a Sleeper fantasy football live or mock snake draft. Entire draft. Autopick off. Never idle. All filter; clear search before typing the research pick; click +. No queue by default."
---

# Sleeper live draft

Sleeper is the official click. The timer lives here. A click in Draft Dominator never makes the Sleeper pick.

**Goal: run the entire draft.** Every round, every pick, until rosters are full.

**Autopick is a total failure.** Keep Autopick OFF. Before every pick and between picks, verify it is grey/off. If it turns on, click it off immediately. Keep clicking Draft yourself. Autopick with an empty queue will take DEF/K early — catastrophic.

**Never go idle through YOUR TURN.** Idle is how Autopick arms and how the owner has to ping. Stay on the Sleeper draft tab and click when yellow.

Confirm the pick timer on the host. Do not assume 30 seconds.

Assumes signed in to Sleeper. Football Guys / Draft Dominator is the ranking glance (another agent or tab may own DD).

## Shared success loop (same as Yahoo; different UI)

1. Autopick OFF (check every wake)
2. Never idle through OUR TURN
3. Clear Find player completely before typing a new name
4. Get FG top 3 + rec (~2 picks out); owner override wins
5. On the clock: All filter → clear search → type name → click **+**
6. After the pick: clear search, Autopick still OFF, ask FG for the next list

## Never a new tab

The Sleeper draft tab is already open. Click that tab. Do not open a new tab. Do not reload from sleeper.com home and hunt for the draft.

Live draft URL looks like `sleeper.com/draft/nfl/{draftId}`.

## Never hunt a drafted player

If the name is already gone, do not search for them. Take the next remaining name from the Football Guys click-down.

## No queue (default)

Do **not** build or rely on the Sleeper QUEUE. Stale queues cause wrong picks under the clock (taught: a stale queue drafted the wrong player).

On YOUR TURN: take Football Guys’ recommend (or next remaining name) from the **player list**.

## Player list: always All

Leave the position filter on **All**. Never sit on WR / TE / QB / RB. Position filters hide the target.

### Clear search BEFORE every new name

The Find player box keeps prior text. Typing into a dirty field creates mashed queries like `SmithJones` and the list goes blank.

**Every search:**

1. Click into Find player
2. Clear it completely until the placeholder shows
3. Type `{player}` (last name is fine)
4. Click the blue **+** on that row
5. Clear search again after the pick

## Roster judgment

Prefer FG rec on the clock. Bye / need / upside can beat a higher sheet rank. Owner override beats FG.

## Late rounds: K and DEF last

Do not take Kicker or Defense until the last two picks unless both are already filled.

## YOUR TURN: click now

1. Be on the existing Sleeper draft tab **before** YOUR TURN
2. Watch yellow slot / API poll when configured
3. Have Football Guys’ name ready (~2 picks out)
4. On the clock: Autopick OFF → **All** → **clear search** → type `{player}` → click **+**
5. If gone: clear search → next FG name
6. No confirm. Do not tab away.

## Between picks

Stay on Sleeper. Autopick OFF. Filter **All**. Clear leftover search. Ask FG for the next list. Refresh ~2 picks before.

## Inputs vs constants

- **Inputs:** `{league}` existing Sleeper draft tab, `{player}` from Football Guys (or owner override), clock length
- **Constants:** Sleeper **+** is the pick, Autopick off, never idle, no new tab, clear search, All filter, no queue by default, K/DEF last, DD glance-only

## Operator notes

- Existing Sleeper tab only
- Autopick OFF — verify every wake
- Never idle through YOUR TURN
- Clear search → + on FG/owner name
- After pick: ask FG for the next list
- Stay until the last round
