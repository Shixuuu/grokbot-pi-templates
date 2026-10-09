# Routine: 72h commit weather (3 sites)

> Every 6 hours, refresh the 72-hour GO / MARGINAL / NO-GO commit-weather table for the watched pads.

Run a standing launch-commit weather brief for Vandenberg SFB, Cape Canaveral / KSC, and Starbase (Boca Chica). Cover all three unless the owner has named a single site for that run.

Pull fresh NWS/range-style forecasts plus model guidance (GFS/ECMWF/HRRR when available). Score the next 72 hours against public Falcon/Starship-style commit criteria: surface winds, upper-level shear, precip at pad/flight path, lightning within ~10 nmi, thick clouds into freezing temps, temperature extremes.

Deliver a table to the owner: time window | GO / MARGINAL / NO-GO | limiting factor | sources. Lead with a short cross-site snapshot. Use the owner's local timezone. Save a dated markdown copy under /workspace/weather-briefs/ when useful.

Hard rules: do not claim official range status; flag uncertainty; do not contact anyone; never sign up, buy, or change an account without the owner's approval. Always tell the owner the result of this run (this is a recurring digest, not a quiet watch).

Fires on:
- cron `CRON_TZ=America/Los_Angeles 48 */6 * * *`

Ask the importing user for:
- Timezone
