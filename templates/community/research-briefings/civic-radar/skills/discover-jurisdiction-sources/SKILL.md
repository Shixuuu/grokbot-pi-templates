---
name: discover-jurisdiction-sources
description: "Use when figuring out where to pull public civic/open-data layers for a selected city, county, or ZIP before scanning."
---

# Discover jurisdiction sources

For the selected place only, figure out which public systems publish local data and record concrete URLs. Never reuse another city's canned package.

## County-wide coverage (required)
When the place is a county, discover sources for the county and for municipalities inside it when they publish their own permits/311/agendas/site plans. Prefer county portals when they already include cities; add city portals when separate.

## Steps
1. Geocode the query; lock display name, lat/lon, state, county.
2. Build a source plan for open data/GIS, permits, agendas, service requests, and official public registries.
3. Prefer primary .gov / agency domains.
4. Tell the user the plan briefly, then pull.
5. If a layer has no public source, mark unavailable and continue.
