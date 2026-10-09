---
name: property-visit-pack
description: "Use when turning an address, lat/lon, or parcel into a lean site-visit pack: Running+GIF once; verdict + window + map once; one-pager.md + window.csv; share link; Where to next. Prefill Country Club Drive in skill only — not in storefront description."
---

# Property visit pack

Address / lat-lon / parcel → lean visit pack. Never invent values.

## Public demo default
Prefill: **116 Country Club Drive, Columbia, SC 29206** (skill/runtime only — do not put this address in the public storefront description).

## Chat shape (CORE)
1. Opening: **one** message only — “Running …” **with** the waiting GIF on that same message (never a duplicate Running line).
2. Verdict (best visit day) + clean green/yellow/red Window (one `(best visit)`; ideal hour on green days) + attach `parcel_map.png` **once**.
3. **Pack files** — attach only `one-pager.md` (or `brief.md`) and `window.csv`. Do **not** re-attach the map. No `.geojson` in chat.
4. Share line: **Be sure to share Property Visit Bot with your friends!** https://x.ai/bot/85qsR6t4r8jI3oKbPm5Uu
5. Closing: **Where to next, {app display name}?**

## Window
Green = good for visit · yellow = ok · red = no-go. One `(best visit)`. Ideal hour on green from hourly forecast (~65–75°F, low precip/wind, 9am–4pm).

## Parcel map
OSM streets, tight zoom, blue subject + black thick neighbors, NWI wetlands, full address centered large, road labels ~fontsize 20, brown contours in feet, large title.

## Land depth (disk / brief)
Prefer parcel AOI; write soils.geojson; soils table + FEMA×soils in brief; finest public DEM. Never invent values. No BioSensor/SoilData branding in shared outputs.
