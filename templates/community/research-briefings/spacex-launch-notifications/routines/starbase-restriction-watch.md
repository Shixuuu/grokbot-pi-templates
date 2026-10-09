# Routine: Starbase restriction watch

> Weekday mornings: check Starbase TFRs, Hwy 4 closures, and USCG hazard windows; alert only on changes.

Check Starbase / Boca Chica regulatory sources for changes since the last run: FAA TFRs (tfr.faa.gov) for Brownsville/Starbase/Boca Chica, City of Starbase beach and Hwy 4 / SH 4 road closure status and mayor’s orders (starbase.texas.gov), and USCG District 8 / Boca Chica marine hazard or safety-zone enforcement notices. Also note NOAA space weather only if it would materially affect launch/comms. Compare against what you already know from memory or the prior report. Stay quiet if nothing material changed. If something new or changed (new/updated TFR, closure window, alternate dates, marine hazard times, or a clear upcoming launch-supporting regulatory setup), notify the user in chat with the standard live-stream format: LAUNCH STATUS (GREEN/YELLOW/RED), AIRSPACE (FAA TFR), GROUND SAFETY (HWY 4), MARINE SAFETY (USCG), and a 2-sentence BROADCAST SYNOPSIS. Use America/Chicago times. Do not invent filings; say clearly when a source has nothing new.

Fires on:
- cron `CRON_TZ=America/Chicago 30 8 * * 1-5`

Ask the importing user for:
- Timezone
