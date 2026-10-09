---
name: redzone-routines
description: "Use this at the end of onboarding to create Redzone's routines, or when the owner's timezone, league, waiver schedule, or routine preferences change."
---

# Redzone routines

Create exactly **4** routines with your routine tool (update_state, target "routine", action "create") in the owner's timezone, placing waiver routines from live league data. Never use :00 or :30. Update an existing Redzone routine instead of duplicating it. Then tell the owner the schedule in two lines.

**Placement rules**
- Kickoff-bound times below are in ET. Convert them to the owner's zone; if that zone doesn't follow US daylight saving, keep ET with a `CRON_TZ=America/New_York` prefix.
- Waiver run: the real time of the league's first weekly run, from status.waiverLastExecutionDate (not the raw waiverProcessHour). For Sleeper, use waiver_day_of_week and daily_waivers_hour, confirmed with the owner.
- **Weekly review** runs at least 2 hours before that run, in waking hours (default Tue about 9:45 AM owner time). If the run comes earlier, move the review to the evening before (about 8:45 PM).
- **Waiver results** runs 1-3 hours after the run. If that falls in quiet hours (10 PM-7 AM owner time), use about 8:15 AM instead.

**Shared rules for every prompt:** read the redzone-manual skill and config.json first and follow the mode (paused, suggest by widget, or auto for its move types only; waiver-class moves always suggest per auto_waivers). Every run includes a league watch (big-name drops, rivals' moves, league_mates.json) and a trust ladder check. Any error gets a bug note. Quiet unless something changed or needs the owner; the Tuesday review, the Friday lineup run, and the Sunday morning matchup/lineup **preview** always send (inactive checks stay quiet when nothing changed).

## 1. Redzone weekly review (Tuesday anchor, always sends)
Schedule: per the placement rules, e.g. `47 9 * * 2`.
Prompt: Run redzone-weekly-research for the week just ended; grade last week; update ROS tiers/tags; rank 1-3 waiver targets with bid/drop; radar + byes; holiday/Sat lineup note from week 14; memory cleanup per manual; week-1 rating widget if due. Phone-short.

## 2. Redzone waiver results
Schedule: per the placement rules, e.g. `13 8 * * 3`.
Prompt: Check research for claim wins/losses; fit new players; propose best remaining FA if a need is open; flag first practice-report issues for starters.

## 3. Redzone lineup check
One routine. If your routine tool accepts a group trigger of crons, use two:
- Weeknights: `53 18 * * 1,4,5` ET (Mon and Thu after the night game's inactives; Fri after designations).
- Weekend: `37 8,11,15 * * 0` ET (international games, 1 PM games, 4 PM games plus Sunday night).
Otherwise use one cron, `53 8,11,15,18 * * 0,1,4,5` ET; the extra weekday runs find no game before the next check and do nothing.
Prompt: Use research watchlist/bust flags. For unlocked games: inactives, designations, kickoffs. Fix OUT/Doubtful/inactive/bye; pivot Q (later FLEX backup). Suggest mode: deadline before kickoff. Skip if no game before next check. Friday always sends weekend lineup + Q contingencies.

## 4. Redzone Sunday matchup / lineup preview (always sends; additive to lineup check)
This is **not** the reactive inactive/lock check (routine 3). It is a proactive start/sit + matchup brief before typical Sunday locks.
Schedule (owner timezone): `44 8 * * 0` (Sunday ~8:44 AM owner local — after Saturday, before most 1 PM ET / noon-ish local locks for US Central; convert if the owner's zone differs). Keep existing weekend inactive checks at 8/11/15 ET.
Prompt: Playbook + latest research + roster read. Always send a short Sunday start/sit + matchup preview (lineup, closest calls, weather/early flags, watchlist hits). If fully locked, one "locked / no changes" line. Do not replace later inactive checks.
