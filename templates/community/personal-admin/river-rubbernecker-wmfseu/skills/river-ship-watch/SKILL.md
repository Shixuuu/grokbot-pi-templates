---
name: river-ship-watch
description: "Use this when setting up or running a live AIS watch for big ships passing a spot on any river, harbor or channel."
---

# River ship watch

## 1. Get the free AISStream key
1. Go to https://aisstream.io and sign in (GitHub login).
2. Open the API Keys page and create a key.
3. Request it with a secure secret input named `AISSTREAM_API_KEY`, never a chat paste. Never print it in logs or chat.

## 2. Build the owner's watch area
- Viewing spot: the owner's general area, or an exact point only if they offer one (kept private in memory).
- Search box: much wider than the spot. Cover the approaches in both directions far enough that a ship is seen 1–2 hours before she reaches the spot (typically tens of km up and downstream, out to the harbor entrance or bay).
- Port geography: list the terminals, anchorages and locks up and downstream. Mark which ones force ships to pass the spot and which stop short. This decides who gets alerted. Check it against a public tracker's port list.

## 3. Connect
- WebSocket: `wss://stream.aisstream.io/v0/stream`
- Within about 3 seconds of connecting, send:
```json
{"APIKey": "<AISSTREAM_API_KEY>",
 "BoundingBoxes": [[[<south_lat>, <west_lon>], [<north_lat>, <east_lon>]]],
 "FilterMessageTypes": ["PositionReport", "ShipStaticData"]}
```
- Listen about 150 seconds per poll, then close. PositionReport has lat/lon, speed and course. ShipStaticData has name, type, size (Dimension A+B = length) and destination. Join them by MMSI.
- Coverage is from volunteer receivers and can be thin. If it's empty or down, fall back to public MyShipTracking / VesselFinder pages and the expected-arrival lists for the nearby ports.

## 4. What counts as cool
- Commercial ships about 150m and longer (tankers, container ships, bulk carriers, car carriers, cruise ships) that are underway and headed past the spot. Tune the length bar to the waterway.
- Skip tugs, barges, pleasure boats and ships moored or anchored.
- ETA past the spot = river distance along the channel divided by speed, not straight-line distance. Recheck, since ships slow for pilots, bends and berths.

## 5. Bookkeeping
- `sightings.jsonl`: every ship alerted, by MMSI, so nothing gets pinged twice.
- `pending-passes.json`: alerted ships with pass ETA and T-60 / T-30 due times, used by the countdown routine.
- Poll about every 30 minutes during alert hours; 2-hour gaps miss ships.

## Worked example: Philadelphia, Delaware River
- Search box about 39.70–40.15 N, 75.55–74.70 W (Delaware Bay approaches up through Fairless Hills / Bristol).
- Ships for Packer Ave, Paulsboro, Marcus Hook, Chester and Wilmington stop south of Center City. Traffic to or from Fairless Hills, Bristol and Burlington must pass Penn's Landing both ways.
- Fairless-outbound ships pass Center City sooner than straight estimates; a 190m bulker on that run is the calibration ship.

## Optional upgrade
A balcony AIS receiver (RTL-SDR Blog V4 about $50, or dAISy 2+ about $140), an AIS antenna such as the Shakespeare 5215-AIS (about $75), and a Raspberry Pi running ais-catcher give local, gap-free data. AISStream stays as backup.
