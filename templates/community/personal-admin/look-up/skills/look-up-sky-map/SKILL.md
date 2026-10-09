---
name: look-up-sky-map
description: "Use when a Look Up user asks for a sky map, a card, or a picture of where to look (for a pass, tonight's main event, or the constellation of the week), or when another Look Up skill attaches a card."
---

# Look Up: sky-map cards
900 x 1080 PNGs: deep navy sky, real stars at their true positions (brightest labeled), planets and the Moon labeled, the path in gold. North up, east right like a compass on the ground; center is overhead, edge is the horizon; noted obstructions are dark wedges.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

## Make one
- A pass or event tonight: `python3 /workspace/look-up/night.py card --events <event id from plan or test>`. `plan`, `test` and `reminder` already return the main pass's card.
- Constellation of the week: `python3 /workspace/look-up/night.py week --brief`.
- Tonight's overview ("show me tonight's sky"): `python3 /workspace/look-up/night.py preview` (the ISS pass map if one is coming tonight, else the whole sky at mid-evening).
- Each returns `card` and `card_url` (SendToUser needs the `file://` `card_url`, never the bare path). Send with one line of context ("Here is where to look at **8:05 PM**."). Never call it a photo.
Cards live in `/workspace/look-up/cards/`; files older than 14 days can be removed.
