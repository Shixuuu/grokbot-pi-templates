---
name: osumo-discovery
description: "use this when locating a page on osada.us for a basho, torikumi day, rikishi, kimarite, or analytics view"
---

# o-sumo Site Discovery

Resolve human-facing URLs on https://osada.us/. Prefer `/api/v1/*.json` for data; use these paths for pages.

| Use | URL |
| --- | --- |
| Home | `https://osada.us/` |
| Archives | `https://osada.us/archives/` |
| Rikishi list | `https://osada.us/rikishi/` |
| Kimarite | `https://osada.us/kimarite/` |
| Analytics | `https://osada.us/analytics/` |
| Basho banzuke | `https://osada.us/{YYYYMM}-banzuke/` |
| Basho results | `https://osada.us/{YYYYMM}-torikumi/` |
| Basho schedule | `https://osada.us/{YYYYMM}-yotei/` |
| Day results | `https://osada.us/{YYYYMMDD}-torikumi/` |
| Day schedule | `https://osada.us/{YYYYMMDD}-yotei/` |
| Rikishi profile | `https://osada.us/rikishi/{id}/` |

## Rules

1. Month keys are `YYYYMM` (e.g. `202607`). Take them from `torikumi.json` `bashoId` / `resultDays[].pathDate`.
2. Day pages use `pathDate` (`YYYYMMDD`).
3. Rikishi URLs use numeric `id` from `rikishi.json`, never shikona.
4. Always include the trailing slash.
5. For markdown, send `Accept: text/markdown`.

Sitemap: `https://osada.us/sitemap.xml`. Catalog: `https://osada.us/.well-known/api-catalog`.
