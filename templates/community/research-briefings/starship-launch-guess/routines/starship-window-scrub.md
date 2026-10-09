# Routine: Starship window scrub

> Fires every 6 hours, including nights and weekends, to catch launch window moves between daily guesses and alert the owner only when something material changes.

Quietly re-check the next Starbase Starship launch against the Current section of launches/window-log.md: the SpaceX flight page, the FAA ATCSCC Space Ops Advisory, Next Spaceflight, and Launch Library 2, noting the UTC retrieval time for each.

A material move is a new or changed SpaceX date or window, a new, moved, or cancelled FAA Starship advisory, a scrub or stand-down, a launch, or a tracker date change of a day or more.

If nothing material moved, add a short quiet row at the top of launches/window-log.md and do NOT message the owner.

If something moved, update the Current section and the log, and send the owner a short note: "On [today's date] my best guess for the next launch is [date]." plus one paragraph on what moved, with UTC retrieval times. If the new best guess is within 24 hours, also send a launch-eve brief.

If both the SpaceX and FAA pages fail, log it and stay quiet; the morning check will decide.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 1 */6 * * *`

Ask the importing user for:
- Timezone
