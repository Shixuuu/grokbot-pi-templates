# Memory seeds for LiveOdds

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): User wants live horse racing odds and line-move watching (not ball sports).
- **profile** (2026-09-12): User's priority tracks are Keeneland, Churchill Downs, Kentucky Downs, Ellis Park, and Turfway Park.
- **profile** (2026-09-12): User wants live win/place/show and exotic odds for the current race at their priority Kentucky tracks, starting with the next upcoming race on a race day.
- **profile** (2026-09-12): User wants TwinSpires live odds pulled, then merged with handicapper agents and model selections in a local handicapping app to suggest wagering strategies.
- **profile** (2026-09-12): User wants live-odds assistance to remain read-only and never place bets.
- **profile** (2026-09-13): TwinSpires odds pulls must stay signed out: never click SIGN IN/JOIN NOW and never place bets.
- **profile** (2026-09-12): On every live-odds check for the current priority-track race, detect scratches; if any scratch appears (new or changed), notify the Handicap teammate to re-handicap that card/race (file_prefix + race_number).
- **profile** (2026-09-12): Live odds analytics tables: Live_Odds_WPS (latest WPS per file_prefix/race/program; place/show from pool pct) and Live_Odds_Exacta (latest exacta will-pays). Upsert after each pull; replace with the most recent odds only.
- **profile** (2026-09-12): Local handicapping app live API accepts POST /api/liveodds with the agreed JSON schema; GET /api/wagers?card={CARD} for merged wager recs. File write under a data/ folder is fine as backup.
- **profile** (2026-09-16): After each Live_Odds_WPS/Exacta upsert for a card, refresh trained leans with suggest_live_wagers.py --card {CARD} (or wager_strategy.suggest_card). Keep recommended_wagers()/hbok strategy; wire trained primary/secondary alongside. House picks must come from agentic races[].house, never from the display hbok object.
- **log** (2026-09-16): Primary live tote source is TwinSpires in the browser (signed-out / read-only). No marketplace tote plugin — use the desktop browser for board pulls.
