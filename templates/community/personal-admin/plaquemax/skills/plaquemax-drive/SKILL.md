---
name: plaquemax-drive
description: "Use this when someone gives Plaquemax a route, checks in during a drive (\"what's next?\", \"just passed Hickory\"), arrives, asks about their marker passport, or sends a photo of a historical marker."
---

# Plaquemax drive

Everything said during a drive gets read aloud. Use short complete sentences with no tables, links, or markdown. Each question must be answerable in a few words. Every marker, mile, and fact comes from the engine output. Never invent one. Read the user's saved preferences from memory first and skip any question they already answered.

## 1. Route in
Take origin, destination, any roads named, and where they are now. If they don't give a position, assume they're leaving now from the origin. If the route is unclear, ask one question, for example "Charlotte to Asheville, which way?"

## 2. Quick asks (skip any with a saved answer)
- Detour: "Right off the road, up to 5 minutes, or up to 15?" These map to `roadside`, `5min`, and `15min`.
- Stop types: "Any favorites, like Civil War, Revolutionary War, Native American, railroads, notable people, or quirky local history? Or should I pick?" "You pick" means a varied mix.
- Kid mode: only ask if it isn't set. "Kids in the car? Want a fun fact and a question at each stop?"

## 3. Theme offer
Run the theme scan (see the plaquemax-engine skill). If the top theme spreads over most of the drive, offer it in one line: "There's a strong Civil War theme on your route, 37 markers. Want to follow it?" If they say yes, run `--theme` and open with one plain line on the arc, using only titles and dates from the output. If they say no, use their stop types or the varied mix. If the scan is slow, give the default list first and offer the theme when it's ready.

## 4. The list
Give 5 to 10 stops, default 8, in driving order, with more on request. Each stop gets one line: how far ahead, road or exit, name, then one context sentence from the inscription. Then add a short "why it matters" line that explains, from the inscription, why a passerby should care, such as a first, a turning point, a famous person, or something you can still see. If the inscription doesn't support a why, skip it rather than guess. Pass on any Heads up line from the engine. In kid mode, add one fun fact taken from the inscription and one quick question, such as "Guess how many soldiers rode through here?"

## 5. Heads-ups
Times are estimates from the route's drive times, not live GPS. Say that once per drive.
- Save the trip to `~/plaquemax/trips/<date>-<slug>.json` with the route, departure time, and each stop's id, title, minutes from start, and status (`ahead`, `stopped`, or `passed`).
- Create one temporary routine on this bot named `plaquemax-drive-watch` with schedule `@every 5m`. Its prompt: read the newest trip file and, for any stop now 5 to 10 minutes away by the estimate that hasn't had a heads-up, send one line, for example "In about 8 minutes, Stoneman's Raid, I-26 exit 49. Union cavalry rode through Hendersonville in April 1865. Want to stop?" Mark it warned. Stay silent otherwise. Delete itself once the last stop is passed or 60 minutes after the estimated arrival.
- Check-ins re-time everything. "Just passed Forest City" means rerunning with `--from` and shifting the times. "Stopped for gas, 20 min" adds 20 minutes to the remaining stops. "What's next?" gives the next 2 or 3 stops ahead.
- "Stopped at X" or "we stopped" marks that stop `stopped` and logs it to the passport.

## 6. Arrival recap
When they arrive (they say so, or the watch routine ends), send one short recap: stops they made, notable ones they passed, and the skipped ones saved for the return trip. Save the skipped ids in the trip file under `return_trip`. When they later ask for the reverse route, lead with those.

## 7. Passport
Keep `~/plaquemax/passport.json` with each stop's date, id, title, topics, and whether a photo came with it. When asked, or in the recap when it's a milestone, say running counts plainly, for example "That's 14 Civil War markers this year, 31 total."

## 8. Photo log
When they send a plaque photo:
1. Read the title and the first lines of text from the image.
2. Get a rough location from what they said or the current trip.
3. Run `--find "<title or first line>" --near "lat,lon"`.
- On a match, log it to the passport with the hmdb id and confirm in one line.
- On no match, log it as a new find with the transcribed text and the location. Tell them it doesn't appear to be in hmdb yet, and that they can submit it at hmdb.org if they want. Never submit it for them.

## 9. Full inscription
When asked, run `--id` and read the inscription as written. Offer to save the trip list to chat after the drive.
