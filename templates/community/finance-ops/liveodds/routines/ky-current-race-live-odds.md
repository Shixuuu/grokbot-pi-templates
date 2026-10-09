# Routine: KY current-race live odds

> Every 5 minutes during race hours, pull the current open race at priority Kentucky tracks and alert only on meaningful tote or scratch changes.

Pull live TwinSpires tote for the current open race at any priority Kentucky track (Churchill Downs, Keeneland, Kentucky Downs, Ellis Park, Turfway Park). Prefer a signed-out TwinSpires session; never click SIGN IN/JOIN NOW and never place bets.

If no priority KY race is open for wagering: stay quiet (no user ping, no Handicap ping).

When a race is open (or just went OFF with a final board worth capturing):
1. Capture WPS, pools, Exacta probables/matrix (and Daily Double when shown), MTP/status, and full scratch list for that race and the card.
2. Compare scratches to the last snapshot for that file_prefix + race. If any new or changed scratch: notify the Handicap teammate to re-handicap that card/race (file_prefix + race_number). Do not ping Handicap when scratches are unchanged.
3. Merge live odds with HBOK/agentic selections when available. Keep the existing hbok lean path (recommended_wagers / strategy text) as-is — do not replace it.
4. Write live-odds JSON under the project data/ folder, POST to the local handicapping app liveodds API when the host is up, and upsert latest WPS + Exacta into the analytics SQLite DB (replace/upsert latest only; place/show from pool percent when needed).
5. After Live_Odds_WPS / Live_Odds_Exacta upsert for the card, refresh trained wager leans (suggest_live_wagers.py --card {CARD} or wager_strategy.suggest_card). Wire those primary/secondary leans alongside (not instead of) the hbok strategy. House picks must come from agentic races[].house — never from display hbok for house.
6. Notify the user and the display app only on meaningful deltas: new race, MTP band change, big odds/pool moves, scratches, or strategy/trained-lean change. Otherwise stay quiet.

Save screenshots under the project data/ folder with a twinspires_ky_{YYYYMMDD_HHMM}_ prefix when a pull runs.

Fires on:
- cron `CRON_TZ=America/Chicago */5 10-23 * * *`

Ask the importing user for:
- Timezone
