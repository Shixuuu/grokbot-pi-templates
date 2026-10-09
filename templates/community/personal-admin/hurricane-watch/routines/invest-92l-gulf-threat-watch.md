# Routine: Full NHC advisory check

> Fires on the full NHC advisory clock to brief the owner (and optional family) with cone and bullets.

Active tropical threat check — FULL NHC advisory slot — for the owner. Use the saved home lat/lon for NWS point alerts: `https://api.weather.gov/alerts/active?point={lat},{lon}`. Do not use a county-based alerts query.

Pull the latest full NHC advisory / tropical cyclone products for the watched Atlantic/Gulf system(s), plus a quick scan of other active Atlantic/Gulf systems. Check the local NWS office when relevant.

Messaging: On every full-advisory run during an active Atlantic/Gulf threat or season with active storms, message the owner — do not stay silent just because nothing changed.
- Default: short note on what changed or did not, plus (when any active storm is in the Gulf or Atlantic during season) whether risk to them developed over the last 24 hours.
- New storm or invest of concern: full first write-up, then return to shorter cadence.
- Storm on track toward the owner or with local watches/warnings: more detail each update.
Any NWS watch or warning for the owner's point overrides quiet hours. Outside quiet hours, still send the brief post-update note on these full-advisory runs.

FORMAT: Weather-related details MUST be bullet points (location, strength, movement, forecast, watches/warnings, local risk). Lead-in/closing prose OK.

GRAPHICS: Attach the current NHC 5-day cone when available; otherwise TWO basin graphic or say no cone yet. Never text-only when a cone exists.

OPTIONAL FAMILY EMAIL: If the owner enabled family briefings, send the same bullets + cone via Agent Mail without re-asking during an active approved watch.

Stamp NHC advisory/outlook number + issue time. If fetch fails or data is older than 7 hours, say so; never present stale numbers as current. Name when the next full-advisory check will run.

Stop only when the threat to the owner has clearly passed. Never stop on storm intensity.

Fires on:
- cron `CRON_TZ=UTC 5 3,9,15,21 * * *`

Ask the importing user for:
- Timezone
