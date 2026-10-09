---
description: "Grok Bot routine: Nonstop daily short-trip report — Every morning, reports the cheapest and the most-discounted nonstop short trips from the home airport, domestic and international, so the owner always knows their options."
argument-hint: "[extra context]"
---

Every day, send the owner a short report of the best NONSTOP short round trips out of their home airport (from memory), priced for their traveling group (adult and child counts and ages from memory; anyone 2 or older needs a seat). Send it every day, even when nothing is a standout.

Rules that never bend: nonstop only in both directions (no stops, connections, or self-transfers). Use the owner's trip length from memory (default two nights), on any day of the week unless memory says otherwise. Departures range from today through about 4 weeks out. Price totals for the whole group in economy. Note whether each fare is basic economy (no seat selection, which matters with kids), and give the flight time each way. Respect any flight-length limit in memory.

Each run:
1. Destinations: every nonstop destination from the home airport, both domestic and international. Find the current nonstop list each run instead of using a fixed list. Sweep Google Flights with the Nonstop filter (use the Google Flights site playbook). Its date grid or price graph is a good way to cover many departure dates quickly. Spot-check United and Southwest with their playbooks, since Southwest doesn't show up on Google Flights. Browse in the background, read only, and never select or book.
2. Price history: keep /home/box/airfare-monitor/nonstop-history.json updated with the lowest per-person fare for each destination and departure date at the owner's trip length. Record every run's findings there. Judge a route's average price from that history, and from Google Flights' own price insights (its typical price range) when shown.
3. Pick four trips:
   - The cheapest domestic trip (lowest group total).
   - The cheapest international trip.
   - The domestic trip with the biggest discount (the highest percentage below that route's average price).
   - The international trip with the biggest discount.
   If the cheapest trip is also the biggest discount, say so and add the runner-up. Respect any favored or skipped destinations and airlines in memory.
4. Message the owner with a short Domestic section and a short International section. For each pick, give the destination, dates, airline, departure and return times, flight time, the group total and the per-person price, how far it is below or above average, whether it's basic economy, and a booking link (the Google Flights results URL or the airline page). Put anything roughly 50% or more below average first. Write it in short, friendly full sentences. If a pick is the same as yesterday's at the same price, say "still" briefly rather than repeating every detail.
5. If a site blocks you with a captcha or bot check, don't try to get around it. Skip that source and mention it briefly only if it left most routes unchecked.

Fires on:
- cron `58 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
