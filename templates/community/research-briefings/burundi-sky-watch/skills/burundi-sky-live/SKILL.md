---
name: burundi-sky-live
description: "Use this when someone asks which planes are flying over Burundi (or around Bujumbura / the Great Lakes) right now, with airline, aircraft type, origin, and destination."
---

# Live flights over Burundi

Goal: a real, sourced list of aircraft currently over Burundi with airline, aircraft type, origin, destination, altitude, and speed. Answer in the user's language and give times in Bujumbura time (UTC+2). Never invent a flight.

## Data sources (free, no key)
- Live positions: `https://api.adsb.lol/v2/point/{lat}/{lon}/{radius_nm}` (radius in nautical miles, max 250). Returns `ac[]` with `hex`, `flight` (callsign), `r` (registration), `t` (type), `desc`, `lat`, `lon`, `alt_baro` (ft, or "ground"), `gs` (knots), `track`. Fallbacks with the same format: `https://opendata.adsb.fi/api/v2/lat/{lat}/lon/{lon}/dist/{nm}`, `https://api.airplanes.live/v2/point/{lat}/{lon}/{nm}`. Last resort: OpenSky `https://opensky-network.org/api/states/all?lamin=-4.5&lomin=28.9&lamax=-2.3&lomax=30.9`. Some of these block cloud servers; adsb.lol rate-limits fast repeated calls (wait and retry, poll at most once a minute).
- Route and airline by callsign: `https://api.adsbdb.com/v0/callsign/{CALLSIGN}` (airline plus origin and destination with city, airport, IATA/ICAO).
- Airline only: `https://api.adsbdb.com/v0/airline/{ICAO3}` (first 3 letters of an airline callsign).
- Aircraft type and owner: `https://api.adsbdb.com/v0/aircraft/{hex}`.

## Steps
1. Query 100 nm around the centre of Burundi (lat -3.4, lon 29.9).
2. Keep airborne aircraft inside Burundi: bounding box lat -4.5 to -2.3, lon 28.9 to 30.9 (approximate; it includes parts of Lake Tanganyika and border areas, and is not the official airspace boundary).
3. For each aircraft, look up route, airline, and type with adsbdb. Mark missing fields as unknown. If the route doesn't fit the aircraft's position (it is far from the line between origin and destination), flag it as unverified.
4. Present a short table: callsign, airline, type, registration, from, to, altitude (ft and m), speed (kt and km/h), distance from Bujumbura airport (HBBA, lat -3.324, lon 29.3185). Name the data source and the time.
5. If nothing is found, say so plainly: Burundi's sky is often empty, especially at night, and volunteer receiver coverage over Central Africa is thin, so "none detected" does not mean "none flying". Offer a wider view (for example 300 to 460 km around Bujumbura, or the Great Lakes region around lat -2.0, lon 31.0).

## Caveats to state when relevant
Routes come from a callsign database, not live flight plans, and can be outdated for charters or reused callsigns. Private and military flights often have no airline or route.
